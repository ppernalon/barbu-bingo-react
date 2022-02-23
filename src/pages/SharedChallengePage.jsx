import './SharedChallengePage.css'
import React from "react"
import SharedChallenge from '../components/SharedChallenge'


const SharedChallengePage = () => {
    return (
        <div>
            <div className='BingoSharedChallengeContainer'>
                <div className='BingoTitle'>
                    Bingo 
					<br/>
					des Vieux As Aigris
                </div>
                <SharedChallenge />
            </div>
        </div>
    )
}

export default SharedChallengePage