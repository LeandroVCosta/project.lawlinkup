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
    await fetch(`https://project-lawlinkup-5yraro2lta-uc.a.run.app/login`, {
            method: "POST",
            body: JSON.stringify(usuario),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then((response) => {
            if (response.status === 403) {
                throw new Error("Email/Senha inválidos!");
            }
            return response.json();
        })
        .then((json) => {
            if (json.senha == usuario.senha && json.email == usuario.email){
                valid = true;
            }
            sessionStorage.setItem("userType", json.tipoUsuario.nome.toLowerCase());
            sessionStorage.setItem("userName", json.nome);
            sessionStorage.setItem("userId", json.idUsuario);
            userType = json.tipoUsuario.nome.toLowerCase();
        })
        .catch((error) => {
            Swal.fire({
                icon: 'error',
                title: 'Oops!',
                text: 'Email/Senha estão errados!',
                showCloseButton: true
    
            })
        });
        if (valid){
            Swal.fire({
                icon: 'success',
                title: 'Login Realizado',
                text: 'Redirecionando para a tela inicial!',
                showCloseButton: true
    
            })
            setTimeout(function () {
                window.location.href = userType == "cliente" ? "marketplace" : "profile";
            },2000)
        }
}

prevBtn.addEventListener("click", function(event){
    history.back()
})