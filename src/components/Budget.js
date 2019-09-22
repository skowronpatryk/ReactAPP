import React, { useState } from 'react'
import './Budget.css'

import AddBudget from './BudgetItems/AddBudget'
import DelBudget from './BudgetItems/DelBudget'

import { TiArrowBack } from "react-icons/ti";

function Budget() {

    const [addAmount, setAddAmount] = useState('');
    const [delAmount, setDelAmount] = useState('');
    
    const checkAmount = () => {
        if(addAmount - delAmount === 0) {
            return;
        } else if (addAmount - delAmount > 0) {
            return 'Pozostało Ci';
        } else {
            return 'Brakuje Ci';
        }
    }
    

    return (
        <div className="budget-app">
            <a href="../" className="back-arrow"><TiArrowBack /></a>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className="budget__title">Przelicz swój budżet</h1>
                        <h2 className="budget__subtitle">Kalkulator, z którym planowanie wydatków stanie się znacznie łatwiejsze</h2>
                    </div>
                </div>

                <div className="row budget-main-app">
                    <div className="col-12 col-md-6">
                        <div className="budget__app">
                            <h2>Masz wydatek? Dodaj go tutaj!</h2>
                            <DelBudget callback={setDelAmount}/>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="budget__app">
                            <h2>Dodatkowy przychód? Dodaj go tutaj!</h2>
                            <AddBudget callback={setAddAmount}/>
                        </div>          
                    </div>
                </div>
                <div className="row">
                <div className="col-12 result">
                    <h2>{checkAmount()}</h2>
                    <span className="amount">{addAmount - delAmount === 0  ? null : `${addAmount - delAmount}PLN` } </span>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Budget
