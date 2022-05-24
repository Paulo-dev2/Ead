import "./new.scss";
import Sidebar from "../../../components/admin/sidebar/Sidebar";
import Navbar from "../../../components/admin/navbar/NavBar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState,useRef } from "react";
import api from "../../../services/api";
import { useNavigate } from 'react-router-dom';

const New = ({ inputs, title }) => {
  const navigate = useNavigate();
  const imageRef = useRef();
  const [file, setFile] = useState(null);

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
            onChange={ (e) => setFile(e.target.files)}
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              ref={imageRef}
              alt=""
            />
          </div>
          <div className="right">
            <form onSubmit={ (e) => {
              e.preventDefault();
              var dados = new FormData()
              dados.append("name_user",e.target.name_user.value)
              dados.append("cpf",e.target.cpf.value)
              dados.append("email",e.target.email.value)
              dados.append("password",e.target.password.value)
              dados.append("confirm_password",e.target.confirm_password.value)
              dados.append("telefone",e.target.telefone.value)
              dados.append("end",e.target.end.value)
              dados.append("File",file.name)
              dados.append("File",file)

              if (e.target.password.value == e.target.confirm_password.value){
                  api.post("/admin/news-alunos/",dados).then( (resp) => {
                   if (resp.data.sucess){
                     alert("Cadastrado com sucesso!!");
                    navigate("/admin/users")
                   }
                  });
                  imageRef.current.value = null;
              }
              
            }}>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder ? input.placeholder : ""} name={input.name} />
                </div>
              ))}
              <button>Adicionar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;