import React, { useState } from 'react'


const PropertyMenu = ( { roomFilter }) => {
    return (
        <div className="property-menu-wrapper">
            <div className="property-menu-container">
                <h2 className="text-center mb-5">Filtrowanie</h2>
                <form>
                    <p className="filter-text">Cena Maksymalna</p>
                    <div class="form-group">
                        <input type="range" class="custom-range" min="200" max="5000" step="1"/>
                    </div>

                    <p className="filter-text">Powierzchnia maksymalna</p>
                    <div class="form-group">
                        <input type="number" class="form-control" onInput={roomFilter}/>
                    </div>

                    <p className="mt-5 filter-text">Informacje dodatkowe</p>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="balkon" />
                        <label class="form-check-label" for="balkon">
                            <p className="filter-text">Balkon</p>
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="winda" />
                        <label class="form-check-label" for="winda">
                          <p className="filter-text">Winda</p>
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="garaz" />
                        <label class="form-check-label" for="garaz">
                            <p className="filter-text">Garaż/Miejsce parkingowe</p>
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="klima" />
                        <label class="form-check-label" for="klima">
                          <p className="filter-text">Klimatyzacja</p>
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="taras" />
                        <label class="form-check-label" for="taras">
                            <p className="filter-text">Taras</p>
                        </label>
                    </div>
                                        
                </form>
            </div>
        </div>
    )
}

export default PropertyMenu
