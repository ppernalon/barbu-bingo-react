import React, { useEffect, useState } from "react"
import { io } from "socket.io-client"
import './SharedChallenge.css'

// const SERVER_URL = "http://paul-pernalon.fr:3000"
const SERVER_URL = "http://localhost:3000"

const SharedChallenge = () => {
    const [currentChallenge, setCurrentChallenge] = useState('') 
    const [socket, setSocket] = useState(null)

    useEffect(() => {
        setSocket(io(`${SERVER_URL}`))
    }, [])

    useEffect(() => {
        if (socket){
            socket.on('connection', (ws) => setCurrentChallenge(ws.challenge))
            socket.on('new.challenge', (ws) => setCurrentChallenge(ws.challenge))
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