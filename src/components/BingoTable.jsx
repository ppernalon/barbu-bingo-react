import React from "react"
import "./BingoTable.css"

const BingoTable = ({challenges}) =>{
    return (
        <div className="BingoTableShadow">
            <table className="BingoTable">
                <tbody>
                    {
                        challenges.map((row, rowIndex) => {
                            return (
                                <tr key={`challengesRow_${rowIndex}`} className="BingoRow"> 
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