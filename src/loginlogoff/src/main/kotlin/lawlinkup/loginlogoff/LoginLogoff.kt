package lawlinkup.loginlogoff


class LoginLogoff {

    val cadastro = mutableListOf<Conta>()

    fun cadastrarUser(novoCadastro: Conta):String{
        cadastro.add(novoCadastro)
        return "Usuario cadastrado com sucesso!"
    }






}