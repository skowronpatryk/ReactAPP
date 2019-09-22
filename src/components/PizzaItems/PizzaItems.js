import React, { useState } from 'react'
import PizzaList from './PizzaList'
import PizzaOpinion from './PizzaOpinion'
import PizzaOrder from './PizzaOrder';
import PizzaAddress from './PizzaAddress'
import PizzaCreator from './PizzaCreator'
import uuid from 'uuid/v4';

import './PizzaItems.css'

const initialPizzaList = [
    {id: uuid(), name: 'Pizza Marinara', desc: 'z sosem pomidorowym, czosnkiem i bazylią', price: 14.00},
    {id: uuid(), name: 'Pizza Margherita', desc: 'z sosem pomidorowym i mozzarellą', price: 16.00},
    {id: uuid(), name: 'Pizza Funghi', desc: 'z sosem pomidorowym, mozzarellą i pieczarkami', price: 18.00},
    {id: uuid(), name: 'Pizza Salami', desc: 'z sosem pomidorowym, mozzarellą i salami', price: 20.00},
    {id: uuid(), name: 'Pizza Hawajska', desc: 'z sosem pomidorowym, mozzarellą, szynką i ananasem', price: 21.00},
    {id: uuid(), name: 'Pizza Primavera', desc: 'z sosem pomidorowym, mozzarellą, salami, szpinakiem i pepperoni', price: 23.00},
    {id: uuid(), name: 'Pizza Pollo', desc: 'z sosem pomidorowym, mozzarellą, kurczakiem, serem feta, szpinakiem i cebulą', price: 24.00},
]

const PizzaItems = () => {

    const [pizzaList, setPizzaList] = useState(initialPizzaList);
    const [delivery, setDelivery] = useState([]);
    const [address, setAddress] = useState(false);
    const [showComplete, setShowComplete] = useState(false);
    const [pizzaCreator, setPizzaCreator] = useState(false);

    const handleAddToDelivery = (item) => {
        setDelivery(delivery.concat(item));
    }

    const handleDeleteDelivery = (index) => {
        let tempDelivery = delivery.filter((item, key) => key !== index);
        setDelivery(tempDelivery);
    }

    const handleAddressClick = (e) => {
        e.preventDefault();
        setAddress(!address)
    } 

    const handleSubmitClick = (e) => {
        e.preventDefault();
        setAddress(false);
        setShowComplete(true)
        setTimeout(() => {
            setShowComplete(false)
        }, 3000)
        setDelivery([]);
    }

    const handleCreator = () => {
        setPizzaCreator(!pizzaCreator);
    }

    const handleAddYourPizzToDelivery = (allPrice) => {
        let temp = {id: uuid(), name: 'Twoja własna pizza', desc: 'Pizza, którą stworzyłeś w kreatorze', price: allPrice};
        setDelivery(delivery.concat(temp));
        setPizzaCreator(false);
    }


    return (
        <div className="pizza-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <PizzaOpinion creator={handleCreator}/>
                        <PizzaList list={pizzaList} delivery={handleAddToDelivery}/>
                    </div>
                </div>
            </div>
            <div className="pizza-order">
                <PizzaOrder orderList={delivery} deleteItem={handleDeleteDelivery} order={handleAddressClick}/>
            </div>
            {address ? <div className="pizza-address">
                <PizzaAddress order={handleAddressClick} orderSuccess={handleSubmitClick} />
            </div> 
            : null
            }

            {pizzaCreator ? <PizzaCreator showCreator={handleCreator} addToDelivery={handleAddYourPizzToDelivery} /> : null}

            {showComplete ? <div className="order-success">Twoje zamówienie zostało złożone</div> : null}
        </div>
    )
}

export default PizzaItems
