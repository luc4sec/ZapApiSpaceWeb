let url;
let host = '107.152.47.102'
let host_ssl = '107.152.47.102'
let port = '3333'
url = "http://107.152.47.102:3333" 
async function getSession(session) {
    const config = {
        headers: {
            apitoken: document.getElementById("apitoken").value,
            sessionkey: document.getElementById("sessionkey").value
        }
    }

    const data = {
        session: document.getElementById("session").value,
        wh_status: '', //document.getElementById("wh_status").value,
        wh_message: '', //document.getElementById("wh_message").value,
        wh_qrcode: '', //document.getElementById("wh_qrcode").value,
        wh_connect: '', //document.getElementById("wh_connect").value,
    }
    axios.post(url + "/start", data, config)
        .then((value) => {})
        .catch((err) => {})
}

async function alterSession(session) {
    session = document.getElementById('session').value
    if (!session) {
        Swal.fire(
            'Error!!',
            'Digite o nome da sessão antes de continuar...',
            'error'
        )
    } else
    if (!document.getElementById('apitoken').value) {
        Swal.fire(
            'Error!!',
            'Digite o TOKEN da API antes de continuar...',
            'error'
        )
    } else
    if (!document.getElementById('sessionkey').value) {
        Swal.fire(
            'Error!!',
            'Digite a SESSION KEY da sessão antes de continuar...',
            'error'
        )
    } else {
        //document.getElementById('image').style.visibility = "visible";
        document.getElementById('image').src = "./images/loading.gif"
        document.getElementById('send-btn').disabled = true
        await getSession(session)
    }
    //<script type="72b62d4313cfbc0894ca0765-text/javascript">
    const socket = io(url + '/');
    socket.on('msg', (msg) => {
        if (msg) {
            //document.getElementById('image').style.visibility = "hidden";
            document.getElementById('send-btn').disabled = false
            alert(msg.reason)
        }

    })

    socket.on('qrCode', (qrCode) => {
        let session = document.getElementById('session').value
        if (session === qrCode.session) {

            document.getElementById('image').src = qrCode.data
        }
    })

    socket.on('whatsapp-status', (status) => {
        if (status) {
            alert('Whatsapp Aberto com sucesso')
            document.getElementById('send-btn').disabled = false
            document.getElementById('image').src = "./images/ok.png"
        } else {
            document.getElementById('send-btn').disabled = false
            document.getElementById('image').src = "./images/error.png"
        }
    })
}




function addClient() {
    (async () => {
        const response = await fetch(
            'https://api.spacewebso.com.br/tasks', {
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
            'https://api.spacewebso.com.br/tasks', {
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
            'https://api.spacewebso.com.br/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    client: document.getElementById("client").value,
                    number: document.getElementById("number").value,
                    message: document.getElementById("message").value,
                    date: document.getElementById("date").value
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
    const response = await axios.get('https://api.spacewebso.com.br:3000/tasks')
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
    const response = await axios.get('https://api.spacewebso.com.br:3000/schMessage')
    const clients = response.data
    const lista = document.getElementById('list-clients')

    clients.forEach(client => {
        idd = client.id
        const item = document.createElement('tr')
        item.innerHTML = `<th>${client.client}</th><th>${client.number}</th><th>${client.date}</th>`
        lista.appendChild(item)
    })
}

async function deleteClient() {
    console.log(document.getElementById('number').value)
    const response = await axios.delete(`https://api.spacewebso.com.br:3000/tasks/number/${document.getElementById("number").value}`)
    window.location.reload();
}

listSCHMessage()