import React from 'react';
/* import Button from '@material-ui/core/Button';
import ButtonGroup from '@mui/material/ButtonGroup'; */
import TextField from '@material-ui/core/TextField';
import Grid from '@mui/material/Grid';
import {Button} from '../../../../lib/style-global'

const Cadastrar = () => {
    return (
        <>
        <Grid item xs={12} sm={12} style={{marginBottom: 15}}>
            <TextField 
            required
            id="Nome"
            name="Nome"
            label="Name of User"
            fullWidth
            autoComplete="fname"
            />
        </Grid>

        <Grid item xs={12} sm={12} style={{marginBottom: 15}}>
            <TextField 
            required
            id="email"
            name="email"
            label="E-mail of User"
            fullWidth
            autoComplete="fname"
            />
        </Grid>

        <Grid item xs={12} sm={12} style={{marginBottom: 15}}>
            <TextField 
            type="password"
            required
            id="password"
            name="password"
            label="Password of User"
            fullWidth
            autoComplete="fname"
            />
        </Grid>
        <Grid item xs={12} sm={12}>
            {/* <ButtonGroup variant="contained" >
                <Button>One</Button>
                <Button>Three</Button>
            </ButtonGroup> */}
            <Button>
                Cadastrar
            </Button>
        </Grid>
        </>
    )
}

export default Cadastrar