package lawlinkuplogoff.lawlinkup

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import java.awt.List
import java.util.Objects


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

    @PostMapping("/logar")
    fun logar(@RequestBody informacoes: Login):String {
        val usuario = cadastro.buscarUser(informacoes.email, cadastro.cadastro)

        if(usuario != null && usuario.senha == informacoes.senha){
            return "Login bem sucedido, email: ${informacoes.email} senha: ${informacoes.senha}"
        }else{
                return "Login mal sucedido"
            }
    }



    @PostMapping("/cadastro")
    fun cadastrarUser(@RequestBody novoCadastro: Conta):String {
        val mensagem = cadastro.cadastrarUser(novoCadastro)
        return mensagem
    }

}