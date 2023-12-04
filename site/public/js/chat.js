async function buscarSocketId(idUsuario){
    const retorno = await fetch(`https://project-lawlinkup-5yraro2lta-uc.a.run.app/chat/buscarSocketId/${idUsuario}`, {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });

    return retorno.text()
}

async function updateSocketId(id,socket){
    let dados = {
        idUsuario:id,
        socketId:socket
    }

    await fetch(`https://project-lawlinkup-5yraro2lta-uc.a.run.app/chat/atualizarSocketId`, {
        method: "POST",
        body: JSON.stringify(dados),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });
}

async function carregarMensagens(idVinculo){
    let dados = {
        idVinculo:parseInt(idVinculo)
    }

    const retorno = await fetch(`https://project-lawlinkup-5yraro2lta-uc.a.run.app/chat/carregarMensagens`, {
        method: "POST",
        body: JSON.stringify(dados),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    const mensagens = await retorno.json()
    return mensagens
}

async function registrarMensagem(idVinculo,idRemetente,idDestinatario,mensagem){
    let dados = {
        idVinculo:parseInt(idVinculo),
        idRemetente:parseInt(idRemetente),
        idDestinatario:parseInt(idDestinatario),
        mensagem:mensagem
    }

    const retorno = await fetch(`https://project-lawlinkup-5yraro2lta-uc.a.run.app/chat/enviarmensagem`, {
        method: "POST",
        body: JSON.stringify(dados),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    return retorno.status
}