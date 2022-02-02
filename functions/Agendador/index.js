function addClient() {
    (async () => {
        const response = await fetch(
            'http://localhost:3000/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    client: document.getElementById("client").value,
                    number: document.getElementById("number").value
                })
            },
            //document.getElementById('send-btn').disabled = true,
            document.getElementById('image').src = "../../images/loading.gif",
        );
        const content = await response.json();

        document.getElementById('send-btn').disabled = false

        if (content.serverStatus == 2) {
            document.getElementById('image').src = '../../images/ok.png'
        } else {
            document.getElementById('image').src = '../../images/error.png'
            var saida = JSON.stringify(content)
            document.getElementById('status').innerHTML = saida
        }
    })();
}

async function listClients(){
    const response = await axios.get('http://localhost:3000/tasks')
    const clients = response.data

    const lista = document.getElementById('list-clients')
    
    clients.forEach(client => {
        const item = document.createElement('div')
        item.innerText = `Nome: ${client.client} | ID: ${client.id} | Numero: ${client.number}`

        lista.appendChild(item)
    })
}

listClients()

