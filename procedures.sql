
--1. Crie um procedimento que 'diminui' o salario de um departamento em um valor X :

USE ti3k5791_murilocoelho;

CREATE PROCEDURE DiminuirSalarioDep(
    IN departamentoID INT,
    IN valor DECIMAL(10,2)
)
BEGIN
    UPDATE cargos
    SET salario = salario - valor
    WHERE departamentoID = depID;
END //

call DiminuirSalarioDep(1,1000);

--2. Crie um procedimento que 'atualiza' o titulo de um empregrado especifico para um novo titulo fornecido :

--EX 1:
USE ti3k5791_murilocoelho;

CREATE PROCEDURE AtualizarTituloEmp(
    IN empregadosID INT,
    IN novo_titulo VARCHAR(50)
)
BEGIN
    UPDATE empregados
    SET titulo = novo_titulo
    WHERE empregadosID = emp_ID

END //

call AtualizarTituloEmp(3,'Dev');

------------------------------------------------------

--EX 2:

USE ti3k5791_murilocoelho;

CREATE PROCEDURE MudarCargo(
    IN empregadosID INT,
    IN novo_titulo VARCHAR(50)
)
BEGIN
    DECLARE titulo_existente INT; --Variavel daclarada aqui

    --Verifica se o novo titulo existe na tabela cargos
    SELECT COUNT(*)
    INTO titulo_existente --armazena o resultado da bcontagem na variavel
    FROM cargos
    WHERE titulo = novo_titulo;

    --Se o titulo existe, executa o codigo
    IF titulo_existente > 0 THEN
    --Atualiza o titulo de empregado
        UPDATE empregados
        SET titulo = novo_titulo
        WHERE empregadosID = emp_ID;
    END IF;
END//

call AtualizarTituloEmp(3,'Dev');


--3. Crie um procedimento que 'transfere' um empregado de um departamento para outro :

USE ti3k5791_murilocoelho;

CREATE PROCEDURE TransferirEmpregado(
    IN empregadosID INT,
    IN departamentoID INT,
    IN nome VARCHAR(50),
)
BEGIN
    DECLARE titulo_existente INT; --Variavel daclarada aqui

    --Verifica se o novo titulo existe na tabela cargos
    SELECT COUNT(*)
    INTO titulo_existente --armazena o resultado da bcontagem na variavel
    FROM cargos
    WHERE titulo = novo_titulo;

    --Se o titulo existe, executa o codigo
    IF titulo_existente > 0 THEN
    --Atualiza o titulo de empregado
        UPDATE empregados
        SET titulo = novo_titulo
        WHERE empregadosID = emp_ID;
    END IF;
END//




