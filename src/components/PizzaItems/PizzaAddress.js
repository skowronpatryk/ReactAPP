import React from 'react'
import './PizzaAddress.css'

const PizzaAddress = ( { order, orderSuccess } ) => {
    return (
        <>
        <h2 className="pizza-address-title">Szczegóły dotyczące Twojego zamówienia</h2>
        <form onSubmit={orderSuccess}>
            <div class="form-group">
                <label className="label-address" for="name">Wpisz imię i nazwisko</label>
                <input type="text" class="form-control" id="name" aria-describedby="nameSurname" placeholder="Imię i nazwisko" required/>
            </div>

            <div class="form-group">
                <label className="label-address" for="address">Wpisz swój adres</label>
                <input type="text" class="form-control" id="address" aria-describedby="address" placeholder="Adres" required/>
            </div>

            <div class="form-group">
                <label className="label-address" for="exampleInputEmail1">Adres email</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Wpisz email" required />
                <small id="emailHelp" class="form-text text-muted">Nikomu nie udostępnimy Twojego adresu.</small>
            </div>
           
            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                <label className="label-address" class="form-check-label" for="exampleCheck1">Zapoznałem/am się z regulaminem</label>
            </div>
            <button type="submit" class="btn btn-primary mt-2">Zamawiam</button>
    </form>
    <button className="close-address-btn" onClick={order}>X</button>
    </>
    )
}

export default PizzaAddress
