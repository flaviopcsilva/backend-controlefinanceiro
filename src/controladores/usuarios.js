const { email, transporte, knex } = require("../conexao/conexao")
const corpoDoEmail = require("../html/copilador")
const Handlebars = require('handlebars')

const testeEmail = async (req, res) => {

    const { cliente, titulo, assunto } = req.body

    const variaveisEmail = {
        cliente,
        titulo
    }

    try {

        const addusuario = await knex('usuarios').insert({
            cliente
        })

        const novoCliente = await knex('usuarios').where('id', '=', knex.raw('lastval()')).first();


        const template = Handlebars.compile(corpoDoEmail)

        const corpoDoEmailRenderizado = template(variaveisEmail);

        const enviarEmail = await transporte.sendMail({
            from: process.env.EMAIL_USER,
            to: 'flaviopcfake@gmail.com',
            subject: assunto,
            html: corpoDoEmailRenderizado,
            //bcc: 'flaviopcfake@gmail.com',
            //attachments: attachments
        })
        console.log(novoCliente);
        return res.json('Email enviado com sucesso.')
    } catch (error) {
        return res.status(500).json({ Mensagem: `${error}` })
    }



}

module.exports = {
    testeEmail
}