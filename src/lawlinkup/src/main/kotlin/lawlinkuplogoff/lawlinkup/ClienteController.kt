package lawlinkuplogoff.lawlinkup

import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.ResponseBody
import org.springframework.web.bind.annotation.RestController
import java.awt.List
@RestController
@RequestMapping("/usuarios")
class ClienteController {

    @PostMapping("/cadastrar")
    fun listaUser(@RequestBody novoCliente:Cliente):String{
        return user.postCliente(novoCliente)
    }


    val user = Cadastro()
    @GetMapping
    fun getCadastros(): kotlin.collections.List<ClienteResponse> {
        return user.getCliente()
    }

    @PostMapping("/logar")
    fun postlogar(@RequestBody login:Login):String{
        return user.postLogin(login)
    }

    @DeleteMapping("/deslogar/{nome}")
    fun deslogarUser(@PathVariable nome:String):String{
        return user.logOffCliente(nome)
    }
}
