import React, { useState } from 'react'
import PropertyItem from './PropertyItem'


const PropertyList = ({ property }) => {
    return (
        <div className="container-fluid">
            <div className="row">
                {property.map(item => (
                    <PropertyItem 
                    key={item.id}
                    name={item.name}
                    room={item.room}
                    meter={item.meter}
                    price={item.price}
                    image={item.image}/>
                ))}
            </div>
        </div>
    )
}

export default PropertyList
