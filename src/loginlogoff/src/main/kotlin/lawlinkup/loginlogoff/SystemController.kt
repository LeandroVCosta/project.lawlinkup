package lawlinkup.loginlogoff

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController


@RestController
@RequestMapping("/menu")

class SystemController {
    var status = false
    val cadastro = LoginLogoff()


    @GetMapping
    fun getStatus():String{
        if (status){
            return "Status: Logado"
        }
        else{
            return "Status: Deslogado"
        }
    }

    @PutMapping("/deslogar")
    fun deslogar():String {
        var status = false
        return "Deslogado com Sucesso!"
    }

    @PutMapping("/logar")
    fun logar(@RequestBody email:String, senha:String):String {
         val valido = LoginLogoff().cadastro.filter { it.email == email && it.senha == senha }
       if (valido.isEmpty()){
           return "Usuário não encontrado!"
       }
        status = true
        return "Usuário Logado com Sucesso"
    }


    @PostMapping("/cadastro")
    fun cadastrarUser(@RequestBody novoCadastro: Conta):Conta {
        cadastro.cadastrarUser(novoCadastro)
        return novoCadastro
    }

}