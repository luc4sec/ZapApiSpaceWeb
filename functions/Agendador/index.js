function addClient() {
    (async () => {
        const response = await fetch(
            'http://107.152.47.102:3000/tasks', {
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

async function listClients() {
    const response = await axios.get('http://107.152.47.102:3000/tasks')
    const clients = response.data
    const lista = document.getElementById('list-clients')

    clients.forEach(client => {
        idd = client.id
        const item = document.createElement('tr')
        item.innerHTML = `<th>${client.client}</th><th>${client.number}</th><th>${idd}</th><th>${client.status}</th>`
        lista.appendChild(item)
    })
}

async function deleteClient() {
    console.log(document.getElementById('number').value)
    const response = await axios.delete(`http://107.152.47.102:3000/tasks/number/${document.getElementById("number").value}`)
    window.location.reload();
}


listClients()