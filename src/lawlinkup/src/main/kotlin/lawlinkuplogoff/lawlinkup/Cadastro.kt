package lawlinkuplogoff.lawlinkup

import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestBody

class Cadastro {

    val cadastro = mutableListOf<Cliente>()

    fun postCliente(@RequestBody novo: Cliente): String {
        if (cadastro.count { it.email == novo.email && it.senha == novo.senha } > 0) {
            return "O ${novo.email} já existe no sistema."
        } else {
            cadastro.add(novo)
            return "Email: ${novo.email} e Nome: ${novo.nome} cadastrado com sucesso"
        }
    }
    fun getCliente(): kotlin.collections.List<ClienteResponse> {
        return cadastro.map { ClienteResponse(it) }
    }

    fun postLogin(@RequestBody login: Login): String {
        val buscarLogin = cadastro.firstOrNull { it.email == login.email || it.senha == login.senha }
        if (buscarLogin == null) {
            return "Usuário ${login.email} não existe no sistema."
        }
        if (buscarLogin.email != login.email || buscarLogin.senha != login.senha) {
            return "Email ou senha inválidos. Tente novamente!"
        }else{
            buscarLogin.acesso++
            buscarLogin.ativo = true
            return "Login efetuado com sucesso!"
        }
    }

    fun logOffCliente(@PathVariable nome:String):String {
        val buscarLogin = cadastro.firstOrNull { it.nome == nome }
        if (buscarLogin == null){
            return "Usuário $nome não existe no sistema!"
        }else{
            buscarLogin.ativo = false
            return "Usuário $nome deslogado com sucesso!"
        }

    }

}