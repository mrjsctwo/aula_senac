/*
1.Crie uma base de dados com nome Desafio + nome do aluno.(X)

2.Crie uma tabela para armazenar as características dos produtos, como nome, categoria, preço, etc.(X)

3.A tabela deve conter uma coluna ID sequencial e única.(X)

4.O produto deve possuir no mínimo 7 características armazenadas.(X)

5.Crie 10 registros para a tabela criada (ID 1 a 10).(X)

6.Exclua o 4º registro e o 7º registro da tabela.

7.Adicione uma coluna na tabela chamada Sem estoque para armazenar se há o produto em estoque ou não (sugestão: use BOOLEAN ou VARCHAR – verdadeiro ou falso).

8.Altere todos os registros, com exceção do ID 2, para identificar que está sem estoque.

9.Monte um relatório (um SELECT) dos 5 primeiros registros de acordo com a ordem de inserção (do menor ID para o maior ID) e de acordo com o status da coluna SemEstoque.

*/
--1VGH-09(ID UNICO)

USE ti3k5791_murilocoelho;

CREATE TABLE Produtos(
    
    prodID INT PRIMARY KEY AUTO_INCREMENT
    nome VARCHAR(20) NOT NULL,
    prodCategoria VARCHAR(20),
    preco FLOAT,
    peso FLOAT,
    marca VARCHAR(20),
    garantia VARCHAR(15)
    cor VARCHAR(15)
);

USE ti3k5791_murilocoelho;

INSERT INTO Produtos(prodID, nome , prodCategoria , preco , peso , marca , garantia, cor)
  VALUES(1,'Iphone','Eletronico', 1234, 200.2 ,'Apple','1 ano', 'Verde'),
 (2, 'Galaxy', 'Eletronico', 2000 , 300, 'Samsung', '2 anos', 'Azul'),
 (3, 'Bone','Moda', 30, 12.01 ,'High', '10 anos', 'Marrom escuro'),
 (4, 'Calca', 'Moda', 30 , 3.04 ,'Off-White', '12 anos', 'Preto'),
 (5, 'Arroz', 'Alimentos', 20 , 1.01 , 'Tio joao', '10 anos','Transparente'),
 (6, 'Danone', 'Alimentos', 12, 22.01 ,'Batavo', '2 meses', 'Branco'),
 (7, 'X-Dragon', 'Teclado', 900 , 300.01, 'Cooler Master', '3 anos', 'Roxo'),
 (8, 'Abns','Teclado', 500 , 209.04 , 'Alienware', '5 anos', 'Laranja'),
 (9,'Stanley', 'Garrafa', 125 , 20.0 , 'Stanley', '6 anos', 'Amarelo' ),
 (10, 'RE1', 'Games', 30 ,12, 'Capcom', '9 meses','Vermelho');









