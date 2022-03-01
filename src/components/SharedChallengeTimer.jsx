import React, { useEffect, useState } from "react"
import './SharedChallengeTimer.css'
import Hourglass from './Hourglass'

const SharedChallengeTimer = ({socket}) => {
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
        if (socket){
            socket.on('connection', setTimerFromWs)
            socket.on('new.challenge', resetTimer)
        }
    }, [socket])

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

    return (
        <div className="SharedChallengeTimer">
            { minuteTimer > 9 ? minuteTimer : "0" + minuteTimer } : { secondeTimer > 9 ? secondeTimer : "0" + secondeTimer }  / 10:00
            <Hourglass/>
        </div>
    )
}

export default SharedChallengeTimer