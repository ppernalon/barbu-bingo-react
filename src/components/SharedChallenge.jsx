import React, { useEffect, useState } from "react"
import './SharedChallenge.css'

const SharedChallenge = ({socket}) => {
    const [currentChallenge, setCurrentChallenge] = useState('') 

    const setCurrentChallengeFromWs = (ws) => {
        setCurrentChallenge(ws.challenge) 
    }

    useEffect(() => {
        if (socket){
            socket.on('connection', setCurrentChallengeFromWs)
            socket.on('new.challenge', setCurrentChallengeFromWs)
        }
    }, [socket])

    return (
        <div className="SharedChallengeShadow">
            <div className="SharedChallenge">
                <span>
                    {currentChallenge}
                </span>
            </div>
        </div>
    )
}

export default SharedChallenge