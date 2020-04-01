# Imagen base
FROM node:8

# Crear la carpeta 'app' y establer la carpeta de trabajo
RUN mkdir -p /app
RUN mkdir -p /app/src
WORKDIR /app

# Agregar '/app/node_modules/.bin' al $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Para que la prueba de NPM se ejecute solo una vez de forma no interactiva
ENV CI=true

COPY package.json /app
RUN npm install --silent

ADD ./src /app/src

CMD npm start