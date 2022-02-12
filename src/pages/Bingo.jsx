import './Bingo.css'
import logo from "../assets/logo__color.png"
import React from "react"
import BingoTable from '../components/BingoTable'
import SharedChallenge from '../components/SharedChallenge'


const Bingo = () => {
    
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
                    Bingo des Vieux As Aigris
                </div>
                <BingoTable challenges={challenges}/>
            </div>

            <div className='SharedChallengeContainer'>
                <div className='BingoTitle'>
                    Défi commun !
                </div>
                <div className='SharedChallengeContainer__row'>
                    <img src={logo}/>
                    <SharedChallenge/>
                </div>
            </div>

        </div>
    )
}

export default Bingo