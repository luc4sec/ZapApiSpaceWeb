const express = require('express')
const axios = require('axios')
const cors = require('cors')
const app = express()
app.use(cors())


app.use(express.json()) // <==== parse request body as JSON

app.listen(8080)

app.get('/AutoZap/functions/novo-cron2/index.html', async (req, res) => {
    const {
        data
    } = await axios('http://localhost/')
    console.log(data)

})