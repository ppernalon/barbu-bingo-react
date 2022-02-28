import './BingoPage.css'
import React from "react"
import BingoTable from '../components/BingoTable'
import { useLocation } from 'react-router-dom'

const BingoPage = () => {
	const location = useLocation()
	const is1A2A = location.pathname === "/1A2A"
    
	const challenges = is1A2A ? BingoPage.challenges12A : []

    return (
        <div>
            <div>
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

BingoPage.challenges12A = [
	[
		"NONE", 
		"Qui est Zolver ?",
		"Jus de fruit le plus acheté et le moins bu par le BDE en 2019", 
		"NONE", 
		"Qui est le premier respo tonneau ? Si il est présent prends toi en photo avec", 
		"Année de création de la soirée de retrouvailles sur la plage? "
	],
	[
		"Quelle asso a déclenché la guerre de farine au cours des passations 2019 ?", 
		"NONE",
		"NONE", 
		"Comprendre la méthode d'affectation des fillots lors de l'intégration 2019", 
		"Année de création des 10 \"commandements / règles\" du Bar'Bu", 
		"Qu’est ce qu’il ne faut absolument pas rapporter à la crémaillère de l’octo depuis 2019 ?"
	],
	[
		"A quel event somme nous les mieux logés ?", 
		"Ca veut dire quoi \"dont akt\" ? PE18 aimerait savoir depuis le temps",
		"Quand a eu lieu le K'WEI ?", 
		"Offre une biere à un vieux en pull vert", 
		"NONE", 
		"NONE"
	],
	[
		"Qui est Lynx Anonyme de la team Bar'Bu 2019 ?", 
		"Prends une photo avec le dernier organisateur de la TVP",
		"Film toi debout sur une table en criant \"Eho le BDE je suis saoul !\"", 
		"NONE", 
		"NONE", 
		"Comment Centrale a perdu son partenariat avec l'Orange Vélodrome ?"
	]
]

export default BingoPage