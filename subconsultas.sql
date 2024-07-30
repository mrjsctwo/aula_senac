USE ti3k5791_murilocoelho;

CREATE TABLE departamentos(
    departamentoID INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL 
);

USE ti3k5791_murilocoelho;

CREATE TABLE empregados(
    empregadosID INT PRIMARY key AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    salario DECIMAL(10,2) NOT NULL,
    departamentoID INT,
    FOREIGN KEY (departamentoID) REFERENCES departamentos (departamentoID)
);

USE ti3k5791_murilocoelho;

INSERT INTO departamentos (departamentoID,nome)
VALUES
(1,'ti3k'),
(2,'vendas'),
(3,'marketing'),
(4,'recursos humanos');

USE ti3k5791_murilocoelho;

INSERT INTO empregados (empregadosID,nome,salario,departamentoID)
VALUES
(01,'Valdemir',1500.00,1),
(02,'Alexandre',1800.00,2),
(03,'Maicon',2000.00,3),
(04,'Dylon',3540.00,4),
(05,'Kellen',5000.00,1),
(06,'Xonas',900.00,1),
(07,'Gabriel',1000.00,2),
(08,'Jones',3000.00,4);

USE ti3k5791_murilocoelho;

SELECT nome,salario--'consulta externa'(empregados com salario acima da media)
FROM empregados
WHERE salario > (SELECT AVG(salario) FROM empregados);--'subconsulta'(media de salario dos empregados)

USE ti3k5791_murilocoelho;

ALTER TABLE departamentos
ADD localizacao VARCHAR(50);

USE ti3k5791_murilocoelho;

UPDATE departamentos
SET localizacao = 'Sao Leopoldo'
WHERE nome = 'vendas';

UPDATE departamentos
SET localizacao = 'Rio de Janeiro'
WHERE nome = 'marketing';

UPDATE departamentos
SET localizacao = 'Sao Paulo'
WHERE nome = 'ti3k';

UPDATE departamentos
SET localizacao = 'Belo Horizonte'
WHERE nome = 'recursos humanos';

USE ti3k5791_murilocoelho;

SELECT nome
FROM empregados
WHERE departamentoID IN (SELECT departamentoID FROM departamentos WHERE = 'Sao Paulo');

USE ti3k5791_murilocoelho;

SELECT nome,salario
FROM empregados
WHERE salario > ANY (SELECT salario FROM empregados WHERE departamentoID =(SELECT departamentoID FROM departamentos WHERE nome = 'ti3k'));

USE ti3k5791_murilocoelho;

SELECT nome,salario
FROM empregados
WHERE salario > ALL (SELECT salario FROM empregados WHERE departamentoID =(SELECT departamentoID FROM departamentos WHERE nome = 'ti3k')); 

USE ti3k5791_murilocoelho;

SELECT nome,salario
FROM empregados
WHERE salario IN (SELECT salario FROM empregados WHERE departamentoID =(SELECT departamentoID FROM departamentos WHERE nome = 'ti3k')); 

USE ti3k5791_murilocoelho;

ALTER TABLE empregados
ADD titulo VARCHAR(50);

USE ti3k5791_murilocoelho;

CREATE TABLE cargos(
    cargosID INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(50) NOT NULL,
    departamentoID INT,
    salario DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (departamentoID) REFERENCES departamentos (departamentoID)
);

USE ti3k5791_murilocoelho;

ALTER TABLE empregados 
DROP COLUMN salario;


USE ti3k5791_murilocoelho;

UPDATE empregados
SET titulo = 'Gerente'
WHERE nome = 'Valdemir'

UPDATE empregados
SET titulo = 'Assistente'
WHERE nome = 'Alexandre'

UPDATE empregados
SET titulo = 'Analista'
WHERE nome = 'Maicon'

UPDATE empregados
SET titulo = 'Dev'
WHERE nome = 'Dylon'

UPDATE empregados
SET titulo = 'Engenheiro'
WHERE nome = 'Kellen'

UPDATE empregados
SET titulo = 'Assistente'
WHERE nome = 'Xonas'

UPDATE empregados
SET titulo = 'Analista'
WHERE nome = 'Gabriel'

UPDATE empregados
SET titulo = 'Estagiario'
WHERE nome = 'Jones'

INSERT INTO cargos(titulo,departamentoID,salario)
VALUES
('Gerente',1,8000.00),
('Assistente',1,4000.00),
('Analista',2,4500.00),
('Dev', 3, 6000.00),
('Engenheiro', 3, 7000.00),
('Assistente', 4, 3500.00),
('Analista', 2, 4600.00),
('Estagiario', 1, 2000.00);




