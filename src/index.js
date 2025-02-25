const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.json({ message: "Servidor rodando com sucesso!" });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
