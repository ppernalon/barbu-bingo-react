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
                    Toutes les 10 minutes un nouveau défi s'ajoute à la liste des
                    défis partagés, ces derniers sont réalisables par tous les Centraliens,
                    peu importe leur promotion entrante, dès lors qu'ils apparaissent
                    sur l'application.
                </>
            )
        }, 
        {
            title: "Par équipe ou tout seul ?",
            text: (
                <> 
                    Tous les défis peuvent être réalisés par deux, en revanche la récompense sera à partager ! 
                    Néanmoins, une équipe doit être constituée de deux personnes de la même aggréation de promo.
                    C'est à dire 1/2As ensemble et 3/4As ensemble, une équipe 1/3A n'est pas autorisée.
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
                    révélés dans les jours suivants le Bar'Bu, et gagneront une sélection 
                    de 4 bières selon vos goûts et vos habitudes de dégustation.
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