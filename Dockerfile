FROM node:18-alpine
WORKDIR /
COPY . .
ARG PORT=8080
ENV PORT=${PORT}
RUN npm i
EXPOSE ${PORT}
CMD node app.js