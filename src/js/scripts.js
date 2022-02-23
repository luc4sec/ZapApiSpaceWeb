//const host = 'http://localhost:3000'
const host = 'https://api.spacewebso.com.br:3000'
function addClient() {
    (async () => {
        const response = await fetch(
            `${host}/tasks`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    client: document.getElementById("client").value,
                    number: document.getElementById("number").value
                })
            },
        );
        const content = await response.json();
        document.getElementById('send-btn').disabled = false
        if (content.serverStatus == 2) {
            window.location.reload();
        } else {
            var saida = JSON.stringify(content)
            document.getElementById('status').innerHTML = saida
        }
    })();
}

function sendMessage() {
    (async () => {
        const response = await fetch(
            `${host}/sendMessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    client: document.getElementById("client").value,
                    number: document.getElementById("number").value,
                    message: document.getElementById("message").value
                })
            },
        );
        const content = await response.json();
        document.getElementById('send-btn').disabled = false
        if (content.serverStatus == 2) {
            window.location.reload();
        } else {
            var saida = JSON.stringify(content)
            document.getElementById('status').innerHTML = saida
        }
    })();
}

function schMessage() {
    (async () => {
        const response = await fetch(
            `${host}/schMessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    client: document.getElementById("client").value,
                    number: document.getElementById("number").value,
                    message: document.getElementById("message").value,
                    date: document.getElementById("date").value,
                    time: document.getElementById("time").value
                })
            },
        );
        const content = await response.json();
        document.getElementById('send-btn').disabled = false
        if (content.serverStatus == 2) {
            window.location.reload();
        } else {
            var saida = JSON.stringify(content)
            document.getElementById('status').innerHTML = saida
        }
    })();
}

async function listClients() {
    const response = await axios.get(`${host}/tasks`)
    const clients = response.data
    const lista = document.getElementById('list-clients')

    clients.forEach(client => {
        idd = client.id
        const item = document.createElement('tr')
        item.innerHTML = `<th>${client.client}</th><th>${client.number}</th><th>${idd}</th><th>${client.status}</th>`
        lista.appendChild(item)
    })
}

async function listSCHMessage() {
    const response = await axios.get(`${host}/schMessage`)
    const clients = response.data
    const lista = document.getElementById('list-clients')

    clients.forEach(client => {
        var date = moment(client.date).format('DD/MM/YYYY HH:mm')
        console.log(client.date)
        const item = document.createElement('tr')
        item.innerHTML = `<th>${client.client}</th><th>${client.number}</th><th>${date}</th>`
        lista.appendChild(item)
    })
}

async function deleteClient() {
    console.log(document.getElementById('number').value)
    const response = await axios.delete(`${host}/tasks/number/${document.getElementById("number").value}`)
    window.location.reload();
}
