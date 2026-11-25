const { Router } = require("express");
const posts = require("../data/posts");

const router = Router();

/**
 * GET /posts — lista los posts.
 * Query opcional: userId (filtra por autor).
 * 200 con el array (vacío si no hay coincidencias).
 */
router.get("/", (req, res) => {
  const { userId } = req.query;
  const result = userId ? posts.filter((p) => p.userId === Number(userId)) : posts;
  res.status(200).json(result);
});

/**
 * GET /posts/:id — detalle de un post.
 * 200 con el post, 404 si no existe.
 */
router.get("/:id", (req, res) => {
  const post = posts.find((p) => p.id === Number(req.params.id));
  if (!post) return res.status(404).json({});
  res.status(200).json(post);
});

/**
 * POST /posts — crea un post.
 * Body: { title: string, body: string, userId: number }
 * 201 con el post creado (incluye el id asignado).
 */
router.post("/", (req, res) => {
  const { title, body, userId } = req.body ?? {};
  const post = { id: posts.length + 1, title, body, userId };
  posts.push(post);
  res.status(201).json(post);
});

/**
 * PUT /posts/:id — reemplaza un post existente.
 * Body: { title: string, body: string, userId: number }
 * 200 con el post actualizado, 404 si no existe.
 */
router.put("/:id", (req, res) => {
  const index = posts.findIndex((p) => p.id === Number(req.params.id));
  if (index === -1) return res.status(404).json({});
  const { title, body, userId } = req.body ?? {};
  posts[index] = { id: posts[index].id, title, body, userId };
  res.status(200).json(posts[index]);
});

/**
 * DELETE /posts/:id — borra un post.
 * 200 con un objeto vacío.
 */
router.delete("/:id", (req, res) => {
  const index = posts.findIndex((p) => p.id === Number(req.params.id));
  if (index !== -1) posts.splice(index, 1);
  res.status(200).json({});
});

module.exports = router;
