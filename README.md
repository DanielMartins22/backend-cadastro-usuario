# Conceitos Node

Aplicação de exemplo em Node.js com Express, Prisma e MongoDB para demonstrar conceitos básicos de API REST, CRUD e integração com banco de dados.

## Sobre o projeto

Este projeto foi desenvolvido com foco em aprendizagem prática de:

- Node.js
- Express
- Prisma ORM
- MongoDB
- APIs REST
- Gerenciamento de variáveis de ambiente

## Funcionalidades

- Cadastro de usuários
- Listagem de usuários
- Atualização de usuários
- Exclusão de usuários
- Filtro por gênero na listagem

## Tecnologias utilizadas

- Node.js
- Express
- Prisma
- MongoDB
- CORS
- dotenv

## Pré-requisitos

Antes de iniciar, certifique-se de ter instalado:

- Node.js 18+
- npm ou pnpm
- Um banco MongoDB acessível

## Instalação

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   cd Conceitos Node
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Crie um arquivo .env na raiz do projeto com a variável abaixo:
   ```env
   DATABASE_URL="sua-string-de-conexao-do-mongodb"
   ```

4. Gere o cliente do Prisma:
   ```bash
   npx prisma generate
   ```

5. Inicie o servidor em modo de desenvolvimento:
   ```bash
   npm run dev
   ```

## Endpoints da API

### Usuários

- GET /usuarios
  - Lista todos os usuários
  - Aceita filtro opcional por query param: `?gender=male`

- POST /usuarios
  - Cria um novo usuário

- PUT /usuarios/:id
  - Atualiza um usuário existente

- DELETE /usuarios/:id
  - Remove um usuário pelo ID

## Exemplo de payload para criação

```json
{
  "name": "Maria",
  "email": "maria@example.com",
  "age": 25,
  "gender": "female"
}
```

## Scripts

- `npm run dev` - inicia o servidor com observação automática

## Estrutura do projeto

- `server.js` - ponto de entrada da aplicação
- `prisma/schema.prisma` - definição do modelo do banco
- `generated/prisma` - cliente Prisma gerado automaticamente

## Licença

Este projeto é destinado a fins educacionais e de estudo.
