// funções de caso 
async function cadastrarCaso() {
    const caso = {
        servico: document.getElementById("serviceInput").value,
        especificacao: document.getElementById("specificationInput").value,
        detalhamento: document.getElementById("detailsInput").value,
        clienteId: sessionStorage.getItem("userId")
    }

    const urlParams = new URLSearchParams(window.location.search);
    const idAdvogado = urlParams.get('advogado');

    await fetch('http://localhost:8080/caso', {
        method: "POST",
        body: JSON.stringify(caso),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then((response) => {
        console.log(response)
        window.location.href = `selectcase?advogado=${idAdvogado}`
    })

}



//trocando o display do modal de atualização de perfil
function desaparecerModal() {
    div_modal.style.display = "none"
    document.body.style.overflow = "auto"
}
function aparecerModal() {
    div_modal.style.display = "block"
    document.body.style.overflow = "hidden"
}

// trocando o display do modal de contrato aceito
function aparecerModalAceite() {
    div_modal.style.display = "block"
    document.body.style.overflow = "hidden"
}
function desaparecerModalAceite() {
    div_modal.style.display = "none"
    document.body.style.overflow = "auto"
}

async function pesquisarAdvogado(nome) {
    await fetch(`http://localhost:8080/usuario/${nome}`, {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        }
    }).then((response) => response.json())
        .then((json) => console.log(JSON.stringify(json)));

}


