const express = require("express");
const axios = require("axios");
const app = express();
const porta = 3001;

// Rota GET para todos os usuários
app.get("/usuarios", async (req, res) => {
  try {
    const consulta = await axios.get("http://localhost:3000/roupas");
    console.log("Consulta realizada");
    return res.json(consulta.data);
  } catch (error) {
    console.error("Erro na consulta:", error);
    return res.status(500).json({ error: "Erro ao consultar roupas" });
  }
});

// Rota GET para todas as roupas
app.get("/roupas", async (req, res) => {
  try {
    const consulta = await axios.get("http://localhost:3000/roupas");
    console.log("Consulta de roupas realizada");
    return res.json(consulta.data);
  } catch (error) {
    console.error("Erro na consulta:", error);
    return res.status(500).json({ error: "Erro ao consultar roupas" });
  }
});

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
});
