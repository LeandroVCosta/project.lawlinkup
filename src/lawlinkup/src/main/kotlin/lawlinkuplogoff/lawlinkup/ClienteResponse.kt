package lawlinkuplogoff.lawlinkup

import org.springframework.expression.spel.CodeFlow.ClinitAdder

data class ClienteResponse(
    val nome:String,
    val email:String,
    val ativo:Boolean,
    val acesso:Int
) { constructor (cliente: Cliente): this (
    cliente.nome,
    cliente.email,
    cliente.ativo,
    cliente.acesso

    )
}

