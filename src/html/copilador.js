const fs = require('fs');
const path = require('path');

// Caminho para o arquivo HTML
const caminhoArquivoHTML = 'src/html/corpoEmail.html';

// Ler o arquivo HTML de forma síncrona
const corpoDoEmail = fs.readFileSync(caminhoArquivoHTML, 'utf8');

console.log(corpoDoEmail)

// Exportar o conteúdo do corpo do e-mail
module.exports = corpoDoEmail;
