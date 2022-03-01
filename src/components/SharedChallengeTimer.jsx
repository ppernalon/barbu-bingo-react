import React from "react"
import './SharedChallengeTimer.css'
import Hourglass from './Hourglass'

const SharedChallengeTimer = ({secondeTimer, minuteTimer}) => {

    return (
        <div className="SharedChallengeTimer">
            { minuteTimer > 9 ? minuteTimer : "0" + minuteTimer } : { secondeTimer > 9 ? secondeTimer : "0" + secondeTimer }  / 10:00
            <Hourglass/>
        </div>
    )
}

export default SharedChallengeTimer