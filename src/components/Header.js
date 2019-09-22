import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className="container header">
            <div className="row">
                <div className="col">
                    <h1 className="header__title">
                        Cześć! Co chciałbyś dziś robić?
                    </h1>
                    <p className="header__subtitle">Na co czekasz? Wybierz i zrób to!</p>
                </div>
            </div>
        </div>
    )
}

export default Header;