package lawlinkuplogoff.lawlinkup

data class Cliente(
    val nome:String,
    val senha:String,
    val email:String,
    var ativo:Boolean = false,
    var acesso:Int = 0

    )
