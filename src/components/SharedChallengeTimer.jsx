import React, { useEffect, useState } from "react"
import './SharedChallengeTimer.css'
import Hourglass from './Hourglass'

const SharedChallengeTimer = ({socket}) => {
    let updateInterval
    const [secondeTimer, setSecondeTimer] = useState(0)
    const [minuteTimer, setMinuteTimer] = useState(0)

    const resetTimer = () => {
        setSecondeTimer(0)
        setMinuteTimer(0)
    }

    useEffect(() => {
        if (socket){
            socket.on('connection', resetTimer)
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
            { minuteTimer > 9 ? minuteTimer : "0" + minuteTimer } : { secondeTimer > 9 ? secondeTimer : "0" + secondeTimer }  / 15:00
            <Hourglass/>
        </div>
    )
}

export default SharedChallengeTimer