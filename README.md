# docker-node-testpages
A small project written in NodeJS for docker to train my team in HTTP return codes

## How to install
```
git clone https://github.com/LarsHLunde/docker-node-testpages.git
cd docker-node-testpages
docker build -t docker-node-testpages .
docker run \
  -p 8080:8080 \
  --name testpages \
  --restart unless-stopped \
  testpages
docker start testpages
```
