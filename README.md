# PRACTICA-BACKEND-auxi

Proyecto backend desarrollado con NestJS.

## Requisitos

Antes de iniciar el proyecto debes tener instalado:

- Node.js
- npm
- PostgreSQL
- Nest CLI (opcional)

## Instalación

Clonar el repositorio:

```bash
git clone https://github.com/Kathy-Ramirez/PRACTICA-BACKEND-auxi.git
```

Entrar a la carpeta:

```bash
cd PRACTICA-BACKEND-auxi
```

Instalar dependencias:

```bash
npm install
```

## Configuración de la base de datos

crea una base de datos en postgreSql:

```bash
CREATE DATABASE tienda_online;
```

## Configuración de conexión PostgreSQL

La configuración de conexión le encuentras en:

```bash
src/app.module.ts
```
modifica segun tu usuario y possword

```bash
TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5432, // u otro segun tus configuariones
  username: 'postgres', //usuarrio de gestor
  password: '123456', //tu contraseña
  database: 'tienda_online', //nombre de la bd
  autoLoadEntities: true,
  synchronize: true,
})
```

## Ejecutar el proyecto

Modo desarrollo:

```bash
npm run start:dev
```

Modo producción:

```bash
npm run start:prod
```

## Ejecucion del proyecto(scalar)

Para hacer correr el proyecto scalar, ejecutar el siguiente codigo en cualquier navegador:

```bash
http://localhost:3000/scalar
```


## Tecnologías usadas

- NestJS
- TypeScript
- PostgreSQL
- TypeORM
- Docker