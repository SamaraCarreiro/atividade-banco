const express = require("express");
const axios = require("axios");
const app = express();

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

app.get("/roupas", async (req, res) => {
  try {
    const consulta = await axios.get("http://localhost:3000/roupas");
    return res.json(consulta.data);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao consultar roupas" });
  }
});

app.listen(3001, () => {
  console.log("Servidor rodando em http://localhost:3001");
});
