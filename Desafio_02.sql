USE ti3k5791_murilocoelho;

CREATE TABLE carros_aluguel(
    nome VARCHAR(15),
    anoLancamento DECIMAL,
    marca VARCHAR(15),
    placa VARCHAR(15),
    cor VARCHAR(10),
    diaria DECIMAL(10,2)
);

INSERT INTO carros_aluguel (nome,anoLancamento,marca,placa,cor,diaria)
VALUES ('huracan',2024,'Lamborghini','HJG0735','Verde',200),
('morcielago',2022,'Lamborghini','JVZ2261','Azul',400),
('scorpion',2020,'Lamborghini','MNF2602','Vermelho',150),
('veneno',2019,'Lamborghini','AOA7694','Preto',1000),
('aventador',2023,'Lamborghini','HKL6850','Laranja',500),
('xtremo',2012,'Lamborghini','JUA5862','Cinza',300),
('urus',2018,'Lamborghini','JLL6075','Dourado',600),
('gallardo',2015,'Lamborghini','KGE4200','Amarelo',900);

CREATE TABLE clientes(
    clientID INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(15),
    endereco VARCHAR(30),
    telefone VARCHAR(10),
    email VARCHAR(100)

);

INSERT INTO clientes(clientID,nome,endereco,telefone,email)
VALUES (1,'Vademir','Rua limoes,158-Av.Brasil','1282-9994','valdemir@gmail.com'),
(2,'Gabriela','Rua cegoes,90-Av.Brasil','4442-7778','gabi@gmail.com'),
(3,'Vanessa','Rua casa,09-Av.Brasil','1992-9994','vanessa@gmail.com'),
(4,'Brenda','Automar,200-lindolfo','8888-5594','brenda@gmail.com'),
(5,'Maria','Rua dos tocos,13-norte','9082-2000','maria@gmail.com');

CREATE TABLE alugueis_carros(
    clientID INT PRIMARY KEY AUTO_INCREMENT,
    carro VARCHAR(15),
    dataInicio DATE,
    valorTotal DECIMAL(20,2),
    FOREIGN KEY(carro) REFERENCES alugueis_carros(carro),
    FOREIGN KEY(clientID) REFERENCES clientes(clientID)

);

INSERT INTO alugueis_carros(clientID,carro,dataInicio,valorTotal)
VALUES
(1,'veneno','20/03/24-18/04/24',1000),
(1,'veneno','20/03/24-18/04/24',1000),
(1,'aventador','20/03/24-18/04/24',500),
(1,'veneno','20/03/24-18/04/24',1000),
(1,'veneno','20/03/24-18/04/24',1000),
(1,'veneno','20/03/24-18/04/24',1000),
(3,'aventador','20/03/24-18/04/24',500),
(3,'veneno','20/03/24-18/04/24,1000',500),
(3,'aventador','20/03/24-18/04/24',500),
(3,'aventador','20/03/24-18/04/24',500),
(3,'aventador','20/03/24-18/04/24',500),
(3,'aventador','20/03/24-18/04/24',500),
(2,'xtremo','20/03/24-18/04/24',300),
(2,'xtremo','20/03/24-18/04/24',300),
(2,'xtremo','20/03/24-18/04/24',300),
(2,'xtremo','20/03/24-18/04/24',300),
(5,'scorpion','20/03/24-18/04/24',150),
(5,'scorpion','20/03/24-18/04/24',150),
(5,'scorpion','20/03/24-18/04/24',150),
(5,'scorpion','20/03/24-18/04/24',150),
(4,'gallardo','20/03/24-18/04/24',900),
(4,'gallardo','20/03/24-18/04/24',900),
(4,'gallardo','20/03/24-18/04/24',900),
(4,'gallardo','20/03/24-18/04/24',900);


SELECT clientes.nome, SUM (alugueis_carros._valor_total) AS
total_gastos
FROM clientes;

GROUP BY clientes.nome

SELECT SUM (clientID,valorTotal) AS clientID_valor_total_alugueis_carros
FROM alugueis_carros;

SELECT SUM (carro,dataInicio) AS carro_data_Inicio_data_alugueis_carros
FROM alugueis_carros;

