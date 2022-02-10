let ssl = 1 // 0 para não & 1 para sim

if (ssl == 1){
  const host = "https://api.spacewebso.com.br:3000"
} else {
  const host = "http://api.spacewebso.com.br:3000"
}

function addClient() {
    (async () => {
        const response = await fetch(
            host + '/tasks', {
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
    const response = await axios.get(host + '/tasks')
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
    const response = await axios.delete(host + `/tasks/number/${document.getElementById("number").value}`)
    window.location.reload();
}

async function sendMessage(){
    console.log('Enviando mensagem')
    
    const 
}


listClients()
