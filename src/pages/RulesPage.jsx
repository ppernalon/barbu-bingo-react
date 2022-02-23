import React from 'react'
import SimpleParagraph from '../components/SimpleParagraph'

const RulesPage = () => {
    const paragraphs = [
        {
            title: "Les défis 1/2As et 3/4As",
            text: "pain"
        },
        {
            title: "Les défis 1/2As et 3/4As",
            text: "pain"
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