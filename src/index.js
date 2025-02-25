const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 8080;

// Configurar o express para servir arquivos estáticos
app.use(express.static(path.join(__dirname, "../")));

// Rota principal que serve o arquivo HTML
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../api-docs.html"));
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
