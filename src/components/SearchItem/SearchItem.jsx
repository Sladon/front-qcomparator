import React from "react";
import { Box, Typography, Button, Card, CardContent, CardMedia } from '@mui/material';

export const SearchItem = (props) => {
  return (
    <Card
      sx={{
        display: 'flex',
        width: '90%',
        height: '100px',
        margin: '0 5%',
        borderTop: '1px solid rgb(67, 67, 67)',
      }}
    >
      <CardMedia
        component="img"
        alt="muffin"
        src={props.img}
        sx={{
          width: '90px',
          height: '90px',
          borderRadius: '5px',
          objectFit: 'cover',
          margin: '5px',
        }}
      />
      <CardContent
        sx={{
          display: 'flex',
          width: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column', 
            width: '100%',
          }}
        >
          <Typography variant="h6" sx={{ fontSize: 'larger', fontWeight: 'bold' }}>
            {props.name}
          </Typography>
          <Typography variant="body2" sx={{ fontSize: 'small', paddingLeft: '10px' }}>
            {props.location}
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 'bold', marginTop: '10px' }}>
            ${props.price}
          </Typography>
        </Box>
        <Button
          onClick={() => props.onClick(props.productID)}
          sx={{
            width: '50px',
            backgroundColor: 'rgb(53, 51, 67)',
            color: 'white',
            borderRadius: '5px',
            border: 'none',
            marginLeft: 'auto', 
          }}
        >
          Ver
        </Button>
      </CardContent>
    </Card>
  );
};
