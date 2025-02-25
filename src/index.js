const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

// Habilitar o parsing de JSON
app.use(express.json());

// Rota principal
app.get("/", (req, res) => {
  res.send("<h1>Servidor rodando com sucesso!</h1>");
});

// Rota API
app.get("/api", (req, res) => {
  res.json({ message: "Servidor rodando com sucesso!" });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
