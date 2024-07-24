
USE ti3k5791_murilocoelho; -- USUARIO

CREATE DATABASE IF NOT EXISTS Livraria;
USE Livraria;

CREATE TABLE Autores(
    autorID INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    nacionalidade(100)
    --dataNascimento FLOAT,
    --biografia INT
);
ALTER TABLE Autores(
  ADD dataNascimento FLOAT,
  biografia INT
)

------------------------------------------------------------

CREATE TABLE livros(
    livroID INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(100) NOT NULL,
    genero VARCHAR(100),
    anoPublicacao INT
    autorID INT FOREIGN (autorId) REFERENCES Autores(autorID)
    --editora INT,
    --numeroPaginas FLOAT,
    --idioma INT

);
ALTER TABLE livros(
  ADD editora INT,
  numeroPaginas FLOAT,
  idioma INT
)

------------------------------------------------------------

CREATE TABLE Clientes(
    clienteID INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    emdereco INT,
    telefone VARCHAR(25)
    --email VARCHAR(100),
    --dataNascimento FLOAT

);
ALTER TABLE Clientes(
  ADD email VARCHAR(100),
  dataNascimento FLOAT
)

------------------------------------------------------------

CREATE TABLE Emprestimos(
    emprestimosID INT PRIMARY KEY AUTO_INCREMENT,
    livroID INT FOREIGN (livroID) REFERENCES livros(livroID),
    clienteID INT FOREIGN(clienteID) REFERENCES Clientes(clienteID),
    dataEmprestimo FLOAT,
    dataDevolucao FLOAT
     --dataPrevistaDevolucao FLOAT
     --status VARCHAR(100)

);
ALTER TABLE Emprestimos(
  ADD dataPrevistaDevolucao FLOAT,
  status VARCHAR(25)
);

------------------------------------------------------------
--INCLUIR VALORES NAS COLUNAS

INSERT INTO Autores (autorIDs, nome, nacionalidade, dataNascimento,biografia)
VALUES (1, 'Bram Stocker','Irlandes', 1847, 'Um romancista, poeta e contista irlandês, mundialmente conhecido por seu romance gótico Drácula,'),

(2, 'S.King','Norte Americano', 1947 ,'É um escritor norte-americano de terror, ficção sobrenatural, suspense, ficção científica e fantasia.'),

(3, 'S.King','Norte Americano', 1947 , 'É um escritor norte-americano de terror, ficção sobrenatural, suspense, ficção científica e fantasia.'),

(4, 'G.Orwell', 'Britanico' , 1903 ,'Mais conhecido pelo pseudónimo George Orwell, foi um escritor, jornalista e ensaísta político inglês, nascido na Índia Britânica.');


INSERT INTO Livros (livrosID, titulo, genero , anoPublicacao, autorID, editora, numeroPaginas, idioma)
VALUES (1, 'Dracula', 'Romance', 1897, 1 ,'Arch.Constable', 592,'Ingles')
(2, 'Outsider','romance', 'EUA', 2018, 2, 'Arch', 528, 'Ingles'),
(3, 'Carrie a estranha', 'Norte Americano', 1974, 3, 'Arch', 208, 'Ingles'),
(4, 1984, 'Ficcao', 1949, 4 , 'Secker and Warburg', 326 , 'Ingles')








