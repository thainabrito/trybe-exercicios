-- bonus do dia 2, bloco 20 sql, modulo 3.

select p2.Name as 'nome produto', p1.Price as 'valor produto'
from Provides p1 inner join Pieces p2
where p1.Provider like "RB%" 
and p1.Piece = p2.Code;

select * from Provides p order by p.Price desc limit 5;

select * from Pieces AS p;

SELECT * from Providers AS p;

select * from Provides p;

-- ex 1 Escreva uma query para exibir a peça e o preço de tudo que é provido pela empresa RBT .
SELECT Piece, Price FROM Provides WHERE Provider = 'RBT';

-- ex 2 Escreve uma query para exibir todas as informações das cinco peças com os maiores preços.
SELECT * FROM Provides ORDER BY Price DESC LIMIT 5;

-- ex 3
SELECT DISTINCT Provider, Price FROM Provides ORDER BY Price DESC LIMIT 4  OFFSET 2;

-- EX 4
SELECT * FROM Provides WHERE Provider = 'HAL' ORDER BY Price DESC;

-- EX 5
SELECT COUNT(Provider) FROM Provides WHERE Piece = '1';

-- 7 da bonus (não vai rodar aqui pq é tabela de fora)
SELECT * FROM Customers WHERE NOT City = 'Berlin';
SELECT * FROM Customers WHERE City = 'Berlin' OR City = 'London';