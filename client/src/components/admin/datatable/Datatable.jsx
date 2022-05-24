import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../../services/api"
 
const Datatable = () => {
  const [data, setData] = useState();
  useEffect( () => {
    const dados = api.get("/admin/alunos").then( (response) => setData(response.data))
  },[])

console.log(data);
   const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  }; 

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/admin/users/` + params.row.id_aluno} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
               onClick={() => handleDelete(params.row.id_aluno)} 
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to="/admin/new/" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        getRowId={data => data.id_aluno} 
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;