import './SharedChallengePage.css'
import React, { useState, useEffect } from "react"
import { io } from "socket.io-client"
import constants from "../constants"
import SharedChallenge from '../components/SharedChallenge'
import SharedChallengeTimer from '../components/SharedChallengeTimer'

const SharedChallengePage = () => {
    const [isBingoLaunched, setIsBingoLaunched] = useState(false)
    const [socket, setSocket] = useState(null)
    const [pastChallenges, setPastChallenges] = useState([])

    useEffect(() => {
        setSocket(io(`${constants.SERVER_URL}`))

        return () => {
            socket.close()
        }
    }, [])

    const addPastChallenges = (wsEvent) => setPastChallenges(wsEvent.pastChallenges)

    const onConnection = (wsEvent) => {
        const isStarted = wsEvent.challenge !== "Le bingo n'a pas démarré"
        setIsBingoLaunched(isStarted)
        if (isStarted) {
            addPastChallenges(wsEvent)
        }
    }

    const onNewChallenge = (wsEvent) => {
        const isStarted = wsEvent.challenge !== "Le bingo n'a pas démarré"
        setIsBingoLaunched(isStarted)
        if (isStarted) {
            addPastChallenges(wsEvent)
        }
    }

    const stopGame = () => {
        setIsBingoLaunched(false)
    }

    useEffect(() => {
        if (socket){
            socket.on('connection', onConnection)
            socket.on('new.challenge', onNewChallenge)
            socket.on('stop.bingo', stopGame)
        }
    }, [socket])

    
    if (isBingoLaunched){
        return (
            <div className='BingoSharedChallengeContainer'>
    
                <div className='BingoSharedChallengeLastChallenge'>
                    <div className='BingoSharedChallengeTitle'>
                        Dernier défi
                    </div>
                    <SharedChallenge socket={socket} />
                    <SharedChallengeTimer socket={socket} />
                </div>
    
                <div className='BingoSharedChallengePastChallenges'>
                    <div className='BingoSharedChallengeTitle'>
                        Défis à réalisés
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