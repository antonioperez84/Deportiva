create table jugadores(
    id int PRIMARY KEY AUTO_INCREMENT not null,
    nombre VARCHAR(255) not null,
    edad INT  not null,
    posicion VARCHAR(255) not null,
    foto VARCHAR(255)
);

create table resultados(
    id int primary key AUTO_INCREMENT not null,
    resultado_azul int not NULL,
    resultado_blanco int not NULL,
    fecha DATE
);

create table usuarios(
    id int primary key AUTO_INCREMENT not null,
    nombre VARCHAR(255) not null,
    apellidos varchar(255) not null,
    correo VARCHAR(255) not null,
    usuario VARCHAR(255) not NULL,
    password INT not null
);

insert into jugadores values(1,'Antonio Pérez',39,'Medio','');
insert into jugadores values(2,'Angel Ramírez',38,'Delantero','');
insert into jugadores values(3,'Angel Muñoz',44,'Medio','');
insert into jugadores values(4,'Óscar Morales',45,'Medio','');
insert into jugadores (nombre, edad, posicion, foto) values('Mario coca',23,'Medio','');


insert into resultados (resultado_azul, resultado_blanco, fecha) values (3,4,'2026-01-01');

insert into usuarios(nombre, apellidos, correo, usuario, password) values('antonio','perez','a@a.com','antonio',1111)
