SelfCare API - Documentação

# SelfCare API

API simples criada para listar produtos e gerenciar um carrinho de compras.

- 🌐 **Base URL:** `https://simple-selfcare-api.onrender.com/`
- 🛠️ **Tecnologia:** Node.js + Express

---

## 📦 Endpoints da API

### ✅ `GET /`

**Descrição:** Retorna a lista de todos os produtos disponíveis.

**Exemplo de requisição:**
```
curl https://simple-selfcare-api.onrender.com/
```

**Resposta:**
```json
[
  {
    "id": 1,
    "nome": "Creme Hidratante",
    "preco": 35.90
  },
  {
    "id": 2,
    "nome": "Óleo Corporal",
    "preco": 42.50
  }
]
```

### 🛒 `GET /carrinho`

**Descrição:** Retorna todos os produtos que foram adicionados ao carrinho.

**Exemplo de requisição:**
```
curl https://simple-selfcare-api.onrender.com/carrinho
```

**Resposta:**
```json
[
  {
    "id": 1,
    "nome": "Creme Hidratante",
    "preco": 35.90
  }
]
```

### ➕ `POST /carrinho/:id`

**Descrição:** Adiciona um produto ao carrinho com base no ID.

**Parâmetro de rota:**
- `id` → ID do produto a ser adicionado

**Exemplo de requisição:**
```
curl -X POST https://simple-selfcare-api.onrender.com/carrinho/1
```

**Resposta (produto adicionado com sucesso):**
```json
{
  "id": 1,
  "nome": "Creme Hidratante",
  "preco": 35.90
}
```

**Resposta (produto já adicionado):**
```json
{
  "mensagem": "produto já adicionado"
}
```

### ❌ `DELETE /carrinho/:id`

**Descrição:** Remove um produto do carrinho com base no ID.

**Parâmetro de rota:**
- `id` → ID do produto a ser removido

**Exemplo de requisição:**
```
curl -X DELETE https://simple-selfcare-api.onrender.com/carrinho/1
```

**Resposta:**
```json
[]
```

## 💬 Observações

- A API **não possui banco de dados** — todos os dados estão sendo manipulados em arquivos locais.


