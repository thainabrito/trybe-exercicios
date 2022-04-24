USE sakila;
SELECT * FROM city;
SELECT city_id, city FROM city;
SELECT first_name, last_name FROM customer;
SELECT * FROM rental;
SELECT title, description, release_year FROM film;
SELECT * FROM actor;
SELECT * FROM adress;
SELECT CONCAT(first_name, ' ', last_name) AS 'Nome Completo' FROM sakila.actor;
SELECT CONCAT(title, ' ', release_year) AS 'Lançamento do Filme' FROM film;
SELECT CONCAT(title, ' ', rating) AS 'Classificação' FROM film;
SELECT * FROM address;
SELECT CONCAT(address, ' ', district) AS 'Endereço' FROM address;
SELECT DISTINCT first_name, last_name FROM actor;
SELECT first_name FROM actor;