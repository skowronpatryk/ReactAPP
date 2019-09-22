import React, { useState } from 'react'
import './Property.css'

import PropertyNav from './Property/PropertyNav'
import PropertyMenu from './Property/PropertyMenu'
import PropertyList from './Property/PropertyList'



const Property = () => {

    const [property, setProperty] = useState(tempList)
    const [filterMeter, setFilterMeter] = useState('');

    const roomFilter = (e) => {
        setFilterMeter(e.target.value)
        console.log(filterMeter)

        let tempFilter = property.filter((item, index) => {
            return item.meter > filterMeter
        })

        console.log(tempFilter);
        setProperty(tempFilter)
    }

    return (
        <div className="property">
            <PropertyNav />
            <div className="container-fluid p-0">
                <div className="info-property">
                    <h1>Strona w budowie. Wróc do strony głównej:</h1>
                    <div>
                      <button class="goback"><a href="../">WRÓC</a></button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <PropertyMenu roomFilter={roomFilter} />
                    </div>
                    <div className="col-9">
                        <PropertyList property={property}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Property


const tempList = [
    {id: 1, name: 'Mieszkanie 2 pokoje ul. Ruska', room: 2, meter: 45, price: 1900, balcon: true, elevator: false, garage: false, airconditioning: false, terrace: false, image: 'https://simplicite.pl/wp-content/uploads/2017/09/jak-urzadzic-mieszkanie-na-wynajem-13.jpg'},

    {id: 2, name: 'LUX KAWALERKA!!! NOWE BUDOWNICTWO', room: 1, meter: 31, price: 1400, balcon: true, elevator: false, garage: false, airconditioning: false, terrace: false, image: 'https://thumbs.img-sprzedajemy.pl/1000x901c/c6/87/16/komfortowe-mieszkanie-dwupoziomowe-rzeszow-455238192.jpg'},

    {id: 3, name: 'Mieszkanie na szybkiej z garażem i klimą', room: 3, meter: 73, price: 2800, balcon: false, elevator: true, garage: true, airconditioning: true, terrace: false, image: 'http://bi.gazeta.pl/im/fc/f9/14/z21995004O,Jak-tanio-urzadzic-mieszkanie-pod-wynajem.jpg'},

    {id: 4, name: 'Blisko centrum boczna Grabiszyńskiej', room: 2, meter: 42, price: 1500, balcon: true, elevator: false, garage: true, airconditioning: false, terrace: false, image: 'https://t-ec.bstatic.com/images/hotel/max1024x768/642/64267440.jpg'},

    {id: 5, name: 'Piękne mieszkanie z tarasem magnolia', room: 2, meter: 62, price: 2950, balcon: false, elevator: false, garage: false, airconditioning: true, terrace: true, image: 'https://galeria.domiporta.pl/pictures/big/15/0f/c7/c70fedbdc8342515b1dde4335779481e74502250/sprzedam-mieszkanie-poznan-rataje.jpg'},

    {id: 6, name: 'Piękne dwupoziomowe mieszkanie z garażem', room: 3, meter: 79, price: 3500, balcon: false, elevator: false, garage: true, airconditioning: false, terrace: true, image: 'https://sim.bydgoszcz.pl/uploads/images/Gallery/aranzacje/F-3/50_84_p/1.jpg'},
]