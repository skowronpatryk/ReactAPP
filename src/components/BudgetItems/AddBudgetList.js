import React from 'react'
import './AddBudgetList.css'
import { IoIosCloseCircle } from "react-icons/io";

const AddBudgetList = ( { list, deleteItem }) => {
    return (
        <ul class="list-group">
            {list.map(item => (
                <li key={item.id} className="list-group-item">
                    <div className="list-group-name">
                        <span>{item.name}</span>
                    </div>
                    <div className="list-group-amount">
                        <span>{item.amount} PLN</span>
                    </div>
                    <div className="list-group-del">
                        <IoIosCloseCircle onClick={() => deleteItem(item.id)}/>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default AddBudgetList
