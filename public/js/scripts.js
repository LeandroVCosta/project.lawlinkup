// funções de caso 
 async function cadastrarCaso(){
    const caso = {
        servico: document.getElementById("serviceInput").value,
        especificacao: document.getElementById("specificationInput").value,
        detalhamento: document.getElementById("detailsInput").value,
        idCliente: sessionStorage.getItem("userId")
    } 
     
    await fetch('http://localhost:8080/caso',{
        method: "POST",
        body: JSON.stringify(caso),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then((response) => console.log(response))
    
}
    //trocando o display do modal de atualização de perfil
    function desaparecerModal() {
       div_modal.style.display = "none"
       document.body.style.overflow = "auto"
   }
   function aparecerModal() {
       div_modal.style.display = "block"
       document.body.style.overflow = "hidden"
   }
         //funções de atualização de perfil
         async function atualizarPerfil(){
            console.log("aaaaa: ", document.getElementById("div_perfil"))
            const perfil = {
                foto: document.getElementById("div_perfil") ? document.getElementById("div_perfil").value : "aaaa",
                nome: document.getElementById("nameInput").value,
                especializacao: document.getElementById("specializationInput").value,
                sobre: document.getElementById("aboutInput").value

            }
            
            await fetch(`http://localhost:8080/advogado//atualizarPerfil/${id}`,{
                method: "PATCH",
                body: JSON.stringify(perfil),
                headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                 }).then((response) => console.log(response))
                 .then(desaparecerModal())
        
         }
         async function pesquisarAdvogado(nome){
            await fetch(`http://localhost:8080/usuario/${nome}`,{
                method: "GET",
                headers: {
                        "Content-type": "application/json; charset=UTF-8",
                        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
                    }
                 }).then((response) => response.json())
                 .then((json) => console.log(JSON.stringify(json)));
                 
                 
         }
         
        