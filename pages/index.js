import React from "react";
import {Box, Container, Typography} from "@mui/material";
import defineTitle from "../services/defineTitle";

function Home() {

    defineTitle('Home');

    return <Container id='home'>
        <Box>
            <Typography variant="h2">Welcome</Typography>
            <Typography variant="h5">REGLER LE SOUCIS DE FLASH BLANC LORS D&apos;UN LOAD DE PAGE</Typography>
            <Typography variant="h5">GERER LE SOUCSI DE TOKEN QUI EXPIRE VITE </Typography>
            <Typography variant="h5">GERER ERREUR LOGIN </Typography>
            <Typography variant="h5">GERER REDIRECTION QUI SE FONT TROP VITE </Typography>
        </Box>
    </Container>
}

export default Home;