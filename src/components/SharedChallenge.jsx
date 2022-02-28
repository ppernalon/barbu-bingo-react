import React, { useEffect, useState } from "react"
import './SharedChallenge.css'

const SharedChallenge = ({socket}) => {
    const [currentChallenge, setCurrentChallenge] = useState('') 

    useEffect(() => {
        if (socket){
            socket.on('connection', (ws) => setCurrentChallenge(ws.challenge))
            socket.on('new.challenge', (ws) => {
                setCurrentChallenge(ws.challenge) 
            })
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