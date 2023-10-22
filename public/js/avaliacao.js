
window.onload = function () {
    document.getElementById("userName").innerHTML = sessionStorage.getItem("userName");
}

let id = 1


let evaluation = { 
    avaliacao: 3
}

async function criarAvaliacao(evaluation) {
    await fetch(`http://localhost:8080/vinculo/atualizar/${id}`, {
        method: "PATCH",
        body: JSON.stringify(evaluation),
        headers: {
            "Access-Control-Allow-Origin": "http://localhost:3000",
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}
