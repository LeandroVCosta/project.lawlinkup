package lawlinkup.loginlogoff

data class Conta(
    val nome:String = "",
    val senha:String = "",
    val email:String = "",
    val tipoUsuario:Int = 0,
    var logado:Boolean = false
)
