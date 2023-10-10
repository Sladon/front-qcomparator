import React from "react";
import "./Filters.css"

const Filters = ({ filters, setFilters }) => {

    const buttons = [
        {
            title: "Ciencias",
            id: 1
        },
        {
            title: "Reloj",
            id: 2
        },
        {
            title: "Biblioteca",
            id: 3
        },
        {
            title: "Piramide",
            id: 4
        },
        {
            title: "Humanidades",
            id: 5
        },
        {
            title: "Ingenieria",
            id: 6
        }
    ]

    const handleSlider = (e) => {
        setFilters({
            ...filters,
            price: e.target.value
        })
    }

    const handleSelection = (e) => {
        setFilters({
            ...filters,
            location: e.target.value
        })
    }

    return (
        <div className="filters-container">
            <h1 className="filters-title">Filtra tu busqueda!</h1>
            <div className="slide-container">
                <h1 className="slide-title">Precio: ${filters.price}</h1>
                <input type="range" min="0" max="10000" value={filters.price} onChange={handleSlider} className="slider" id="myRange" />
            </div>
            <h1 className="ubicacion-title">Ubicacion:</h1>
            <div className="ubicacion-container">
                {buttons.map((btn) => {
                    return (
                        <button key={btn.id} value={btn.title} className={`ubicacion-btn ${filters.location === btn.title ? "selected" : ""}`} onClick={(btn) => handleSelection(btn)}>{btn.title}</button>
                    )
                })}
            </div>
        </div>
    )
}

export default Filters;