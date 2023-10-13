import React, { useState } from 'react';
import {
    Button,
    TextField,
    Typography,
    IconButton,
    Grid,
  } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterIcon from '@mui/icons-material/FilterList';
import ClearIcon from '@mui/icons-material/Delete';
import "./Compare.css";
import { SearchItem } from "../SearchItem/SearchItem";
import Filters from "./Filters";

const Compare = () => {
    const [searchInput, setSearchInput] = React.useState("");

    const [searchFilters, setSearchFilters] = React.useState({ price: 0 });
    const [openFilters, setOpenFilters] = React.useState(false);

    const [searchResults, setSearchResults] = React.useState(null);
    const [searching, setSearching] = React.useState(false);
    const [searchError, setSearchError] = React.useState(false);

    const handleSearch = () => {
        console.log("Search for: ", searchInput, " with filters: ", searchFilters);
        setOpenFilters(false);
        setSearchResults([{
            id: 1,
            name: "Hamburguesa",
            location: "Ciencias",
            price: 100,
            img: "/img/hamburguer.png"
        },
        {
            id: 2,
            name: "Muffin",
            location: "Ciencias",
            price: 50,
            img: "/img/muffin.jpg"
        }]
        );
    }

    const handleSearchInput = (e) => {
        setSearchInput(e.target.value);
    }

    return (
        <div className="comp-container">
            <Typography variant="h4" className="comp-title" style={{ marginBottom: '20px' }}>
                Comparar
            </Typography>
            <div className="search-bar">
                <TextField
                    className="search-input"
                    onChange={handleSearchInput}
                    value={searchInput}
                    placeholder="Buscar"
                />
                <Button className="search-btn" onClick={handleSearch}>
                    <SearchIcon />
                </Button>
                <IconButton className="filter-btn" onClick={() => setOpenFilters(!openFilters)}>
                    <FilterIcon />
                </IconButton>
                {openFilters && <Filters filters={searchFilters} setFilters={setSearchFilters} />}
            </div>
            {searchResults ? (
                <div className="results" style={{ maxWidth: '90%'}}>
                    <div className="results-header">
                        <Typography variant="h6" className="res-head-title">
                            Cantidad de resultados: {searchResults.length}
                        </Typography>
                        <div className="clear-btn-container">
                            <Button className="clear-btn" onClick={() => setSearchResults(null)}>
                                Limpiar
                                <ClearIcon />
                            </Button>
                        </div>
                    </div>
                    {searchResults.map((result) => {
                        return (
                            <SearchItem
                                key={result.id}
                                productID={result.id}
                                onClick={(data) => console.log('Navigate to product:', data)}
                                name={result.name}
                                location={result.location}
                                price={result.price}
                                img={result.img}
                            />
                        );
                    })}
                </div>
            ) : (
                <div className="results-placeholder">
                    <img className="hamburguer-icon" src="/img/hamburguer.png" alt="Search" />
                    <Typography variant="h4" className="hamburguer-text">
                        Compara y compra!
                    </Typography>
                </div>
            )}
        </div>
    )
}

export default Compare;
