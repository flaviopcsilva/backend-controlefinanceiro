const express = require("express")

const rotas = express()

rotas.get('/', (req, res) => {
    return res.json('Rota Funcionando!')
})

module.exports = rotas