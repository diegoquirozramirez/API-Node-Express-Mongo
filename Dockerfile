FROM node:12.22.6-alpine

# create destination directory
USER root
RUN mkdir -p /dist
WORKDIR /dist

# copy and archivos
COPY . .

RUN rm -r package-lock.json

# instalar las dependencias
RUN npm install --save

RUN echo ${PWD}
RUN ls

#expone el puerto
EXPOSE 3000

# comando para levantar microservicio
CMD ["npm", "run", "start"]