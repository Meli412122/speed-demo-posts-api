const express = require("express");
const postsRoutes = require("./routes/posts.routes");
const usersRoutes = require("./routes/users.routes");

const app = express();
app.use(express.json());

app.use("/posts", postsRoutes);
app.use("/users", usersRoutes);

app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});

module.exports = app;
