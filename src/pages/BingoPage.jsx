import './BingoPage.css'
import React from "react"
import BingoTable from '../components/BingoTable'
import { useLocation } from 'react-router-dom'

const BingoPage = () => {
	const location = useLocation()
	const is1A2A = location.pathname === "/1A2A"
    
	const challenges = is1A2A ? BingoPage.challenges12A : BingoPage.challenges34A

    return (
		<div>
			<div className='BingoTitle'>
				Bingo {is1A2A ? "1/2As" : "3/4As"}
				<br/>
				des Vieux As Aigris
			</div>
			<BingoTable challenges={challenges} spaceAvailable={(window.innerHeight - 40)*0.73} />
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

BingoPage.challenges34A = [
	[
		"Prends une photo avec les 1A les plus DD (3 à 5)", 
		"Qui est le respo tonneau 2021 ?",
		"NONE", 
		"Trouve l'auteur de l'affiche d'un événement des campagnes ayant une faute d'orthographe", 
		"Quelles colocs composent le club réflexion ?", 
		"NONE"
	],
	[
		"Prendre une photo avec le prez du plus de sous comm BDE", 
		"Quelle équipe ne s'est pas présentée aux inters 2021 ?",
		"Qu'est-ce que Centrale Park ?", 
		"NONE",
		"NONE", 
		"Prends une photo avec le prez de Boule et Bill"
	],
	[
		"NONE",
		"NONE", 
		"Offre une bière à un membre de la team Bar'Bu 2021 ou 2022", 
		"Prends toi en photo un 1A ou 2A avec 4 assos ou plus", 
		"Cite 3 des 4 présidents d'asso en poste en 2021 qui ont redoublés (et leurs asso bien sûr !)", 
		"Prends une photo avec le prédécesseur actuel d'un de tes postes en asso (si pas possible choisi un de tes potes et mets toi sur la photo avec lui et un de ses successeurs)"
	],
	[
		"Quelle crémaillère à créé LE cluster", 
		"NONE", 
		"NONE",
		"Quelle liste a été oubliée par le gabian des campagnes 2021 ? (Epelle la)", 
		"Prends une photo avec 4 respo sports (1A ou 2A)", 
		"Qui sont les 2 staffs BDE à s'être pris une sanction pour avoir été trop bourré à la première soirée BDE ?"
	]
]

export default BingoPage