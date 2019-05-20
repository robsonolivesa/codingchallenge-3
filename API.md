## Como subir o servidor?

Clonar o repositório: 
```javascript
https://github.com/claudiokoji/testimonials-server
```

Criar uma variável de ambiente MASTER_KEY com uma string aleatória como valor.

Instalar as dependências:
```javascript
npm i
```

Preencher os dados dos usuários no arquivo create-users.js.

Rodar o script para criar usuários:
```javascript
node create-users
```

Subir o servidor:
```javascript
node index
```

Para fazer as chamadas autenticadas, basta passar o token no header Authorization:
```javascript
"Authorization": "Bearer token"
```

## POST /auth/new

Utilize este método para obter os tokens de acesso utilizando e-mail e senha fornecidos

Payload: 
```javascript
{
	"email": string,
	"password": string
}
```
Response:
```javascript
{
	"access_token": string,
	"refresh_token": string
}
```

## POST /auth/refresh

Utilize este método para renovar um token de acesso expirado

Payload: 
```javascript
{
	"refresh_token": string
}
```

Response:
```javascript
{
	"access_token": string
}
```

## GET /people

Utilize este método para visualizar a lista de pessoas cadastradas na plataforma

Query Parameters: 
- page: Página que deve retornar (default: 1)
- pageSize: Quantidade de leilões que deve ser retornado (default: 5, max: 10)
- name: Nome da pessoa para filtro

Response: 
```javascript
{
	"hasNext" : boolean,
	"people": [
		{
			"_id": string,
			"name": string,
			"photo": string (Image URI)
		}
	]
}
```

## GET /people/me

Utilize este método para visualizar os dados do seu usuário na plataforma

Response: 
```javascript
{
        "_id": string,
        "name": string,
        "photo": string (Image URI)
}
```

## PUT /people/me

Utilize este método para alterar os dados do seu usuário na plataforma

Payload: 
```javascript
{
        "name": string,
        "photo": string (Image URI)
}
```

Response: 
```javascript
{
        "_id": string,
        "name": string,
        "photo": string (Image URI)
}
```

## GET /people/:id/testimonials

Utilize este método para visualizar os depoimentos de uma pessoa (identificada pelo :id)

Query Parameters: 
- page: Página que deve retornar (default: 1)
- pageSize: Quantidade de leilões que deve ser retornado (default: 5, max: 10)

Response: 
```javascript
{
	"hasNext" : boolean,
	"testimonials": [
		{
			"_id": string,
			"status": (1 = pending, 2 = approved),
			"text": string
		}
	]
}
```

## POST /people/:id/testimonials

Utilize este método para criar um depoimentos para uma pessoa (identificada pelo :id)

Payload: 
```javascript
{
    "status": (1 = pending, 2 = approved),
    "text": string
}
```

Response: 
```javascript
{
    "_id": string,
    "status": (1 = pending, 2 = approved),
    "text": string
}
```

## PUT /testimonials/:testimonial_id

Utilize este método para alterar um depoimento (identificado pelo testimonial_id). Você só pode alterar depoimentos feitos para o seu usuário.

Payload: 
```javascript
{
    "status": (1 = pending, 2 = approved)
}
```

Response: 
```javascript
{
    "_id": string,
    "status": (1 = pending, 2 = approved),
    "text": string
}
```

## DELETE /testimonials/:testimonial_id

Utilize este método para excluir um depoimento (identificado pelo testimonial_id). Você só pode excluir depoimentos feitos para o seu usuário.

Response: 
```javascript
204 No Content
```
