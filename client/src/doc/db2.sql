CREATE TABLE alunos (
  id_aluno INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  nome_aluno VARCHAR(255) NULL,
  end_aluno VARCHAR(255) NULL,
  tel_aluno VARCHAR(255) NULL,
  email_aluno VARCHAR(255) NULL,
  password_aluno VARCHAR(255) NULL,
  cpf_aluno VARCHAR(255) NULL,
  PRIMARY KEY(id_aluno)
);

CREATE TABLE aulas (
  id_aula INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  cursos_id_curso INTEGER UNSIGNED NOT NULL,
  url_aula VARCHAR(255) NULL,
  nivel_aula VARCHAR(100) NULL,
  PRIMARY KEY(id_aula),
  INDEX aulas_FKIndex1(cursos_id_curso)
);

CREATE TABLE cursos (
  id_curso INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  nome_curso VARCHAR(255) NULL,
  preco_curso VARCHAR(255) NULL,
  data_curso DATE NULL,
  lancamento_curso DOUBLE NULL,
  PRIMARY KEY(id_curso)
);

CREATE TABLE empresas (
  id_empresa INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  nome_empresa VARCHAR(255) NULL,
  pagamento_empresa DOUBLE NULL,
  cartao_empresa VARCHAR(255) NULL,
  PRIMARY KEY(id_empresa)
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
  professor_id_professor_empresa INTEGER UNSIGNED NOT NULL,
  PRIMARY KEY(cursos_id_curso, professor_id_professor_empresa),
  INDEX cursos_has_professor_FKIndex1(cursos_id_curso),
  INDEX cursos_has_professor_FKIndex2(professor_id_professor_empresa)
);

CREATE TABLE gerenciamento_empresa (
  helix_user_id_helix_user INTEGER UNSIGNED NOT NULL,
  empresas_id_empresa INTEGER UNSIGNED NOT NULL,
  PRIMARY KEY(helix_user_id_helix_user, empresas_id_empresa),
  INDEX helix_user_has_empresas_FKIndex1(helix_user_id_helix_user),
  INDEX helix_user_has_empresas_FKIndex2(empresas_id_empresa)
);

CREATE TABLE gerenciamento_professor (
  empresas_id_empresa INTEGER UNSIGNED NOT NULL,
  professor_id_professor_empresa INTEGER UNSIGNED NOT NULL,
  PRIMARY KEY(empresas_id_empresa, professor_id_professor_empresa),
  INDEX empresas_has_professor_FKIndex1(empresas_id_empresa),
  INDEX empresas_has_professor_FKIndex2(professor_id_professor_empresa)
);

CREATE TABLE helix_posts (
  id_helix_post INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  title_helix_post VARCHAR(255) NULL,
  author_helix_post VARCHAR(255) NULL,
  data_2 DATE NULL,
  PRIMARY KEY(id_helix_post)
);

CREATE TABLE helix_user (
  id_helix_user INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  helix_posts_id_helix_post INTEGER UNSIGNED NOT NULL,
  nome_helix_user VARCHAR(255) NULL,
  tel_helix_user VARCHAR(40) NULL,
  type_helix_user INTEGER UNSIGNED NULL,
  password_helix_user VARCHAR(255) NULL,
  img_helix_user VARCHAR(255) NULL,
  cpf_helix_user VARCHAR(60) NULL,
  PRIMARY KEY(id_helix_user),
  INDEX helix_user_FKIndex1(helix_posts_id_helix_post)
);

CREATE TABLE professor (
  id_professor_empresa INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  nome_professor VARCHAR(255) NULL,
  tel_professor VARCHAR(255) NULL,
  end_professor VARCHAR(255) NULL,
  email_professor VARCHAR(255) NULL,
  password_professor VARCHAR(255) NULL,
  PRIMARY KEY(id_professor_empresa)
);


