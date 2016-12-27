## Node-tsc-template

### Tech Stack Included

- **Typescript** instead of JavaScript | https://www.typescriptlang.org
- **ts-node** as a runner | https://github.com/TypeStrong/ts-node
- **Strongloop** as web framework https://strongloop.com
- **log4js** as logger | https://github.com/nomiddlename/log4js-node
- **Optimist** as a config manager | https://github.com/substack/node-optimist
- **Docker** | https://www.docker.com
- **docker-compose** | https://docs.docker.com/compose
- **Elastic Beanstalk** as a host | https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/Welcome.html

### Start

```shell
cd app
npm i
npm start #or npm run watch
```

### Docker

```shell
cd app
docker build -t my-app .
docker run --rm --name=my-app -p 3000:3000 -it my-app
```

### Docker compose

```shell
docker-compose up --build
```

### Elastic Beanstalk deploy

- create IAM user for deploy https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html
- add permission AWSElasticBeanstalkFullAccess to the user
- install AWS EB CLI  https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3-install.html
- create EB CLI profile https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3-configuration.html
    - it should be called **app-deploy-profile** or different, but in this case need to be renamed the same field in .elasticbeanstalk/config.yml


```shell
cd app
./deploy.sh
```
