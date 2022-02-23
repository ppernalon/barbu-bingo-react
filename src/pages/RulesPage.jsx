import React from 'react'
import SimpleParagraph from '../components/SimpleParagraph'

const RulesPage = () => {
    const paragraphs = [
        {
            title: "Les défis 1/2As et 3/4As",
            text: (
                <> 
                    Selon votre promotion, vous avez à votre disposition une grille de défis. 
                    Réalisez le plus possible d'entre eux et venez les valider 
                    auprès du staff BDVA lorsque vous avez complété une colonne ou une ligne.
                    Attention, une preuve est nécessaire !
                </>
            )
        },
        {
            title: "Défis partagés",
            text: (
                <> 
                    Tous les participants peuvent réaliser un défi commun.
                    Dès qu'un participant valide son défi auprès du staff BDVA, 
                    un nouveau est disponible. Si personne ne réalise le défi en cours
                    pendant 15min, un nouveau remplace celui-ci.
                </>
            )
        },
        {
            title: "Classements, résultats et récompenses",
            text: (
                <> 
                    Les classements sont établis selon le nombre de défis validés par
                    le staff BDVA. Si deux personnes obtiennent le même nombre de défis,
                    celui qui aura été le plus rapide sera favorisé. Les vainqueurs seront 
                    révélés le lendemain, et gagneront une sélection de 4 bières selon vos
                    goûts et vos habitudes de dégustation.
                </>
            )
        },
    ]
    return (
        <div>
            {
                paragraphs.map(p => <SimpleParagraph key={p.title} title={p.title} text={p.text}/> )
            }
        </div>
    )
}

export default RulesPage