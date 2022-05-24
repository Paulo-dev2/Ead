const db = require('../functions/db');


module.exports = {
    async AlunosSelect (req,res) {
        const sql = "SELECT * FROM `gerenciamento_alunos` AS g INNER JOIN cursos AS c ON g.cursos_id_curso = c.id_curso INNER JOIN alunos AS a ON a.id_aluno = g.alunos_id_aluno";
       db.query(sql,(err,result) => {
           if(err) throw err;
           console.log(result);
           /* return JSON.stringify(result); */
           return ("Olá mundo")
       })
    }
}