import React, { useState, useEffect, useRef } from "react"
import { io } from "socket.io-client"
import constants from "../constants"
import './AdminPage.css'


const AdminPage = () => {
    const [socket, setSocket] = useState(null)
    const newChallengeRef = useRef(null)
    const timeBetweenChallengeRef = useRef(null)
    const [isGameOn, setIsGameOn] = useState(false)

    useEffect(() => {
        setSocket(io(`${constants.SERVER_URL}`))
    }, [])

    const onGameStateChange = (wsEvent) => {
        const isStarted = wsEvent.challenge !== "Le bingo n'a pas démarré"
        setIsGameOn(isStarted)
    }

    useEffect(() => {
        if (socket){
            socket.on('connection', onGameStateChange)
            socket.on('start.bingo', onGameStateChange)
            socket.on('stop.bingo', onGameStateChange)
        }
    }, [socket])
    
    const submitNewChallenge = (event) => {
        event.preventDefault()
        socket.emit('new.sharedChallenge', newChallengeRef.current.value)
        newChallengeRef.current.value = ''
    }

    const startSharedChallenges = (event) => {
        event.preventDefault()
        socket.emit('start.bingo')
        setIsGameOn(true)
    }

    const stopSharedChallenges = (event) => {
        event.preventDefault()
        socket.emit('stop.bingo')
        setIsGameOn(false)
    }

    return (
        <div className="AdminPage">

            {
                isGameOn ? (
                    <form onSubmit={stopSharedChallenges} className="AdminPageForm">
                        <button className={"AdminPageButton"} type={"submit"}> Stopper les défis partagés  </button>
                    </form>
                ) : (
                    <form onSubmit={startSharedChallenges} className="AdminPageForm">
                        <button className={"AdminPageButton"} type={"submit"}> Lancer les défis partagés  </button>
                    </form>
                )
            }

            <form onSubmit={submitNewChallenge} className="AdminPageForm">
                <input className="AdminPageInput" placeholder="Challenge à ajouter" ref={newChallengeRef} type={'text'}/>
                <button className={"AdminPageButton"} type={"submit"}> Ajouter un challenge </button>
            </form>
            
        </div>
    )
}

export default AdminPage