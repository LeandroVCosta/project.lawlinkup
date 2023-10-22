const nextBtn = document.querySelectorAll(".next");
const prevBtn = document.querySelector(".prev");
const submitBtn = document.getElementById("submit");


submitBtn.addEventListener("click", function(event){
    let email = document.getElementById("emailInput").value
    let senha = document.getElementById("senhaInput").value
    event.preventDefault();
    if(email.length == 0 || senha.length == 0){
        Swal.fire({
            icon: 'error',
            title: 'Oops!',
            text: 'E-mail ou senha inválidos!',
            showCloseButton: true
    
        })
        return
    }
        let usuario = {
            email: document.getElementById("emailInput").value,
            senha: document.getElementById("senhaInput").value,
        }
        LogarUsuario(usuario)
});

async function LogarUsuario(usuario) {
    await fetch(`http://localhost:8080/login`, {
            method: "POST",
            body: JSON.stringify(usuario),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then((response) => response.json())
            .then((json) => {
                window.alert(JSON.stringify(json));
                sessionStorage.setItem("userType", json.tipoUsuario.nome.toLowerCase())
                sessionStorage.setItem("userName", json.nome)
                sessionStorage.setItem("userId", json.idUsuario)
                userType = json.tipoUsuario.nome.toLowerCase()
        })
    window.location.href = userType == "cliente" ? "marketplace" : "profile"
}

prevBtn.addEventListener("click", function(event){
    history.back()
})