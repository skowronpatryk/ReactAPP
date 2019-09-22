import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import Property from './Property';
import Budget from './Budget'
import Pizza from './Pizza'
import Todo from './Todo/Todo'
import './HeaderItem.css';
import { IoIosHome, IoIosWallet, IoMdPizza, IoIosToday } from 'react-icons/io';

 function HeaderItem({ state }) {
    return (
        <Router>
        <div className="container">
            <div className="row">
                {state.map(item => (
                    <div key={item.id} className="col-12 col-sm-6 col-xl-3">
                        <div className="headerItem">
                            <div className="headerItem__main">
                                <div className="headerItem__main__icon">
                                     {item.id === 1 && <IoIosHome className="headerIcon"/> || item.id === 2 && <IoIosWallet className="headerIcon"/> || item.id === 3 && <IoIosToday className="headerIcon"/> || item.id === 4 && <IoMdPizza className="headerIcon"/>}
                                 </div>
                                 <div className="headerItem__main__title">
                                     <h2>{item.title}</h2>
                                 </div>
                            </div>
                         <div className="headerItem__button">
                              <Link to={item.id === 1 && "/property/" || item.id === 2 && "/budget/" || item.id === 3 && "/todo/" || item.id === 4 && "/pizza"} ><a href="#" className="headerItem__button__btn">{item.buttonText}</a></Link>
                        </div>
                       </div>
                    </div>
                ))}
            </div>
        </div>
        
        <Route path="/property" exact component={Property} />
        <Route path="/budget" exact component={Budget} />
        <Route path="/todo" exact component={Todo} />
        <Route path="/pizza" exact component={Pizza} />
        </Router>
    )
}

export default HeaderItem;


/*
    <div className="headerItem">
            <div className="headerItem__main">
                <div className="headerItem__main__icon">
                    <IoIosTv className="headerIcon"/>
                </div>
                <div className="headerItem__main__title">
                    <h2>Może film?</h2>
                </div>
            </div>
            <div className="headerItem__button">
                <a href="#" className="headerItem__button__btn">Wyszukaj film</a>
            </div>
    </div>
*/