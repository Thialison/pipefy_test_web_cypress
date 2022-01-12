FROM cypress/browsers:latest

RUN mkdir /app
WORKDIR /app
COPY . /app

RUN npm install
