import './SharedChallengePage.css'
import React, { useState, useEffect } from "react"
import { io } from "socket.io-client"
import constants from "../constants"
import SharedChallenge from '../components/SharedChallenge'
import SharedChallengeTimer from '../components/SharedChallengeTimer'

const SharedChallengePage = () => {
    const [isBingoLaunched, setIsBingoLaunched] = useState(true)
    const [socket, setSocket] = useState(null)

    useEffect(() => {
        setSocket(io(`${constants.SERVER_URL}`))

        return () => {
            socket.close()
        }
    }, [])

    const [pastChallenges, setPastChallenges] = useState([])
    const [currentChallenge, setCurrentChallenge] = useState('') 

    const setCurrentChallengeFromWs = (ws) => {
        setCurrentChallenge(ws.challenge) 
    }

    let updateInterval
    const [secondeTimer, setSecondeTimer] = useState(0)
    const [minuteTimer, setMinuteTimer] = useState(0)

    const setTimerFromWs = (ws) => {
        const secondsPassed = (Date.now() - ws.date)/1000
        const minuteTimer = Math.floor(secondsPassed/60)
        const secondTimer = Math.floor(secondsPassed%60)
        setSecondeTimer(secondTimer)
        setMinuteTimer(minuteTimer)
    }

    const resetTimer = () => {
        setSecondeTimer(0)
        setMinuteTimer(0)
    }

    useEffect(() => {
        updateInterval = setInterval(() => {
            setSecondeTimer(oldSecondeTimer => {
                let newTime = oldSecondeTimer + 1
                if (newTime >= 60){
                    setMinuteTimer(oldMinuteTimer => oldMinuteTimer + 1)
                    return 0
                } else {
                    return newTime
                }
            })
        }, 1000)

        return () => {
            clearInterval(updateInterval)
        }
    }, [])

    const addPastChallenges = (wsEvent) => setPastChallenges(wsEvent.pastChallenges)

    const onConnection = (wsEvent) => {
        const isStarted = wsEvent.challenge !== "Le bingo n'a pas démarré"
        setIsBingoLaunched(isStarted)
        if (isStarted) {
            setCurrentChallengeFromWs(wsEvent)
            setTimerFromWs(wsEvent)
            addPastChallenges(wsEvent)
        }
    }

    const onNewChallenge = (wsEvent) => {
        const isStarted = wsEvent.challenge !== "Le bingo n'a pas démarré"
        setIsBingoLaunched(isStarted)
        if (isStarted) {
            setCurrentChallengeFromWs(wsEvent)
            addPastChallenges(wsEvent)
            resetTimer()
        }
    }

    const stopGame = () => {
        setIsBingoLaunched(false)
    }

    useEffect(() => {
        if (socket){
            socket.on('connection', onConnection)
            socket.on('new.challenge', onNewChallenge)
            socket.on('stop.bingo.back', stopGame)
        }
    }, [socket])

    
    if (isBingoLaunched){
        return (
            <div className='BingoSharedChallengeContainer'>
    
                <div className='BingoSharedChallengeLastChallenge'>
                    <div className='BingoSharedChallengeTitle'>
                        Dernier défi
                    </div>
                    <SharedChallenge currentChallenge={currentChallenge} />
                    <SharedChallengeTimer secondeTimer={secondeTimer} minuteTimer={minuteTimer} />
                </div>
    
                <div className='BingoSharedChallengePastChallenges'>
                    <div className='BingoSharedChallengeTitle'>
                        Défis à réaliser
                    </div>
                    <ul className='PastChallengesUl'>
                        { 
                            pastChallenges.map((pastChall, index) => {
                                return (
                                    <li key={`pastChallenge_${index}`}>
                                        <span> {pastChall} </span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                
            </div>
        )
    } else {
        return (
            <div className='BingoSharedChallengeWaitingTitle'>
                <span> Les défis partagés ne sont pas disponibles </span>
            </div>
        )
    }
    
}

export default SharedChallengePage