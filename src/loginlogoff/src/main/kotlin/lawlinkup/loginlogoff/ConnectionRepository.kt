package lawlinkup.loginlogoff

import lawlinkup.loginlogoff.Connection

class ConnectionRepository {

    val conn = Connection().getJdbcTemplate()

    fun cadastrar(nome:String, senha:String, email:String, tipoUsuario:Int){
        conn.update("insert into Cadastro (nome,senha,email,tipoUsuario) values (?,?,?,?);", nome,senha,email,tipoUsuario)
    }

    fun logar(email: String, senha: String){
        conn.queryForList("select * from Cadastro where email = ? and senha = ?;")
    }
}