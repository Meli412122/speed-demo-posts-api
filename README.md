# speed-demo-posts-api

API REST mínima (Node + Express) de **posts** y **usuarios**, hecha para probar
"Probar endpoint" de las ejecuciones QA de Speed.

Implementa los mismos endpoints que [JSONPlaceholder](https://jsonplaceholder.typicode.com),
así que no hace falta desplegarla: en Speed, la **Conexión de QA** de la API apunta a
JSONPlaceholder, que ya está pública y responde igual.

## Endpoints

Sin base path (las rutas van en la raíz).

| Método | Path | Params | Respuesta |
|---|---|---|---|
| GET | `/posts` | query `userId` (opcional) | 200, array de posts |
| GET | `/posts/:id` | path `id` | 200 post / 404 |
| POST | `/posts` | body `{ title, body, userId }` | 201, post creado |
| PUT | `/posts/:id` | path `id`, body `{ title, body, userId }` | 200 post / 404 |
| DELETE | `/posts/:id` | path `id` | 200 `{}` |
| GET | `/users` | — | 200, array de usuarios |
| GET | `/users/:id` | path `id` | 200 usuario / 404 |
| GET | `/users/:id/posts` | path `id` | 200, array de posts |

Post: `{ id, userId, title, body }`. Usuario: `{ id, name, username, email }`.

## Probar desde Speed

1. Importa este repo como API del sistema (info técnica).
2. En el detalle de la API → **Conexión de QA** → Configurar:
   - URL: `https://jsonplaceholder.typicode.com`
   - Autenticación: ninguna
3. En la ejecución QA, "Probar endpoint" en cada paso.

Nota: en JSONPlaceholder las escrituras (POST/PUT/DELETE) responden bien pero no se guardan.
En JSONPlaceholder los ids de posts van de 1 a 100 y los de usuarios de 1 a 10.

## Correr local

```bash
npm install
npm start   # http://localhost:3000
```
