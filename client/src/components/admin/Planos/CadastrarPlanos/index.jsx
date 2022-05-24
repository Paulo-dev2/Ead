import React,{useState,useRef} from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@mui/material/Grid';
import {Button} from '../../../../lib/style-global';
import api from '../../../../services/api';

const Cadastrar = () => {
    const imageRef = useRef();
    const [nome,setNome] = useState("");
    const [preco,setPreco] = useState("");
    const [image,setImage] = useState(null);

    const CadastrarPlanos = async  (e) => {
        e.preventDefault();
        const dados = new FormData();
        
        dados.append('name_image',image.name);
        dados.append('file',image);
        dados.append('name_plano',nome);
        dados.append('preco',preco);


        /*  dados.forEach( (item,index) => {
            listaA.push(index,item)
         }) */
        
        await api.post("/admin/alunos",{
            data:dados,
            'Content-Type': 'multipart/form-data'
        })
        .then((response) => {
        console.log(response)
        })
    }


    return (
        <>
        <Grid item xs={12} sm={12} style={{marginBottom: 15}}>
            <TextField 
            required
            id="Nome"
            name="Nome"
            label="Nome do Plano"
            fullWidth
            autoComplete="fname"
            onChange={(e) => setNome(e.target.value)}
            value={nome}
            />
        </Grid>

        <Grid item xs={12} sm={12} style={{marginBottom: 15}}>
            <TextField 
            required
            id="preco"
            name="preco"
            label="Preço do Plano"
            fullWidth
            autoComplete="fname"
            type="bool"
            onChange={(e) => setPreco(e.target.value)}
            value={preco}
            />
        </Grid>

        <Grid item xs={12} sm={12} style={{marginBottom: 15}}>
            <TextField 
            type="file"
            required
            id="File"
            name="file"
            fullWidth
            autoComplete="fname"
            onChange={(e) => setImage(e.target.files[0])}
            ref={imageRef}
            />
        </Grid>
        <Grid item xs={12} sm={12}>
            {/* <ButtonGroup variant="contained" >
                <Button>One</Button>
                <Button>Three</Button>
            </ButtonGroup> */}
            <Button onClick={CadastrarPlanos}>
                Cadastrar
            </Button>
        </Grid>
        </>
    )
}

export default Cadastrar
