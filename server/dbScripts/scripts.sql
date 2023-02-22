create table jugadores(
    id int PRIMARY KEY AUTO_INCREMENT not null,
    nombre VARCHAR(255) not null,
    edad INT  not null,
    posicion VARCHAR(255) not null,
    foto VARCHAR(255)
)

create table resultados(
    id int primary key AUTO_INCREMENT not null,
    resultado_azul int not NULL
    resultado_blanco int not NULL
    fecha DATE
)

create table usuarios(
    id int primary key AUTO_INCREMENT not null,
    nombre VARCHAR(255) not null
    apellidos varchar(255) not null
    correo VARCHAR(255) not null
    usuario VARCHAR(255) not NULL
    password INT not null
)