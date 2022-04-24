USE sakila;
SELECT COUNT(DISTINCT first_name) FROM actor;
SELECT COUNT(DISTINCT first_name, last_name) FROM actor;
SELECT COUNT(*) FROM address;
SELECT COUNT(address2) FROM address;
SELECT district FROM address;
SELECT COUNT(district) FROM address
WHERE district = 'Alberta';
SELECT COUNT(address2) FROM address
WHERE address2 = '';