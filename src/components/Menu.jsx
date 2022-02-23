import React, { useState } from "react"
import {Link} from "react-router-dom"
import './Menu.css'

const Menu = () => {
    const [visible, setVisible] = useState(false)

    return (
        <div className="MenuContainer">
            <div 
                onClick={() => setVisible(true)} 
                className={"MenuButton"}> 
                Menu 
            </div>
            {
                visible ?
                    <div className="MenuItemsBackGround" onClick={() => setVisible(false)}>
                        <div className="MenuItems">
                            <Link to={"/1A2A"}> Défis 1/2A </Link>
                            <Link to={"/3A4A"}> Défis 3/4A </Link>
                            <Link to={"/shared-challenge"}> Défis commun </Link>
                            <Link to={"/rules"}> Règles </Link>
                        </div>
                    </div>
                    : null
            }
            
        </div>
    )
}

export default Menu