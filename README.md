# Ukenzie

Neste projeto foi desenvolvido um serviço back-end responsável por simular um sistema de cadastro e listagem de usuários e cursos.

Deploy do API: https://ukenzie.herokuapp.com/

## Endpoints do serviço:

POST /users - Criação de usuário.

GET /users - Lista todos os usuários.

POST /users/login - Retorna um token de acesso após verificar email e senha.

POST /courses - Cria um curso, necessário autenticação por token.

GET /courses - Lista os cursos criados, necessário autenticação por token.
