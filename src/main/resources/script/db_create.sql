DROP DATABASE if exists triphub_db;

CREATE DATABASE if not exists triphub_db;

CREATE USER 'trip_man'@'localhost' IDENTIFIED BY 'codeup';

GRANT ALL ON triphub_db.* TO 'trip_man'@'localhost';

USE triphub_db;