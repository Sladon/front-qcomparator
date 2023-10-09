import React from "react";
import { Grid, Typography, Avatar, Button } from "@mui/material";

const ProfilePage = () => {
    return (
        <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        style={{ minHeight: "100vh" }}
        >
        <Grid item>
            <Avatar
            sx={{
                width: 100,
                height: 100,
                margin: "20px auto",
            }}
            alt="Nombre de usuario"
            src="URL de la imagen de perfil"
            />
        </Grid>

        <Grid item>
            <Grid item>
            <Typography variant="h5">Nombre</Typography>
            <Typography variant="body1">Nombre de usuario</Typography>
            </Grid>

            <Grid item>
            <Typography variant="h5">Correo</Typography>
            <Typography variant="body1">correo@ejemplo.com</Typography>
            </Grid>
        </Grid>

        <Grid item>
            <Button variant="contained" color="primary" fullWidth>
            Cerrar Sesión
            </Button>
        </Grid>
        </Grid>
    );
};

export default ProfilePage;
