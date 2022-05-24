import "./table.scss";
import api from "../../../services/api"
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect,useState } from "react";

const DetailsUser = (userId) => {
    
  const [listagem,setListagem] = useState([]);
  const data = {id:userId.userId}
    useEffect( () => {
        const dados = api.post("/admin/aluno-listagem/",data).then( (response) => setListagem(response.data));
    },[])
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Compra ID</TableCell>
            <TableCell className="tableCell">Curso</TableCell>
            <TableCell className="tableCell">Data de Lançamento</TableCell>
            <TableCell className="tableCell">Metodo de Pagamento</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
           {listagem.map((row) => (
            <TableRow key={row.compra_id}>
              <TableCell className="tableCell">{row.compra_id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  {row.nome_curso}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.data_lancamento_curso.replace("T03:00:00.000Z"," ")}</TableCell>
              <TableCell className="tableCell">{row.formas_pagamento}</TableCell>
              <TableCell className="tableCell">
                 {(row.situacao_pagamento == 'Pago'
                    ?<span className="status Approved">Approved</span>
                    :<span className="status Pending">Pending</span>
                  )}
                
              </TableCell>
            </TableRow>
          ))} 
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DetailsUser;