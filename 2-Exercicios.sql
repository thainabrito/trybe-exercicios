-- Dia 2, bloco 20 sql, modulo 3.

USE Scientists;
SELECT 'This is SQL Exercise, Practice and Solution';
SELECT 1, 2, 3;
SELECT 10 + 15;
SELECT (3 * 4) + 10;
SELECT * FROM Scientists;

SELECT * FROM Projects;
SELECT Name AS 'Nome do Projeto', Hours AS 'Tempo de Trabalho' FROM Projects;

SELECT Name FROM Scientists ORDER BY Name;
SELECT Name FROM Projects ORDER BY Name DESC;

SELECT CONCAT('O projeto ', Name, ' precisou de ', Hours, ' horas para ser concluído.') as resultado FROM Projects;

SELECT Name, Hours FROM Projects ORDER BY Hours DESC LIMIT 3;

SELECT DISTINCT Project FROM AssignedTo;

SELECT Name, Hours FROM Projects;
SELECT Name FROM Projects ORDER BY Hours DESC;
SELECT Name FROM Projects ORDER BY Hours LIMIT 14 OFFSET 1;

SELECT * FROM Projects ORDER BY Hours LIMIT 5;

SELECT * FROM Scientists;
SELECT CONCAT('Existem ', COUNT(Name), ' cientistas na tabela Scientists.') FROM Scientists;
