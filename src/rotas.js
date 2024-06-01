const express = require("express")
const { testeEmail } = require("./controladores/usuarios")

const rotas = express()

rotas.get('/', (req, res) => {
    return res.json('Rota Funcionando!')
})

rotas.post('/email', testeEmail)

module.exports = rotas