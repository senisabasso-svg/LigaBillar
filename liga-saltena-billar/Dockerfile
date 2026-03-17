# Usar imagen base de Node 20 (Vite 8 requiere Node 20.19+ o 22.12+)
FROM node:20-alpine

# Establecer directorio de trabajo
WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm ci --only=production=false

# Copiar el resto de los archivos
COPY . .

# Construir la aplicación
RUN npm run build

# Exponer el puerto (Render usa la variable PORT)
EXPOSE ${PORT:-3000}

# Comando para iniciar el servidor
CMD ["npm", "start"]
