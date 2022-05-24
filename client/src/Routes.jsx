import React from 'react';

import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Dashboard from './pages/admin/Dashboard/dashboard';
import CadastrarAlunos from './pages/admin/Alunos/CadastrarAlunos'
import CadastrarPlanos from './pages/admin/Planos/cadastrarPlanos';

import "./assets/style/dark.scss"
import { productInputs, userInputs } from "./formSource";
import List from './pages/admin/List/List'
import Single from './pages/admin/Single/Single'
import New from './pages/admin/New/New'

import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
const Rotas = () => {

    const { darkMode } = useContext(DarkModeContext);

    return (
        <BrowserRouter>
            <div className={darkMode ? "app dark" : "app"}>
                <Routes>
                    <Route path="/admin" exact element={<Dashboard />}/>
                    <Route path="/admin/cadastrar-alunos" exact element={<CadastrarAlunos />}/>
                    <Route path="/admin/users">
                        <Route index element={<List />}/>
                        <Route path="/admin/users/:userId" exact element={<Single />}/>
                    </Route>
                    <Route path="/admin/new/" element={<New inputs={userInputs} title="Adicionar novo Aluno" />}/>
                    <Route path="/admin/products">
                        <Route index element={<List />} />
                        <Route path=":productId" element={<Single />} />
                        <Route
                            path="new"
                            element={<New inputs={productInputs} title="Add New Product" />}
                        />
                    </Route> 
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default Rotas