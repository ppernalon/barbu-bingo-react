import React from "react"
import './SimpleParagraph.css'

const SimpleParagraph = ({title, text}) => {
    return (
        <div className="SimpleParagraphContainer">
            <div className="SimpleParagraphTitle"> {title} </div>
            <p  className="SimpleParagraphText">
                {text}
            </p>
        </div>
    )

}

export default SimpleParagraph