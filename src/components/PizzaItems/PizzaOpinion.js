import React from 'react'
import './PizzaOpinion.css'

const PizzaOpinion = ({ creator }) => {
    return (
        <div className="pizza-opinion">
            <div className="pizza-title">
                <h2>Pizzeria u majstra</h2>
            </div>
            <div className="pizza-stars">
                <span>★★★★</span>
            </div>
            <div className="pizza-subtitle">
                <p>Typowa włoska pizza, robiona zawsze ze świeżych składników sprowadzanych prosto ze słonecznej Italii.</p>
            </div>
            <div className="pizza-your-creator" onClick={creator}>
                <h2>Wypróbuj nasz kreator pizzy!</h2>
                <p className="creator-subtitle">Dostępny w wersji beta!</p>
            </div>
        </div>
    )
}

export default PizzaOpinion
