DROP DATABASE IF EXISTS database_name;

CREATE DATABASE database_name;

USE database_name;

CREATE TABLE table_name (
  id INT PRIMARY KEY,
  image VARCHAR(512),
  name TEXT,
  rating TINYINT,
  category TEXT
);
