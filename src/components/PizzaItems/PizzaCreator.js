import React, { useState } from 'react'
import './PizzaCreator.css'
import pizza from './images/pizza.png'
import cheese from './images/cheese.png'
import tomato from './images/tomato.png'
import mushrooms from './images/mushrooms.png'
import salami from './images/salami.png'
import rukola from './images/rukola.png'
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';


const PizzaCreator = ( { showCreator, addToDelivery } ) => {

    const [addonsCheese, setAddonsCheese] = useState(false);
    const [addonsTomato, setAddonsTomato] = useState(false);
    const [addonsMushrooms, setAddonsMushrooms] = useState(false);
    const [addonsSalami, setAddonsSalami] = useState(false);
    const [addonsRukola, setAddonsRukola] = useState(false);
    const [currentPrice, setCurrentPrice] = useState(10);


    const handleCheese = () => {
        setAddonsCheese(!addonsCheese);
    }

    const handleTomato = () => {
        setAddonsTomato(!addonsTomato);
    }

    const handleMushrooms = () => {
        setAddonsMushrooms(!addonsMushrooms);
    }

    const handleSalami = () => {
        setAddonsSalami(!addonsSalami);
    }

    const handleRukola = () => {
        setAddonsRukola(!addonsRukola);
    }

    const totalCost = () => {
        let tempCheese = addonsCheese.checked ? currentPrice + 2 : currentPrice; 

    }

    let price = 10;
    let pizzaCheesePrice = addonsCheese ? 2 : 0;
    let pizzaTomatoPrice = addonsTomato ? 2 : 0;
    let pizzaMushroomsPrice = addonsMushrooms ? 3 : 0;
    let pizzaRukolaPrice = addonsRukola ? 3 : 0;
    let pizzaSalamiPrice = addonsSalami ? 4 : 0;

    let allPrice = parseInt(price + pizzaTomatoPrice + pizzaCheesePrice + pizzaMushroomsPrice + pizzaRukolaPrice + pizzaSalamiPrice);

    // Cena za czystą pizze: 10 zł
    // Cena za dodatki: ser, pomidor = 2 zł /// grzyby i rukola = 3 zł



    return (
        <div className="pizza-creator">
            <div className="container h-100 container-position">
                <div className="row h-100">
                    <div className="col">
                        <div className="pizza-content">
                        <h2 className="creator-title">Kreator Pizzy</h2>
                        <p className="creator-subtitle">Wykreuj swoją pizze, a my ją dla Ciebie przygotujemy!</p>
                        <button type="button" className="off-creator" onClick={showCreator}>X</button>
                        </div>
                        <div className="pizza-creator-wrapper">
                            <img src={pizza} alt="pizza" className="pizza-normal" />

                            {addonsCheese && <img src={cheese} alt="cheese" className="pizza-cheese"/>}

                            {addonsTomato && <img src={tomato} alt="tomato" className="pizza-tomato"/>}

                            {addonsMushrooms && <img src={mushrooms} alt="tomato" className="pizza-mushrooms"/>}

                            {addonsSalami && <img src={salami} alt="tomato" className="pizza-salami"/>}

                            {addonsRukola && <img src={rukola} alt="tomato" className="pizza-rukola"/>}

                        </div>
                        <h2 className="text-center mb-4">Wybierz swoje ulubione dodatki!</h2>
                        <div className="pizza-creator-addons">
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="cheese" onClick={handleCheese}/>
                                <label htmlFor="cheese">Ser</label>
                            </div>

                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="tomato" onClick={handleTomato}/>
                                <label htmlFor="tomato">Pomidory</label>
                            </div>

                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="mushrooms" onClick={handleMushrooms}/>
                                <label htmlFor="mushrooms">Pieczarki</label>
                            </div>

                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="salami" onClick={handleSalami}/>
                                <label htmlFor="salami">Salami</label>
                            </div>

                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="rukola" onClick={handleRukola}/>
                                <label htmlFor="rukola">Zielenina</label>
                            </div>
                        </div>
                        <div className="pizza-creator-info">
                            <h2>Aktualna cena: {allPrice},00 PLN</h2>
                            <button class="pizza-creator-button" onClick={() => addToDelivery(allPrice)}>Dodaj do zamówienia</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PizzaCreator
