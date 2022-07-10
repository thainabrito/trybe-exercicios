-- bonus do dia 2, bloco 20 sql, modulo 3.

select p2.Name as 'nome produto', p1.Price as 'valor produto'
from Provides p1 inner join Pieces p2
where p1.Provider like "RB%" 
and p1.Piece = p2.Code;

select * from Provides p order by p.Price desc limit 5;

select * from Pieces AS p;

SELECT * from Providers AS p;

select * from Provides p;

SELECT Piece, Price FROM Provides WHERE Provider = 'RBT';

SELECT * FROM Provides ORDER BY Price DESC LIMIT 5;

SELECT DISTINCT Provider, Price FROM Provides ORDER BY Price DESC LIMIT 4  OFFSET 2;

SELECT * FROM Provides WHERE Provider = 'HAL' ORDER BY Price DESC;

SELECT COUNT(Provider) FROM Provides WHERE Piece = '1';
