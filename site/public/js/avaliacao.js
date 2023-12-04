
window.onload = function () {
    document.getElementById("userName").innerHTML = sessionStorage.getItem("userName");
}


async function criarAvaliacao() {
    let id = 1
    let evaluation = {
        avaliacao: 3
    }
    await fetch(`https://project-lawlinkup-5yraro2lta-uc.a.run.app/vinculo/atualizar/${id}`, {
        method: "PATCH",
        body: JSON.stringify(evaluation),
        headers: {
            "Access-Control-Allow-Origin": 'http://localhost:3000/avaliacaoadv',
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then((json) => console.log(json));
    
}
