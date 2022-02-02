const cronJob = require('cron').CronJob
const functions = require('../functions')

// Pegar requisições POST html
// Controle do PM2
// Mandar função de envio


const _session = process.argv[2]
const _sessionkey = process.argv[3]
const _number = process.argv[4]
const _text = process.argv[5]


const job = new cronJob('*/5 * * * * *', () => {
    console.log(_session, _sessionkey, _number, _text)
    functions.enviarTexto(_session, _sessionkey, _number, _text)
},true, 'America/Sao_Paulo');

