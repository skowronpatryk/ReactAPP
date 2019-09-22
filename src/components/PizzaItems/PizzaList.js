import React from 'react'
import './PizzaList.css'

import { IoIosAddCircle } from "react-icons/io";

const PizzaList = ( { list, delivery }) => {
    return (
        <div className="pizza-list">
            <div className="pizza-menu">
                <h2>Nasze pizze</h2>
            </div>
            {list.map(item => (
                <div key={item.id} id={item.id} className="single-pizza-list">
                    <div className="single-pizza-list__title">
                        <h2>{item.name}</h2>
                    </div>
                    <div className="single-pizza-list__desc">
                        <p>{item.desc}</p>
                    </div>
                    <div className="single-pizza-list__price">
                        <p>{`${item.price},00 PLN`}</p>
                    </div>
                    <button onClick={() => delivery(item)}className="pizza-list-button"><IoIosAddCircle /></button>
                </div>
            ))}
        </div>
    )
}

export default PizzaList
