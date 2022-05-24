const express = require("express");
const routes = express.Router();

const multer = require('multer'); 

const multerConfig =  require('./controllers/img'); 

const Admin = require("./controllers/admin.controller");
/*const Users = require("./controllers/users.controller"); */

/* Rotas dos Posts */
//routes.post('/admin/news-alunos/',multer(multerConfig).single("File"),Admin.create_aluno);
routes.post('/admin/aluno-listagem/',Admin.listagem);
routes.post('/admin/aluno-details/',Admin.details);
routes.get('/admin/alunos/',Admin.select);
/*routes.get('/admin/alunos/',multer(multerConfig).single("file"),Teacher.create);*/
/* routes.post('/insert-posts',multer(multerConfig).single("file"),Posts.create) */

/* Rotas do usuario */
/* routes.get('/users/',Users.select); */

module.exports = routes;