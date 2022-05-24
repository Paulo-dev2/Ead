CREATE TABLE admin_systema (
  id_admin_systema INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  professor_id_professor INTEGER UNSIGNED NOT NULL,
  nome_admin VARCHAR(255) NULL,
  email_admin VARCHAR(255) NULL,
  password_admin VARCHAR(255) NULL,
  tel_admin VARCHAR(50) NULL,
  PRIMARY KEY(id_admin_systema),
  INDEX admin_systema_FKIndex1(professor_id_professor)
);

CREATE TABLE alunos (
  id_aluno INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  nome_aluno VARCHAR(255) NULL,
  end_aluno VARCHAR(255) NULL,
  tel_aluno VARCHAR(255) NULL,
  email_aluno VARCHAR(255) NULL,
  password_aluno VARCHAR(255) NULL,
  cpf_aluno VARCHAR(255) NULL,
  cartao VARCHAR(255) NULL,
  pagamento BOOL NULL,
  img_aluno VARCHAR(255) NULL,
  nivel_aluno VARCHAR(255) NULL,
  PRIMARY KEY(id_aluno)
);

CREATE TABLE aulas (
  id_aula INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  cursos_id_curso INTEGER UNSIGNED NOT NULL,
  url_aula VARCHAR(255) NULL,
  nivel_aula VARCHAR(100) NULL,
  arq_aula VARCHAR(255) NULL,
  data_aula DATE NULL,
  PRIMARY KEY(id_aula),
  INDEX aulas_FKIndex1(cursos_id_curso)
);

CREATE TABLE cursos (
  id_curso INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  nome_curso VARCHAR(255) NULL,
  preco_curso VARCHAR(255) NULL,
  data_curso DATE NULL,
  lancamento_curso DOUBLE NULL,
  descricao_curso TEXT NULL,
  PRIMARY KEY(id_curso)
);

CREATE TABLE email (
  id_email INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  body_email TEXT NULL,
  title_email VARCHAR(255) NULL,
  to_email VARCHAR(255) NULL,
  PRIMARY KEY(id_email)
);

CREATE TABLE finaceiro (
  compra_id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  nome_financeiro VARCHAR(255) NULL,
  lucro VARCHAR(255) NULL,
  situacao_pagamento VARCHAR(255) NULL,
  formas_pagamento VARCHAR(255) NULL,
  PRIMARY KEY(compra_id)
);

CREATE TABLE gerenciamento_alunos (
  cursos_id_curso INTEGER UNSIGNED NOT NULL,
  alunos_id_aluno INTEGER UNSIGNED NOT NULL,
  PRIMARY KEY(cursos_id_curso, alunos_id_aluno),
  INDEX cursos_has_alunos_FKIndex1(cursos_id_curso),
  INDEX cursos_has_alunos_FKIndex2(alunos_id_aluno)
);

CREATE TABLE gerenciamento_aulas (
  cursos_id_curso INTEGER UNSIGNED NOT NULL,
  professor_id_professor INTEGER UNSIGNED NOT NULL,
  PRIMARY KEY(cursos_id_curso, professor_id_professor),
  INDEX cursos_has_professor_FKIndex1(cursos_id_curso),
  INDEX cursos_has_professor_FKIndex2(professor_id_professor)
);

CREATE TABLE gerenciamento_email (
  alunos_id_aluno INTEGER UNSIGNED NOT NULL,
  email_id_email INTEGER UNSIGNED NOT NULL,
  PRIMARY KEY(alunos_id_aluno, email_id_email),
  INDEX alunos_has_email_FKIndex1(alunos_id_aluno),
  INDEX alunos_has_email_FKIndex2(email_id_email)
);

CREATE TABLE gerenciamento_financeiro (
  alunos_id_aluno INTEGER UNSIGNED NOT NULL,
  finaceiro_compra_id INTEGER UNSIGNED NOT NULL,
  PRIMARY KEY(alunos_id_aluno, finaceiro_compra_id),
  INDEX alunos_has_finaceiro_FKIndex1(alunos_id_aluno),
  INDEX alunos_has_finaceiro_FKIndex2(finaceiro_compra_id)
);

CREATE TABLE gerenciamento_modulos (
  aulas_id_aula INTEGER UNSIGNED NOT NULL,
  modulos_id_modulo INTEGER UNSIGNED NOT NULL,
  PRIMARY KEY(aulas_id_aula, modulos_id_modulo),
  INDEX aulas_has_modulos_FKIndex1(aulas_id_aula),
  INDEX aulas_has_modulos_FKIndex2(modulos_id_modulo)
);

CREATE TABLE modulos (
  id_modulo INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  nome_modulo VARCHAR(255) NULL,
  nivel_modulo INTEGER UNSIGNED NULL,
  PRIMARY KEY(id_modulo)
);

CREATE TABLE professor (
  id_professor INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  nome_professor VARCHAR(255) NULL,
  tel_professor VARCHAR(255) NULL,
  end_professor VARCHAR(255) NULL,
  email_professor VARCHAR(255) NULL,
  password_professor VARCHAR(255) NULL,
  cpf_professor VARCHAR(255) NULL,
  PRIMARY KEY(id_professor)
);


