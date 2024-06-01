const nodemailer = require('nodemailer')

const knex = require('knex')({
    client: 'pg',
    connection: {
        host: process.env.HOST_DB,
        port: process.env.PORT_DB,
        user: process.env.USER_DB,
        password: process.env.PASSWORD_DB,
        database: process.env.DATABASE_DB
    }
});


const db = knex;

// Teste da conexão
db.raw('SELECT 1+1 AS result')
    .then(() => {
        console.log('Conectado ao banco de dados PostgreSQL utilizando Knex');
    })
    .catch((err) => {
        console.error('Erro ao conectar ao banco de dados:', err);
    });



const transporte = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_SENHA
    }
});

module.exports = {
    knex,
    transporte
}