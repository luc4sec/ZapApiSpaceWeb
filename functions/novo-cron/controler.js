const shelljs = require('shelljs')

const _session = process.argv[2]
const _sessionkey = process.argv[3]
const _name = process.argv[4]
const _number = process.argv[5]
const _text = process.argv[6]
const _action = process.argv[7]


if (_action == 'start') {
    _start('','',_name,'','')
}
if (_action == 'stop') {
    _stop(_name)
}
if (_action == 'delete') {
    _delete(_name)
}

function _start(_session, _sessionkey, _name, _number, _text){
    shelljs.exec(`pm2 start --name ${_name} croner.js`, _session, _sessionkey, _number, _text);
}
function _stop(_name){
    shelljs.exec(`pm2 stop --name ${_name} croner.js`);
}
function _delete(_name){
    shelljs.exec(`pm2 delete --name ${_name} croner.js`);
}
