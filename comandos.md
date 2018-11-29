# comandos para manejar las bases de datos desde la terminal

## iniciar terminal de mysql

/usr/local/mysql/bin/mysql -u root -p

## crear base de datos

create database nombreDB;

## mostrar bases de datos creadas

show databases;

## seleccionar base de datos para usar

use nombreDB;

## Creacion de tablas

Para crear tablas tenemos que tener una estructura clara de lo que vamos a armar.

CREATE TABLE frutas (
    id INT NOT NULL auto_increment,
    usuario VARCHAR(50) NOT NULL,
    nombre INT NOT NULL,
    PRIMARY KEY(id)
);

## Ver tablas creadas

show tables

## ver los detalles de la tabla

describe nombreTabla


## cargar desde un sript
 source ~/Documents/acamica/testMysql/db.sql



 drop table nombreTabla

 drop database nombreBase

// Cambiar clave
 ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'test'


// crar usuario
CREATE USER 'foo'@'%' IDENTIFIED WITH mysql_native_password BY 'bar';
