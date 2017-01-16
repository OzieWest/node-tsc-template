## Node Typescript Template

### Tech Stack Included

- **Typescript** instead of JavaScript | https://www.typescriptlang.org
- **ts-node** as a runner | https://github.com/TypeStrong/ts-node
- **express** as web framework https://expressjs.com
- **log4js** as logger | https://github.com/nomiddlename/log4js-node
- **optimist** as a config manager | https://github.com/substack/node-optimist
- **Docker** | https://www.docker.com
- **docker-compose** | https://docs.docker.com/compose
- **Elastic Beanstalk** as a host | https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/Welcome.html
- **MochaJs** as test runner | https://mochajs.org
- **SinonJs** as test framework | http://sinonjs.org

### Start

```shell
cd app
npm i
npm start #or npm run watch
```

### Tests

```shell
cd app
npm test
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
npm run deploy
```
