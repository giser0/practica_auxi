# ETAPA 1: Construcción (Build)
FROM node:20-alpine
WORKDIR /app

# Copiamos archivos de dependencias
COPY package*.json ./
RUN npm install

# Copiamos el resto del código y compilamos
COPY . .
RUN npm run build

# Exponemos el puerto de NestJS (por defecto 3000)
EXPOSE 3000

# Iniciamos la app
CMD ["node", "dist/main"]