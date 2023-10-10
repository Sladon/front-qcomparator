import React, {useState, useEffect} from "react";
import { SearchItem } from "../SearchItem/SearchItem";
import "./Locales.css";
import { Filters } from "./Filters";

export const Locales = () => {
    const [searchInput, setSearchInput] = React.useState("");

    const [searchFilters, setSearchFilters] = React.useState({price: 0});
    const [openFilters, setOpenFilters] = React.useState(false);

    const [searchResults, setSearchResults] = React.useState(null);
    const [searching, setSearching] = React.useState(false);
    const [searchError, setSearchError] = React.useState(false);

    const handleSearch = () => {
        console.log("Search for: ", searchInput, " with filters: ", searchFilters);
        setOpenFilters(false);
        setSearchResults([{
            id: 1,
            name: "Local 1",
            location: "Ciencias",
            img: "/img/hamburguer.png"
        },
        {
            id: 2,
            name: "Local 2",
            location: "Ciencias"
        }]
        );
    }

    const handleSearchInput = (e) => {
        setSearchInput(e.target.value);
    }




    return (
        <div className="comp-container">
            <h1 className="comp-title">Locales</h1>
            <div className="search-bar">
                <input className="search-input" onChange={handleSearchInput} value={searchInput} type="text" placeholder="Buscar" />
                <button className="search-btn" onClick={handleSearch}>
                    <img className="search-icon" src="/img/searchicon.png" alt="Search" />
                </button>
                <button className="filter-btn" onClick={() => setOpenFilters(!openFilters)}>
                    <img className="filter-icon" src="/img/filtericon.png" alt="Filter" />
                </button>
            {openFilters && (
                <Filters filters={searchFilters} setFilters={setSearchFilters}/>
            )}
            </div>
            {searchResults ? (
                <div className="results">
                    <div className="results-header">
                        <h1 className="res-head-title">Cantidad de resultados: {searchResults.length}</h1>
                        <button className="clear-btn" onClick={() => setSearchResults(null)}>
                            Limpiar
                            <img className="clear-icon" src="/img/sweeping.png" alt="Clear" />
                        </button>
                    </div>
                    {searchResults.map((result) => {
                        return (<SearchItem key={result.id} productID={result.id} onClick={(data) => console.log("Navigate to Local:", data)} name={result.name} location={result.location} img={result.img} />)
                    })}
                </div>) : (
                    <div className="results-placeholder">
                        <img className="hamburguer-icon" src="/img/hamburguer.png" alt="Search" />
                        <h1 className="hamburguer-text">Compara y compra!</h1>
                    </div>
                )
            }
            
        </div>
    )
}