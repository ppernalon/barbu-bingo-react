import React from "react"
import './HomePage.css'
import colorLogo from './../assets/logo__color.png'
import QRcode from './../assets/QR-code-bdva.svg'

const HomePage = () => {
    return (
        <div className="HomePage">
            <img src={colorLogo} width={window.innerWidth*0.5} alt='logo bdva' className='HomeLogo'/>
            <div>
                <div className="HomeTitle">
                    Bienvenue sur 
                    <br/>
                    le Bingo des vieux !
                </div>
                <p>
                    N'hésitez pas à partager l'application !
                </p>
            </div>
            <img src={QRcode} width={window.innerWidth*0.5} alt='QR-code-bdva' className='HomeQRCode'/>
        </div>
    )
}

export default HomePage