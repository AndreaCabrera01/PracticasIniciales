CREATE DATABASE ng_publicaciones_db;

USE ng_publicaciones_db;

CREATE TABLE publicaciones(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    usuario VARCHAR(180),
    tipo VARCHAR(180),
    mensaje VARCHAR(255),
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);


CREATE TABLE users(
    id VARCHAR(11),
    name VARCHAR(180),
    lastname VARCHAR(180),
    password VARCHAR(255),
    email VARCHAR(255)

);


DESCRIBE publicaciones;



