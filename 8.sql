USE sakila;
SELECT * FROM film;
SELECT title, release_year, rating FROM film;
SELECT COUNT(*) FROM film;

SELECT DISTINCT last_name from actor;
SELECT COUNT(DISTINCT last_name) from actor;
SELECT * FROM actor
ORDER BY last_name, first_name DESC;

SELECT * FROM language LIMIT 6 OFFSET 1;

SELECT * FROM film;
SELECT title, release_year, rental_duration, rating, replacement_cost FROM film
ORDER BY rental_duration DESC LIMIT 20;
SELECT title, release_year, rental_duration, rating, replacement_cost FROM film
ORDER BY replacement_cost LIMIT 20;