import './BingoPage.css'
import React from "react"
import BingoTable from '../components/BingoTable'
import { useLocation } from 'react-router-dom'

const BingoPage = () => {
	const location = useLocation()
	const is1A2A = location.pathname === "/1A2A"
    
	const challenges = [
		[
			"NONE", 
			"NONE",
			"Prends une photo avec 2 présidents BDE", 
			"NONE", 
			"Trouve le bon nombre de présidents amiralist'", 
			"Trouve une explicaiton au \"Don't act\"",
			"Liste toutes les listes jaunes gagnantes"
		],
		[
			"Prends la pose avec 3 générations de l'UA", 
			"NONE",
			"Découvres l'histoire du projet CID et l'Orange Vélodrome", 
			"NONE", 
			"NONE", 
			"Qui est Zolver ?",
			"Combien de groupes de mêmes existe-il ?"
		]
		,
		[
			"NONE", 
			"NONE",
			"Prends une photo avec 2 présidents BDE", 
			"NONE", 
			"Trouve le bon nombre de présidents amiralist'", 
			"Trouve une explicaiton au \"Don't act\"",
			"Liste toutes les listes jaunes gagnantes"
		]
	]

    return (
        <div>
            <div className='BingoTableContainer'>
                <div className='BingoTitle'>
                    Bingo 
					<br/>
					des Vieux As Aigris
					<br/>
					pour les {is1A2A ? "1As et 2As" : "3As et 4As"}
                </div>
                <BingoTable challenges={challenges} spaceAvailable={window.innerHeight*0.6} />
            </div>
        </div>
    )
}

export default BingoPage