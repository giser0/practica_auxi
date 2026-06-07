# PRACTICA-BACKEND

Backend desarrollado con **NestJS** para la gestión de una tienda online.
Incluye configuración con PostgreSQL, TypeORM y documentación vía Scalar.

## 👤 Autor

**Sergio Wilder Huaylliri Nina**

---

## 📋 Requisitos

Antes de iniciar el proyecto asegúrate de tener instalado:

- Node.js (v18 o superior recomendado)
- npm
- PostgreSQL
- Nest CLI (opcional)
- Docker (opcional)

---

## 📦 Instalación

Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/tu-repositorio.git

Ingresa a la carpeta del proyecto:

cd PRACTICA-BACKEND

Instala las dependencias:

npm install
Configuración de la Base de Datos

Crea la base de datos en PostgreSQL:

CREATE DATABASE tienda_online;
Configuración de conexión a PostgreSQL

La configuración se encuentra en el archivo:

src/app.module.ts

Modifica los valores según tu entorno:

TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5432, // cambia si tu configuración es diferente
  username: 'postgres', // usuario de PostgreSQL
  password: '123456', // contraseña de PostgreSQL
  database: 'tienda_online',
  autoLoadEntities: true,
  synchronize: true,
})
Ejecución del Proyecto
Modo desarrollo
npm run start:dev

Documentación de la API (Scalar)

Para visualizar la documentación del proyecto, abre en tu navegador:

http://localhost:3000/scalar