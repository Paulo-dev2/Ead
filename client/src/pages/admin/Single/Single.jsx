import "./single.scss";
import api from "../../../services/api"
import Sidebar from "../../../components/admin/sidebar/Sidebar";
import Navbar from "../../../components/admin/navbar/NavBar";
import Chart from "../../../components/admin/chart/Chart";
import DetailsUser from "../../../components/admin/table/DetailsUser";
import { useEffect,useState } from "react";
import { useParams } from 'react-router-dom'

/* //SELECT * FROM `finaceiro` AS f INNER JOIN `alunos` As a ON f.alunos_id_aluno = a.id_aluno INNER JOIN `cursos` As c ON f.cursos_id_curso = c.id_curso; 
useEffect( () => {
    const dados = api.get("/admin/alunos").then( (response) => setData(response.data))
  },[])
*/

const Single = () => {
  const {userId} = useParams();
  const [data_user,setDataUser] = useState([]);
  const PATH = "http://localhost:8080/files/"

  const data = {id:userId}
  useEffect( () => {
    const details_user  = api.post("/admin/aluno-details/",data).then( (response) => setDataUser(response.data));
  },[]);

  console.log(data_user);
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            {data_user.map( (details) => (
            <div className="item">
              <img
                src={PATH + encodeURIComponent(`${details.img_aluno}`)}
                alt="Selecione uma imagem"
                className="itemImg"
              />
                 <div className="details">
                 <h1 className="itemTitle">{details.nome_aluno}</h1>
                 <div className="detailItem">
                   <span className="itemKey">Email:</span>
                   <span className="itemValue">{details.email_aluno}</span>
                 </div>
                 <div className="detailItem">
                   <span className="itemKey">Phone:</span>
                   <span className="itemValue">{details.tel_aluno}</span>
                 </div>
                 <div className="detailItem">
                   <span className="itemKey">Address:</span>
                   <span className="itemValue">
                    {details.end_aluno}
                   </span>
                 </div>
                 <div className="detailItem">
                   <span className="itemKey">CPF:</span>
                   <span className="itemValue">{details.cpf_aluno}</span>
                 </div>
                </div>
            </div>
            ))}
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Cursos & Situação atual</h1>
          <DetailsUser userId={userId}/>
        </div>
      </div>
    </div>
  );
};

export default Single;