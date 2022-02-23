import './BingoPage.css'
import React from "react"
import BingoTable from '../components/BingoTable'

const BingoPage = () => {
    
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
                </div>
                <BingoTable challenges={challenges} spaceAvailable={window.screen.height*0.6} />
            </div>
        </div>
    )
}

export default BingoPage