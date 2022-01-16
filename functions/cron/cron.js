const schedule = require('node-schedule')
const functions = require('../functions')

const _session = process.argv[2]
const _sessionkey = process.argv[3]
const _number = process.argv[4]
const _name = process.argv[5]

_textoDois = 'Teste de envio em 1min'
_textTrinta = 'Teste de envio em 5min'
_textoSessenta = 'Teste de envio em 10min'


/*ano = 2022
mes = 0
dia = 12
hora = 20
min = 06
sec = 0
const someDate = new Date(ano, mes, dia, hora, min, sec)
const doisD = new Date(Date.now() + 172800)
const trintaD = new Date(Date.now()+)
console.log(now)*/


function agendarData() {
    const job = schedule.scheduleJob(someDate, function () {
        console.log(`Agora são ${hora}:${min} na dada ${dia}/${mes}/${ano}`);
    })
}

function doisDias() {
    schedule.scheduleJob('m-job2', '0 0/1 * 1/1 * *', () => {
        console.log(`Enviando MSG2 para ${_number}, ${_name} - ${horaAgora}`)
        functions.enviarTexto(_session, _sessionkey, _number, _textoDois)
        schedule.cancelJob('m-job2')
    })
}

function trintaDias() {
    schedule.scheduleJob('m-job30', '0 0/5 * 1/1 * *', () => {
        console.log(`Enviando MSG30 para ${_number}, ${_name} `, horaAgora)
        functions.enviarTexto(_session, _sessionkey, _number, _textTrinta)
        schedule.cancelJob('m-job30')
    })
}

function sessentaDias() {
    schedule.scheduleJob('m-job60', '0 0/10 * 1/1 * *', () => {
        console.log(`Enviando MSG60 para ${_number}, ${_name} `, horaAgora)
        functions.enviarTexto(_session, _sessionkey, _number, _textoSessenta)
        schedule.cancelJob('m-job60')
    })
}

function teste() {
    const horaAgora = new Date().toString();
    console.log(`Script CRON iniciado para ${_name} | ${_number} - `, horaAgora);

        schedule.scheduleJob('m-job2', '*/5 * * * *', () => {
            console.log(`Enviando MSG2 para ${_number}, ${_name} - ${horaAgora}`)
            functions.enviarTexto(_session, _sessionkey, _number, _textoDois)
            schedule.cancelJob('m-job2')
        }),
        schedule.scheduleJob('m-job30', '*/10 * * * *', () => {
            console.log(`Enviando MSG30 para ${_number}, ${_name} `, horaAgora)
            functions.enviarTexto(_session, _sessionkey, _number, _textTrinta)
            schedule.cancelJob('m-job30')
        }),
        schedule.scheduleJob('m-job60', '*/15 * * * *', () => {
            console.log(`Enviando MSG60 para ${_number}, ${_name} `, horaAgora)
            functions.enviarTexto(_session, _sessionkey, _number, _textoSessenta)
            schedule.cancelJob('m-job60')
        });
    const horaFinal = new Date().toString()
    console.log(horaFinal)
}
teste()




//console.log(`Script CRON iniciado para ${_name} | ${_number} - `, horaAgora)
