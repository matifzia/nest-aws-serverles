<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>
## Description

Nest.js server with AWS and serverles and used cloude Postgres with Neone 

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Before Deployment

### Install aws cli globally
```bash
$ curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
$ unzip awscliv2.zip
$ sudo ./aws/install
$ aws -v 
```

### Configure AWS CLI
```bash
$ aws configure
```
Above command will ask for AWS credentials and global settings so update accordingly

### Install serverless globally
```bash
$ npm install -g serverless@3.24
```



## Deploy Serverless

```bash
$ npm run build
$ npx serverless offline Or sls offline \#for Offline serverless testing
$ npx serverless deploy Or sls deploy \#for Deploy serverless on Aws
```


## Stay in touch

- Author - [matifzia@yahoo.com](matifzia@yhaoo.com)
