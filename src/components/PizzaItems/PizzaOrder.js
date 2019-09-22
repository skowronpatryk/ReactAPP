import React from 'react'
import { IoIosBasket } from "react-icons/io";
import './PizzaOrder.css'

const PizzaOrder = ( { orderList, deleteItem, order }) => {

    const orderCost = (orderList.length > 0 ? orderList.reduce((acc, curr) => {
        return acc += parseInt(curr.price)
    }, 0) : "0");

    const deliveryCost = () => {
        if(orderList.length === 0) return '0,00 PLN'
        else if(orderList.length < 3 && orderList.length > 0) return '12,00 PLN'
        else return 'DARMOWA DOSTAWA'
    }

    const totalCost = () => {
        if(orderList.length === 0) return '0,00 PLN'
        else if(orderList.length < 3 && orderList.length > 0) return `${orderCost + 12},00 PLN`
        else return `${orderCost},00 PLN`
    }

    return (
        <div className="pizza__order">
            <IoIosBasket className="order__basket" />
            <div className="pizza__order_title">
                <h2>Twoje zamówienie:</h2>
            </div>
            <div className="pizza__order__order">
                {orderList.map((item, index) => (
                    <div key={item.id} className="pizza__order__list">
                        <div className="pizza__order__list__title">
                            <h2>{item.name}</h2>
                        </div>
                        <div className="pizza__order__list__desc">
                            <p>{item.desc}</p>
                        </div>
                        <div className="pizza__order__list__button">
                            <button onClick={() => deleteItem(index)}>X</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="pizza__order__info">
                <div className="pizza__order__info__pizzacost">
                    <h3>Koszt zamówienia:</h3>
                    <h3>{`${orderCost},00 PLN`}</h3>
                </div>

                <div className="pizza__order__info__deliverycost">
                    <h3>Koszt wysyłki:</h3>
                    <h3>{deliveryCost()}</h3>
                </div>

                <div className="pizza__order__info__totalcost">
                    <h3>Całkowity koszt:</h3>
                    <h3>{totalCost()}</h3>
                </div>

                <div className="pizza_order__button">
                    <button onClick={orderList.length > 0 ? order : null}>ZAMÓW</button>
                </div>


            </div>
        </div>
    )
}

export default PizzaOrder
