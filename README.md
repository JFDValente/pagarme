# Desafio Front-end

## Sumário

- [Sobre o desafio](./CHALLENGE.md)
- [Requisitos](#requisitos)
- [Instalação](#instalação)
- [Comandos](#comandos)

## Requisitos

- Node v12.18.2 +
- Yarn v1.22.0 +

## Instalação

Execute o comando `yarn`.

## Rodando a aplicação

1. Renomeie o arquivo `db.example.json` para `db.json`;
1. Execute `yarn server` para executar a API;
1. Execute `yarn start` para rodar a aplicação React.

## Observações

1 - Para não atrasar mais a entrega os testes não foram implementados;
2 - O endereço do servidor é setado em: src/helpers/request.js na variável server;
3 - O método escolhido para realizar a sincronização das transações criadas offline foi apenas realizando o envio das mesmas durante a criação da pŕoxima transação;
