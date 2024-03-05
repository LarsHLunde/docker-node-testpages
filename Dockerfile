FROM debian:12-slim
RUN mkdir /application
RUN mkdir /script
RUN apt-get update
RUN apt-get install -y nodejs
ADD init.sh /script/
ADD app.js /application/
EXPOSE 8080/tcp
ENTRYPOINT ["/bin/bash", "/script/init.sh"]
