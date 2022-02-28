import './SharedChallengePage.css'
import React from "react"
import SharedChallenge from '../components/SharedChallenge'


const SharedChallengePage = () => {
    return (
        <div className='BingoSharedChallengeContainer'>
            <div className='BingoTitle'>
                Bingo 
                <br/>
                des Vieux As Aigris
            </div>
            <SharedChallenge />
        </div>
    )
}

export default SharedChallengePage