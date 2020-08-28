drop database if exists DATABASE_NAME;

create database DATABASE_NAME;

use DATABASE_NAME;


create table TABLE_NAME (

  id int primary key,
  image varchar(512),
  name text,
  rating tinyint,
  category text
);
