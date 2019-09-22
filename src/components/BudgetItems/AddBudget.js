import React, { useState } from 'react';
import uuid from 'uuid/v4';
import AddBudgetList from './AddBudgetList'
import './AddBudget.css';

const initialVal = [
    {id: uuid(), name: 'Wypłata', amount: 4000},
    {id: uuid(), name: 'Zlecenie freelancer', amount: 1200},
    {id: uuid(), name: 'Wypłata', amount: 800},
]

const AddBudget = ( {callback, callbackAdd} ) => {

    const [ listAddBudget, setListAddBudget] = useState(initialVal);
    const [itemName, setItemName] = useState('');
    const [amountValue, setAmountValue] = useState('');

    const handleItemName = (e) => {
        setItemName(e.target.value);
    }

    const handleAmountValue = (e) => {
        setAmountValue(e.target.value);
    }

    const handleDelete = (id) => {
        let tempList = listAddBudget.filter((item) => item.id !== id);
        setListAddBudget(tempList);
    }

    const handleAddNewItem = (e) => {
        e.preventDefault();
        if (itemName.length > 0 && amountValue.length > 0) {
            setListAddBudget([...listAddBudget, {id: uuid(), name: itemName, amount: amountValue}]);
            setItemName('');
            setAmountValue('');
        } else {
            alert('Uzupełnij pola!');
        }
    }

    callback(listAddBudget.reduce((acc, curr) => {
        return acc += parseInt(curr.amount)
    }, 0))


    return (
        <>
        <form onSubmit={handleAddNewItem}>
            <div class="row">
                <div class="col col-md-8">
                    <input type="text" class="form-control" placeholder="Nazwa przychodu" value={itemName} onChange={handleItemName}/>
                </div>
                <div class="col col-md-4">
                    <input type="number" class="form-control" placeholder="Kwota przychodu" value={amountValue} onChange={handleAmountValue}/>
                </div>
            </div>
            <button type="submit" className="btn btn-budget">Dodaj</button>
        </form>
        <AddBudgetList list={listAddBudget} deleteItem={handleDelete}/>
        </>
    )
}

export default AddBudget
