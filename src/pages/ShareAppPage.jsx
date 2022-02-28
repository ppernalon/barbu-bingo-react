import React from "react"
import QRcode from './../assets/QR-code-bdva.svg'
import './ShareAppPage.css'

const ShareAppPage = () => {
    return (
        <div className="ShareAppPage">
            <p> Scanne moi ! </p>
            <img src={QRcode} width={window.innerWidth*0.75} alt='QR-code-bdva' />
        </div>
    )
}

export default ShareAppPage