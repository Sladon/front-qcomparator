import React from "react";
import "./Filters.css"

export const Filters = ({filters, setFilters}) => {

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