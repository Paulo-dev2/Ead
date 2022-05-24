const PATH = "http://localhost:8080/files/"
export const userColumns = [
    { field: "id_aluno", headerName: "ID", width: 70 },
    {
      field: "img_aluno",
      headerName: "Imagem",
      width: 100,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            
            <img className="cellImg" src={PATH + encodeURIComponent(`${params.row.img_aluno}`)} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "nome_aluno",
      headerName: "Nome",
      width: 255,
    },
    {
      field: "email_aluno",
      headerName: "Email",
      width: 230,
    },
  
    {
      field: "nivel_aluno",
      headerName: "Nivel",
      width: 100,
    },
    {
      field: "tel_aluno",
      headerName: "Telefone",
      width: 160,
    },
    /* {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    }, */
  ];