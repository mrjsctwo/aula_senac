
CREATE TABLE carros_aluguel(
    nome VARCHAR(15) NOT NULL,
    anoLancamento INT,
    marca VARCHAR(15),
    placa VARCHAR(15),
    cor VARCHAR(10),
    diaria INT
);

INSERT INTO carros_aluguel(nome,anoLancamento,marca,placa,cor,diaria)
VALUES ('huracan',2024,'Lamborghini','8hiw-hhwi','Verde',200)
('morcielago',2022,'Lamborghini','8hd-fhji','azul',400)
('scorpion',2020,'Lamborghini','8hiw-hhwi','Verde',150)
('veneno',2019,'Lamborghini','8hiw-hhwi','Verde',200)
('aventador',2024,'Lamborghini','8hiw-hhwi','Verde',500)
('huracan',2024,'Lamborghini','8hiw-hhwi','Verde',200)
('huracan',2024,'Lamborghini','8hiw-hhwi','Verde',200)
('huracan',2024,'Lamborghini','8hiw-hhwi','Verde',200);

CREATE TABLE clientes(
    clientID INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(15),
    endereco VARCHAR(30),
    telefone VARCHAR(10),
    email VARCHAR(10)

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
    diariaData DATA,
    valorTotal INT

);


INSERT INTO alugueis_carros(clientID,carro,diariaData,valorTotal)
VALUES(1,'huracan',2024,'Lamborghini','8hiw-hhwi','Verde','20/09/34 - 19/11/24',200),
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
(5,'scorpion',2020,'Lamborghini','8hiw-hhwi','Verde','20/09/34 - 19/11/24',150),
(5,'scorpion',2020,'Lamborghini','8hiw-hhwi','Verde','20/09/34 - 19/11/24',150),
(5,'scorpion',2020,'Lamborghini','8hiw-hhwi','Verde','20/09/34 - 19/11/24',150),
(5,'scorpion',2020,'Lamborghini','8hiw-hhwi','Verde','20/09/34 - 19/11/24',150),
(3,'veneno',2019,'Lamborghini','8hiw-hhwi','Verde','20/09/34 - 19/11/24',90),
(3,'veneno',2019,'Lamborghini','8hiw-hhwi','Verde','20/09/34 - 19/11/24',90),
(3,'veneno,2019,Lamborghini,8hiw-hhwi,Verde','20/09/34 - 19/11/24',90),
(3,'veneno',2019,'Lamborghini','8hiw-hhwi','Verde','20/09/34 - 19/11/24',90);

SELECT SUM (clientID,valorTotal) AS clientID_valor_total_alugueis_carros
FROM alugueis_carros;

SELECT SUM (carro,diariaData) AS carro_diaria_data_alugueis_carros
FROM alugueis_carros;





