//PROJETO GESTAO DE CARROS

/* Parte 1: 

-> Tabela de Carros */
CREATE TABLE carros_aluguel(
    
    //Informações do Carro
    nome VARCHAR(15) NOT NULL, //---Dado:  Caractere   | ---Variável:  Nome
    anoLancamento INT,         //---Dado:  Nº Inteiro  | ---Variável:  Ano de Lançamento 
    marca VARCHAR(15),         //---Dado:  Caractere   | ---Variável:  Marca
    placa VARCHAR(15),         //---Dado:  Caractere   | ---Variável:  Placa 
    cor VARCHAR(10),           //---Dado:  Caractere   | ---Variável:  Cor 
    diaria INT                 //---Dado:  Nº Inteiro  | ---Variável:  Diária 
);
//Informações do Carro
INSERT INTO carros_aluguel(nome,anoLancamento,marca,placa,cor,diaria)

//Valores das Informacoes do Carro
VALUES ('huracan',2024,'Lamborghini','8hiw-hhwi','Verde',200),
       ('morcielago',2022,'Lamborghini','8hd-fhji','azul',400),
       ('scorpion',2020,'Lamborghini','8hiw-hhwi','Verde',150),
       ('veneno',2019,'Lamborghini','8hiw-hhwi','Verde',200),
       ('aventador',2024,'Lamborghini','8hiw-hhwi','Verde',500),
       ('huracan',2024,'Lamborghini','8hiw-hhwi','Verde',200),
       ('huracan',2024,'Lamborghini','8hiw-hhwi','Roxo',789),
       ('huracan',2024,'Lamborghini','8hiw-hhwi','Verde',200);

/* Parte 2: 

-> Tabela de Clientes */
CREATE TABLE clientes(
    
    //Informações do Cliente
    clientID INT PRIMARY KEY AUTO_INCREMENT, //---Dado:  Nº Inteiro | ---Variável: ID do Cliente
    nome VARCHAR(15),                        //---Dado:  Caractere  | ---Variável: Nome
    endereco VARCHAR(30),                    //---Dado:  Caractere  | ---Variável: Endereço 
    telefone VARCHAR(10),                    //---Dado:  Caractere  | ---Variável: Telefone
    email VARCHAR(10)                        //---Dado:  Caractere  | ---Variável: E-mail

);
//Informações do Cliente
INSERT INTO clientes(clientID,nome,endereco,telefone,email)

//Valores das Informações do Cliente
VALUES (1,'Vademir','Rua limoes,158-Av.Brasil','1282-9994','valdemir@gmail.com'),
       (2,'Gabriela','Rua cegoes,90-Av.Brasil','4442-7778','gabi@gmail.com'),
       (3,'Vanessa','Rua casa,09-Av.Brasil','1992-9994','vanessa@gmail.com'),
       (4,'Brenda','Automar,200-lindolfo','8888-5594','brenda@gmail.com'),
       (5,'Maria','Rua dos tocos,13-norte','9082-2000','maria@gmail.com');

/* Parte 3: 

-> Tabela de Aluguel */
CREATE TABLE alugueis_carros(
    
    //Informações do Aluguel
    clientID INT PRIMARY KEY AUTO_INCREMENT, //---Dado:  Nº Inteiro | ---Variável: ID do Cliente
    carro VARCHAR(15),                       //---Dado:  Caractere  | ---Variável: Carro
    diariaData DATA,                         //---Dado:  Nº Inteiro | ---Variável: Data da Diaria
    valorTotal INT                           //---Dado:  Nº Inteiro | ---Variável: Valor Total

);

//Informações do Aluguel
INSERT INTO alugueis_carros(clientID,carro,diariaData,valorTotal)

//Valores das Informações do Aluguel
VALUES (1,'huracan',2024,'Lamborghini','8hiw-hhwi','Verde','20/09/34 - 19/11/24',200),
       (1,'huracan',2024,'Lamborghini','8hiw-hhwi','Verde','20/09/34 - 19/11/24',200),
       (1,'huracan',2024,'Lamborghini','8hiw-hhwi','Verde','20/09/34 - 19/11/24',200),
       (1,'huracan',2024,'Lamborghini','8hiw-hhwi','Verde','20/09/34 - 19/11/24',200),
       (1,'huracan',2024,'Lamborghini','8hiw-hhwi','Verde','20/09/34 - 19/11/24',200),
       (1,'huracan',2024,'Lamborghini','8hiw-hhwi','Verde','20/09/34 - 19/11/24',200),
       (4,'morcielago',2022,'Lamborghini','8hd-fhji','azul','20/09/34 - 19/11/24',400),
       (4,'morcielago',2022,'Lamborghini','8hd-fhji','azul','20/09/34 - 19/11/24',400),
       (4,'morcielago',2022,'Lamborghini','8hd-fhji','azul','20/09/34 - 19/11/24',400),
       (4,'morcielago',2022,'Lamborghini','8hd-fhji','azul','20/09/34 - 19/11/24',400),
       (4,'morcielago',2022,'Lamborghini','8hd-fhji','azul','20/09/34 - 19/11/24',400),
       (4,'morcielago',2022,'Lamborghini','8hd-fhji','azul','20/09/34 - 19/11/24',400),
       (2,'aventador',2024,'Lamborghini','8hiw-hhwi','Verde','20/09/34 - 19/11/24',500),
       (2,'aventador',2024,'Lamborghini','8hiw-hhwi','Verde','20/09/34 - 19/11/24',500),
       (2,'aventador',2024,'Lamborghini','8hiw-hhwi','Verde','20/09/34 - 19/11/24',500),
       (2,'aventador',2024,'Lamborghini','8hiw-hhwi','Verde','20/09/34 - 19/11/24',500),

//consultar e recuperar dados de uma ou mais tabelas em um banco de dados (Comando SELECT) 
//Usada para especificar a(s) fonte(s) de dados para uma consulta (Comando FROM)

SELECT SUM (clientID,valorTotal) AS clientID_valor_total_alugueis_carros//Diaria do Cliente
FROM alugueis_carros;

SELECT SUM (carro,diariaData) AS carro_diaria_data_alugueis_carros//Diaria do Carro
FROM alugueis_carros;




