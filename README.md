### Node-tsc-template

```shell
cd app
npm i
npm start #or
npm run watch
```

#### Docker
```shell
cd app
docker build -t my-app .
docker run --name=my-app -p 3000:3000 -it my-app
```

#### Docker compose
```shell
docker-compose up
```

#### Eb deploy
```shell
cd app
./deploy.sh
```
