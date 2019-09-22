import React, { useState } from 'react';
import uuid from 'uuid/v4';
import DelBudgetList from './DelBudgetList';

const initialVal = [
    {id: uuid(), name: 'Opłata za mieszkanie', amount: 2500},
    {id: uuid(), name: 'Paliwo', amount: 400},
    {id: uuid(), name: 'Zakpu ', amount: 200},
]

const DelBudget = ( { callback }) => {

    const [addDelBudget, setAddDelBudget] = useState(initialVal);
    const [delName, setDelName] = useState('');
    const [delAmount, setDelAmout] = useState('');

    const handleDelName = (e) => {
        setDelName(e.target.value);
    }   

    const handleDelAmount = (e) => {
        setDelAmout(e.target.value);
    }

    const handleDeleteItem = (id) => {
        let tempList = addDelBudget.filter((item) => item.id !== id);
        setAddDelBudget(tempList);
    }

    const handleAddDelItem = (e) => {
        e.preventDefault();
        if (delName.length > 0 && delAmount.length > 0) {
            setAddDelBudget([...addDelBudget, { id: uuid(), name: delName, amount: delAmount}])
            setDelAmout('');
            setDelName('');
        } else {
            alert('Uzupełnij pola!');
        }
        
    }

    callback(addDelBudget.reduce((acc, curr) => {
        return acc += parseInt(curr.amount);
    }, 0))



    return (
       <>
        <form onSubmit={handleAddDelItem}>
            <div class="row">
                <div class="col col-md-8">
                    <input type="text" class="form-control" placeholder="Nazwa wydatku" value={delName} onChange={handleDelName}/>
                </div>
                <div class="col col-md-4">
                    <input type="number" class="form-control" placeholder="Kwota wydatku" value={delAmount} onChange={handleDelAmount}/>
                </div>
            </div>
            <button type="submit" className="btn btn-budget">Dodaj</button>
        </form>
        <DelBudgetList list={addDelBudget} deleteItem={handleDeleteItem}/>
       </>
    )
}

export default DelBudget
