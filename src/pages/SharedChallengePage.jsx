import './SharedChallengePage.css'
import React, { useState, useEffect } from "react"
import { io } from "socket.io-client"
import constants from "../constants"
import SharedChallenge from '../components/SharedChallenge'
import SharedChallengeTimer from '../components/SharedChallengeTimer'

const SharedChallengePage = () => {
    const [socket, setSocket] = useState(null)

    useEffect(() => {
        setSocket(io(`${constants.SERVER_URL}`))

        return () => {
            socket.close()
        }
    }, [])

    return (
        <div className='BingoSharedChallengeContainer'>
            <div className='BingoTitle'>
                Bingo 
                <br/>
                des Vieux As Aigris
            </div>
            <SharedChallenge socket={socket} />
            <SharedChallengeTimer socket={socket} />
            <p style={{margin: 0}}>
                Valide ce défi avant les autres participants ! 
                <br/>
                Si personne n'y parvient en 15min, un nouveau défi sera proposé
            </p>
        </div>
    )
}

export default SharedChallengePage