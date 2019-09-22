import React from 'react'
import PizzaHeader from './PizzaItems/PizzaHeader'
import PizzaItems from './PizzaItems/PizzaItems'

import { TiArrowBack } from "react-icons/ti";
import './Pizza.css'

const Pizza = () => {
    return (
        <div className="pizza-app">
            <a href="../" className="back-arrow"><TiArrowBack /></a>
            <PizzaHeader />
            <PizzaItems />
        </div>
    )
}

export default Pizza
