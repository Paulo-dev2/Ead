import React from 'react';
import NavBar from '../../../components/admin/navbar/NavBar';
import Cadastrar from '../../../components/admin/Aluno/CadastrarAluno/Cadastrar-Aluno';


const CadastrarAlunos = () => {
    return (
        <NavBar titulo="Listar">
            <Cadastrar />
        </NavBar>
    )
}

export default CadastrarAlunos
