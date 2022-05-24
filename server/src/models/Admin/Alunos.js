const db = require('../../functions/db');

module.exports = {
    selectAluno(){
        const sql = "SELECT * FROM `alunos`";
        db.query(sql,(err,result) => {
            if(err) throw err;
            return result;
        })
    }
}