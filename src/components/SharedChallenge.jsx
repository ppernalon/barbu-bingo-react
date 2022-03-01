import React from "react"
import './SharedChallenge.css'

const SharedChallenge = ({currentChallenge}) => {
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