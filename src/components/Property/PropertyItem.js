import React from 'react'

const PropertyItem = (props) => {
    return (
        <div className="col-xs-12 col-sm-6 col-lg-4">
            <div className="house-wrapper">
                <div className="house-img">
                    <img src={props.image} className="img-fluid" alt={props.name}/>  
                </div>
                <div className="house-info">
                    <h2>{props.name}</h2>
                    <p>Lokalizacja - Wrocław</p>
                </div>
                <div className="house-more-info">
                    <div className="house-more-info-meter">
                        {props.room == 1 ? 'Kawalerka' : `${props.room} pokoje`} <span>{props.meter} M<sup>2</sup></span>
                    </div>
                    <div className="house-more-info-price">
                        {props.price} PLN / Miesiąc
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PropertyItem
