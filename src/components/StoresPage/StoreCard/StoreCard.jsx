import React from "react";
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
} from "@mui/material";

const StoreCard = ({ image, name, building, url }) => {
    return (
        <Card>
        <CardMedia component="img" height="140" image={image} alt={name} />
        <CardContent>
            <Typography variant="h5">{name}</Typography>
            <Typography variant="body1">Edificio: {building}</Typography>
            <Button variant="contained" color="primary" href={url}>
            Ver Tienda
            </Button>
        </CardContent>
        </Card>
    );
};

export default StoreCard;
