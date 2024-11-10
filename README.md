# PROJETO SUPGUARD

Este projeto é uma aplicação do CRUD de gerenciamento de usuários desenvolvido no ciclo 1, com uma arquitetura que segue os princípios de **Clean Code** e **SOLID** para facilitar a manutenção, escalabilidade e legibilidade do código. Esta aplicação foi construída no contexto de um CRUD básico do primeiro ciclo de desenvolvimento, adaptado para incluir uma comunicação eficaz entre o frontend, backend e banco de dados.

## Visão Geral do Projeto

O **SupGuard** é uma aplicação que possibilita o gerenciamento de dados de usuários de forma segura e eficiente. A comunicação entre as camadas da aplicação foi estruturada de maneira que o **frontend** (React), **backend** (Flask) e o **banco de dados** (PostgreSQL) possam interagir de forma eficaz e consistente, garantindo uma experiência integrada e fluida.

## Tecnologias Utilizadas

- **Frontend**: React.js (22.11.0)
- **Backend**: Flask (Python 3.12.6) com SQLAlchemy para ORM
- **Banco de Dados**: PostgreSQL 17.0

## Organização do Código

Para garantir a organização do código e facilitar a compreensão do projeto:

- Implementamos princípios de **Clean Code** para um código mais legível e intuitivo.
- Aplicamos princípios **SOLID** no backend, organizando as funcionalidades para que cada classe e função tenha uma responsabilidade clara e única.
- Estruturamos o projeto de forma modular, separando o backend e o frontend em pastas distintas para facilitar o desenvolvimento e a manutenção.

## Instruções Básicas

Para executar o projeto, siga as etapas abaixo:

1. Navegue até os diretórios das pastas `frontend` e `backend`.
2. Configure um ambiente virtual para garantir o funcionamento correto do código.
3. Preencha o arquivo `.env` com as variáveis necessárias para a conexão com o banco de dados e chaves secretas, como:

```bash
DATABASE_URL=postgresql://usuario:senha@localhost/supguard
SECRET_KEY=sua_chave_secreta
JWT_SECRET_KEY=sua_chave_secreta_jwt

