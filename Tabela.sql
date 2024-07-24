-- AULA 15 -- SQL

USE ti3k5791_murilocoelho; -- USUARIO

CREATE TABLE Clientes(--TABELA
      -- coluna / tipo de dados / restricao
      idClientes INT PRIMARY KEY,
      nome VARCHAR(100),
      telefone VARCHAR(100)--COLUNA
);

---------------------------------------------

USE ti3k5791_murilocoelho; 

  ALTER TABLE clientes 
  ADD email VARCHAR(100); -- ADICIONAR

---------------------------------------------

USE ti3k5791_murilocoelho; 

  ALTER TABLE Clientes 
  MODIFY email TEXT; -- MODIFICAR

---------------------------------------------

USE ti3k5791_murilocoelho; 

  ALTER TABLE Clientes 
  CHANGE COLUMN emailCliente VARCHAR(255); -- MUDAR COLUNA

---------------------------------------------

USE ti3k5791_murilocoelho; 

  ALTER TABLE Clientes 
  DROP COLUMN telefone; -- DELETAR COLUNA

---------------------------------------------

USE ti3k5791_murilocoelho; 

  ALTER TABLE Clientes 
  RENAME TO Cliente; -- RENOMEAR TABELA

---------------------------------------------

USE ti3k5791_murilocoelho; 

  DROP TABLE Clientes; --DELETAR TABELA

---------------------------------------------

USE ti3k5791_murilocoelho; 

  INSERT INTO Clientes (idClientes, nome, emailCliente)
  VALUES (1, 'Joao Silva', 'joao.silva@email.com'),
  (2, 'Maria','maria@email.com'),
  (3,'Jonas','jonas@email.com'),
  (4, 'Ana', 'ana@email.com');

---------------------------------------------

INSERT IGNORE Clientes (idClientes, nome, emailCliente) -- IGNORAR ERRO
  VALUES (1, 'Joao Silva', 'joao.silva@email.com'),
  (2, 'Maria','maria@email.com'),
  (3,'Jonas','jonas@email.com'),
  (4, 'Ana', 'ana@email.com');

---------------------------------------------

USE ti3k5791_murilocoelho; 

   UPDATE Clientes

   SET email = 'novo.email@email.com'

   WHERE idClientes = 20; -- condicao(TODO UPDATE TEM UM WHERE!!!!!!!!!!!!)

---------------------------------------------

USE ti3k5791_murilocoelho; 

   DELETE FROM Clientes
   WHERE idClientes = '1'

---------------------------------------------

USE ti3k5791_murilocoelho; 

   SELECT emailCliente
   FROM Clientes
   WHERE idClientes = 1;




