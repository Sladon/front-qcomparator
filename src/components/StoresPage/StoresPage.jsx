import React from "react";
import {
  Container,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Button,
} from "@mui/material";
import StoreCard from "./StoreCard/StoreCard"; 

const StoresPage = () => {
  const stores = [
    {
      id: 1,
      name: "Tienda A",
      building: "Edificio 1",
      image: "URL_de_la_imagen1.jpg",
      url: "/store/1",
    },
    {
      id: 2,
      name: "Tienda B",
      building: "Edificio 2",
      image: "URL_de_la_imagen2.jpg",
      url: "/store/2",
    },
  ];

  return (
    <Container>
      <List>
        {stores.map((store) => (
          <ListItem key={store.id}>
            <ListItemAvatar>
              <Avatar src={store.image} alt={store.name} />
            </ListItemAvatar>
            <ListItemText
              primary={store.name}
              secondary={`Edificio: ${store.building}`}
            />
            <Button variant="contained" color="primary" href={store.url}>
              Ver Tienda
            </Button>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default StoresPage;
