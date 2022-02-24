import React, { useState, useEffect, useRef } from "react"
import { io } from "socket.io-client"
import constants from "../constants"
import './AdminPage.css'


const AdminPage = () => {
    const [socket, setSocket] = useState(null)
    const newChallengeRef = useRef(null)

    useEffect(() => {
        setSocket(io(`${constants.SERVER_URL}`))
    }, [])

    const submitNewChallenge = (event) => {
        event.preventDefault()
        socket.emit('new.sharedChallenge', newChallengeRef.current.value)
        newChallengeRef.current.value = ''
    }

    const skipChallenge = (event) => {
        event.preventDefault()
        socket.emit('skip.sharedChallenge')
    }

    return (
        <div className="AdminPage">
            <form onSubmit={submitNewChallenge} className="AdminPageNewChallenge">
                <input className="AdminPageInput" placeholder="Challenge à ajouter" ref={newChallengeRef} type={'text'}/>
                <button className={"AdminPageButton"} type={"submit"}> Ajouter un challenge </button>
            </form>

            <button className={"AdminPageButton"} onClick={skipChallenge}> Passer à un nouveau challenge </button>
        </div>
    )
}

export default AdminPage