import React from "react";
import { Box, Typography, Slider, Button } from '@mui/material';

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
  ];

  const handleSlider = (_, value) => {
    setFilters({
      ...filters,
      price: value
    });
  };

  const handleSelection = (title) => {
    setFilters({
      ...filters,
      location: title
    });
  };

  return (
    <Box
      className="filters-container"
      sx={{
        position: 'absolute',
        paddingLeft: 2,
        paddingTop: 2,
        top: '131px',
        right: 30,
        width: 250,
        height: '50%',
        backgroundColor: 'rgb(255, 255, 255)',
        zIndex: 99,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        borderTopLeftRadius: '5px',
        borderBottomLeftRadius: '5px',
        borderTopRightRadius: '5px',
        borderBottomRightRadius: '5px',
        border: '2px solid rgb(0, 0, 0)',
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
        Filtra tu búsqueda!
      </Typography>
      <Box className="slide-container">
        <Typography variant="body1" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
          Precio: ${filters.price}
        </Typography>
        <Slider
          value={filters.price}
          min={0}
          max={10000}
          onChange={handleSlider}
          sx={{ width: '90%' }}
        />
      </Box>
      <Typography variant="body1" sx={{ fontWeight: 'bold', marginBottom: 1, marginTop: 2 }}>
        Ubicación:
      </Typography>
      <Box
        className="ubicacion-container"
        sx={{
          width: '92%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        {buttons.map((btn) => (
          <Button
            key={btn.id}
            value={btn.title}
            className={`ubicacion-btn ${filters.location === btn.title ? "selected" : ""}`}
            onClick={() => handleSelection(btn.title)}
            sx={{
              height: 30,
              padding: '12px',
              marginBottom: 2,
              backgroundColor: 'rgb(216, 248, 255)',
              border: '1px solid rgb(0, 0, 0)',
              borderRadius: 5,
              '&.selected': {
                backgroundColor: 'rgb(163, 255, 171)',
              },
            }}
          >
            {btn.title}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default Filters;
