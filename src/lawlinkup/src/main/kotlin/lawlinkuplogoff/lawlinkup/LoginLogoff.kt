package lawlinkuplogoff.lawlinkup

class LoginLogoff {

    val cadastro = mutableListOf<Conta>()

    fun cadastrarUser(novoCadastro: Conta): String {
        cadastro.add(novoCadastro)
        return "Usuario cadastrado com sucesso!"
    }
    fun buscarUser(email:String, user: List<Conta>):Conta?{
        return user.find { it.email == email}
    }
}
