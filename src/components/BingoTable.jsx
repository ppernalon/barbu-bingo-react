import React, { useState } from "react"
import "./BingoTable.css"

const BingoTable = ({challenges, spaceAvailable}) => {
    const [cellHeight, setCellHeight] = useState(spaceAvailable/challenges.length)
    const [cellWidth, setCellWidth] = useState(115)

    return (
        <div className="BingoTableShadow" style={{width: 'fit-content'}}>
            <table className="BingoTable" style={{width: cellWidth*challenges[0].length}}>
                <tbody>
                    {
                        challenges.map((row, rowIndex) => {
                            return (
                                <tr 
                                    key={`challengesRow_${rowIndex}`} 
                                    className="BingoRow"
                                    style={{height: cellHeight}}
                                > 
                                    {
                                        row.map((challenge, challengeIndex) => {
                                            if (challenge !== "NONE")
                                            {
                                                return (
                                                    <td 
                                                        key={`challenge_${rowIndex}_${challengeIndex}`} 
                                                        className="BingoChallenge"
                                                        style={{width: 100/row.length + "%"}}
                                                    >
                                                        {challenge}    
                                                    </td>
                                                )
                                            } else {
                                                return (
                                                    <td 
                                                        key={`challenge_${rowIndex}_${challengeIndex}`} 
                                                        className={"BingoChallenge BingoNoChallenge"}
                                                        style={{width: 100/row.length + "%"}}
                                                    /> 
                                                )  
                                            }
                                        })
                                    }
                                </tr>  
                            )
                        })
                    }
                </tbody>
            </table>
        </div>

    )
}

export default BingoTable