const http = require('http')

module.exports = {
    enviarTexto(_session, _sessionkey, _number, _text) {

        const data = new TextEncoder().encode(
            JSON.stringify({
                session: _session,
                number: _number,
                text: _text
            })
        )

        const options = {
            hostname: '107.152.47.102',
            port: 3333,
            path: '/sendText',
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'sessionkey': _sessionkey,
                'apitoken': 'S3c_T0k3n'
            }
        }

        const req = http.request(options, res => {
            console.log(`statusCode: ${res.statusCode}`)

            //res.on('data', d => {
            //    process.stdout.write(d)
            //})
        })

        req.on('error', error => {
            console.error(error)
        })

        req.write(data)
        req.end()

    }

}