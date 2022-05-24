const db = require('../functions/db');
const crypto = require('crypto');

const secret = "Paulo22122002"
const Aluno = require('../models/Admin/Alunos.js')

module.exports = {
    async select (req, res) {
       /*  const sql = "SELECT * FROM `gerenciamento_alunos` AS g INNER JOIN cursos AS c ON g.cursos_id_curso = c.id_curso INNER JOIN alunos AS a ON a.id_aluno = g.alunos_id_aluno";
       db.query(sql,(err,result) => {
           if(err) throw err;
           console.log(result);
           res.send(JSON.stringify(result));
       }) */

       const result = Aluno.selectAluno()

      console.log(result); 

       res.send(result);
    },

    /* async create_aluno(req,res){
        console.log(req.body);
        const {name_user,cpf,email,password,confirm_password,telefone,end,File} = req.body;
        const name_md5  = crypto.createHmac("md5", secret);
        const hashName = name_md5.update(secret).digest("hex");

        const filename = `${hashName}-${File}`;

        const md5Password  = crypto.createHmac("md5", password);
        const hassPassword = md5Password.update(password).digest("hex");

        let posts = { 
            id_aluno: null,
            nome_aluno: name_user,
            cpf_aluno: cpf,
            end_aluno: end,
            tel_aluno: telefone,
            img_aluno: filename,
            password_aluno: hassPassword,
            email_aluno: email
        }

       let query =  db.query("INSERT INTO alunos SET ?",posts,(err,result) => {
            if(err) throw err;
            console.log(result);
            msg = {"sucess":true}
            res.send(msg);
        })
    }, */
    async listagem(req,res){
        const { id } = req.body;
         db.query(`SELECT * FROM gerenciamento_finaceiro AS f INNER JOIN alunos As a ON f.alunos_id_aluno = a.id_aluno INNER JOIN cursos As c ON f.cursos_id_curso = c.id_curso WHERE a.id_aluno = ${id}`,(err,result) => {
            if(err) throw err;
            console.log(result);
           res.send(JSON.stringify(result)); 
        }) 
    },
    async details (req,res){
        const { id } = req.body;
         db.query(`SELECT * FROM alunos WHERE id_aluno = ${id}`,(err,result) => {
            if(err) throw err;
            console.log(result);
            res.send(JSON.stringify(result)); 
        }) 
    },
    async editedAluno(req,res){

    },
    async deletedAluno(req,res){

    },
    /* Professores */
    async ListagemTeachers(req,res){

    },
    async DetailsTeacher(req,res){

    },
    async EditedTeachers(req,res){

    },
    async DeletedTeachers(req,res){

    },

    /* Cursos */
    async ListagemCursos(req,res){

    },
    async DetailsCursos(req,res){

    },
    async EditedCursos(req,res){

    },
    async DeletedCursos(req,res){

    },

    /* Planos */
    async AddPlanos(req,res){

    },
    async ListagemPlanos(req,res){

    },
    async DetailsPlano(req,res){

    },
    async EditedPLano(req,res){

    },
    async DeletedPlanos(req,res){

    },
}