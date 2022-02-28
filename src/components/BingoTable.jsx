import React from "react"
import "./BingoTable.css"

const BingoTable = ({challenges, spaceAvailable}) => {
    const cellHeight = spaceAvailable/challenges.length
    const cellWidth = 250

    return (
        <div className="BingoTableShadow" style={{width: 'fit-content'}}>
            <div className="BingoTable" style={{width: cellWidth*challenges[0].length}}>
                {
                    challenges.map((row, rowIndex) => {
                        return (
                            <div 
                                key={`challengesRow_${rowIndex}`} 
                                className="BingoRow"
                                style={{height: cellHeight}}
                            > 
                                {
                                    row.map((challenge, challengeIndex) => {
                                        if (challenge !== "NONE")
                                        {
                                            return (
                                                <div 
                                                    key={`challenge_${rowIndex}_${challengeIndex}`} 
                                                    className="BingoChallenge"
                                                    style={{width: 100/row.length + "%"}}
                                                >
                                                    <span className="SpanChallenge">  
                                                        {challenge}  
                                                    </span>  
                                                </div>
                                            )
                                        } else {
                                            return (
                                                <div 
                                                    key={`challenge_${rowIndex}_${challengeIndex}`} 
                                                    className={"BingoChallenge BingoNoChallenge"}
                                                    style={{width: 100/row.length + "%"}}
                                                /> 
                                            )  
                                        }
                                    })
                                }
                            </div>  
                        )
                    })
                }
            </div>
        </div>

    )
}

export default BingoTable