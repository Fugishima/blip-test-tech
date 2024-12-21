# Teste Técnico Blip

## Apresentação

Porque usei o Nest?
Bem, o Nest é um framework com foco em criação de API's e microservices, utilizando o Decorator como design pattern focado na estrutura e o MVC como o design pattern focado na arquitetura, com isso  a implementação do padrão RESTful é ágil e natural. Além de sua arquitetura modular corroborar com o SOLID.
O Nest também já me entrega um ferramentário interessante, o jest e o módulo de teste para testes unitários, hot reload para o desevolvimento, o módulo HttpException para lidar com a exceções de forma "out of the box", etc.

Porque usei Docker?
Apesar da principal vantagem de ter um ambiente controlado, com todas as dependências encapsuladas, facilitando a portabilidade e gerenciamento não ser um grande ponto nesse caso, o Docker facilita a implatação e isso foi um grande selling point para mim.

Porque não usei ferramentas de lint e formatação ?
Eu tenho uma configuração global na minha máquina e usar essas ferramentas a nível de projeto seria redundante.

## Instalação

```bash
$ npm install
```

## Instalação Docker

```bash
$ docker compose up -d
```

## Iniciar docker

```bash
$ docker exec -it {container_id} bash
```

## Iniciar aplicação

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
npm run start:prod
```

## Teste

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
## Links

[Blip Chat](https://tiago-s-fugishima-3cbb2.chat.blip.ai/?appKey=dGVzdGVwcmF0aWNvOTozOGM0YzJiNS04N2I3LTQ4MWMtYjQyZC0yMWUzMTQ4M2U0ZmI=&_gl=1*abggf9*_ga*OTAxMTczNTEzLjE3MzQ2MzEyNzM.*_ga_8GVWK8YMGL*MTczNDc2NzU3OS4yMS4xLjE3MzQ3Njc1OTUuNDQuMC4yMjI0NzU4MjQ.*_gcl_au*MzA0NDA2NDIwLjE3MzQ2NjMzOTE.)

[API](https://teste-tech-blip-nodeapp-5814777845.us-central1.run.app/get-takenet-repos)
