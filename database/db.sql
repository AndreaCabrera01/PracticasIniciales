CREATE DATABASE database_users;

USE database_users;

CREATE TABLE users(
    id INT(9) NOT NULL,
    name VARCHAR(50),
    lastname VARCHAR(50),
    password VARCHAR(50),
    email VARCHAR(255)
);

ALTER TABLE users
    ADD PRIMARY KEY (id);

DESCRIBE users;

show databases;

