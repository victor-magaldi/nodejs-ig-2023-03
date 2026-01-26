# 🏋️ Gym API

API para gerenciamento de academias, usuários e check-ins. Este projeto foi desenvolvido com foco em boas práticas de arquitetura, escalabilidade e produtividade no desenvolvimento back-end.

---

## 🚀 Tecnologias

* **Node.js**
* **Fastify**
* **TypeScript**
* **Prisma ORM**
* **PostgreSQL** (via Docker)
* **Docker & Docker Compose**

---

## 📦 Pré-requisitos

Antes de começar, você vai precisar ter instalado na sua máquina:

* Node.js
* Docker
* Docker Compose
* npm ou yarn

---

## ⚙️ Instalação

### 1. Instale as dependências

```bash
npm install
```

### 2. Suba o banco de dados com Docker

```bash
docker-compose up -d
```

---

## 🧪 Ambiente de Desenvolvimento

### Executar a aplicação em modo dev

```bash
npm run dev
```

A API ficará disponível em:

```
http://localhost:3333
```

---

## 🏗️ Build e Produção

### Gerar build do projeto

```bash
npm run build
```

### Executar a aplicação em produção

```bash
npm run start
```

---

## 🗄️ Prisma ORM

### Rodar migrations

#### Ambiente de desenvolvimento

```bash
npx prisma migrate dev
```

#### Ambiente de produção

```bash
npx prisma migrate deploy
```

### Gerar o Prisma Client

```bash
npx prisma generate
```

### Visualizar dados com Prisma Studio

```bash
npx prisma studio
```

Acesse no navegador:

```
http://localhost:5555
```

---

## 🧠 Arquitetura

O projeto segue uma separação clara de responsabilidades:

* **Controllers** → Camada de entrada (HTTP)
* **Use Cases** → Regras de negócio
* **Repositories** → Acesso a dados
* **Factories** → Criação e injeção de dependências

Esse modelo facilita testes, manutenção e evolução do sistema.

---

## 🧑‍💻 Scripts disponíveis

```bash
npm run dev       # Executa em modo desenvolvimento
npm run build     # Gera build da aplicação
npm run start     # Executa build em produção
```

---
