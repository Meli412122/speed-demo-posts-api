const { Router } = require("express");
const users = require("../data/users");
const posts = require("../data/posts");

const router = Router();

/**
 * GET /users — lista los usuarios.
 * 200 con el array.
 */
router.get("/", (req, res) => {
  res.status(200).json(users);
});

/**
 * GET /users/:id — detalle de un usuario.
 * 200 con el usuario, 404 si no existe.
 */
router.get("/:id", (req, res) => {
  const user = users.find((u) => u.id === Number(req.params.id));
  if (!user) return res.status(404).json({});
  res.status(200).json(user);
});

/**
 * GET /users/:id/posts — posts de un usuario.
 * 200 con el array (vacío si no tiene).
 */
router.get("/:id/posts", (req, res) => {
  res.status(200).json(posts.filter((p) => p.userId === Number(req.params.id)));
});

module.exports = router;
