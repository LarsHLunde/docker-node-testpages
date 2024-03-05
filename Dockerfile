FROM debian:12-slim
RUN mkdir /application
RUN mkdir /script
RUN touch /script/firstrun
RUN apt-get update
RUN apt-get install -y nodejs npm
ADD init.sh /script/
ADD app.js /application/
WORKDIR "/application"
RUN npm install express
RUN npm install express-basic-auth
EXPOSE 8080/tcp
ENTRYPOINT ["/bin/bash", "/script/init.sh"]
