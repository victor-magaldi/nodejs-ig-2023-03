# 📒 Controle de Academia

Este projeto tem como objetivo gerenciar idas em academia como se fosse gym pass.

---

## 📌 Requisitos Funcionais (RF)

- [x] Deve ser possível se cadastrar;
- [x] Deve ser possível se autenticar;
- [ ] Deve ser possível obter o perfil de um usuário logado;
- [ ] Deve ser possível obter o número de check-ins realizado pelo usuário logado;
- [ ] Deve ser possível o usuário obter seu histórico de check-ins;
- [ ] Deve ser possível o usuário buscar academias próximas;
- [ ] Deve ser possível o usuário buscar academias pelo nome;
- [ ] Deve ser possível o usuário realizar check-in em uma academia;
- [ ] Deve ser possível validar o Check-in de um usuário;
- [ ] Deve ser possível Cadastrar uma Academia;


---

## 📏 Regras de Negócio (RN)

- [x] O usuário não pode se cadastrar com e-mail duplicado
- [ ] O usuário não pode fazer 2 check-ins no mesmo dia
- [ ] O usuário não pode fazer Check-in se não estiver no mínimo de 100 metros
- [ ] O Check-in só pode ser validado até 20 minutos depois de criado
- [ ] O Check-in só pode ser validado por Administradores
- [ ] Academias só podem ser cadastradas por Administradores

---

## ⚙️ Requisitos Não Funcionais (RNF)

- [x] A senha do usuário precisa ser Criptografada
- [x] Os dados da aplicação vão usar os banco de dados Postgres
- [ ] Lista de dados devem ter 20 itens por página
- [ ] O usuário deve ser identificado por JWT
