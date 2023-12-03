
let userType = document.getElementById("typeInput").value
let nome = document.getElementById("nomeInput").value

document.getElementById("typeInput").addEventListener("click", (event) => {
    document.getElementById("typeInput").style = null
})
document.getElementById("typeInput").addEventListener("change", (event) => {
    userType = event.target.value
    switch (userType) {
        case "1":
        case "2":
            nextBtn[0].disabled = false;
            alterarForm()
            break
        default: nextBtn[0].disabled = true;
    }

})

function alterarForm() {
    if (userType == "1" && bullet.length == 4) {
        document.querySelector(".step-progress.step-progress-cliente").style.display = "none"
        document.querySelector(".page-cliente").style.display = "none"

        bullet.splice(2, 1, document.querySelector(".bullet-progress-advogado"))
        document.querySelector(".step-progress.step-progress-advogado").style.display = "block"
        document.querySelector(".page-advogado").style.display = "flex"
    }
    if (userType == "2" && bullet.length == 4) {
        document.querySelector(".step-progress.step-progress-advogado").style.display = "none"
        document.querySelector(".page-advogado").style.display = "none"

        bullet.splice(2, 1, document.querySelector(".bullet-progress-cliente"))
        document.querySelector(".step-progress.step-progress-cliente").style.display = "block"
        document.querySelector(".page-cliente").style.display = "flex"
    }
}

const slidePage = document.getElementById("slide-page");

const nextBtn = document.querySelectorAll(".next");
const prevBtn = document.querySelector(".prev");

const submitBtn = document.getElementById("submit");

const bullet = Array.from(document.querySelectorAll(".bullet-progress:not(.bullet-progress-advogado)"));

let current = 0;
let posicaoForm = 0

function nextButton() {
    bullet[current].classList.remove("active");
    bullet[current].classList.add("past");
    bullet[current + 1].classList.add("active");
    current += 1;
    posicaoForm -= 25
    slidePage.style.marginLeft = `${posicaoForm}%`
}

function prevButton() {
    bullet[current - 1].classList.remove("past");
    bullet[current - 1].classList.add("active");
    bullet[current].classList.remove("active");
    current -= 1;
    posicaoForm += 25
    slidePage.style.marginLeft = `${posicaoForm}%`
}

nextBtn[0].addEventListener("click", function (event) {
    event.preventDefault();
    let email = document.getElementById("emailInputCadastro").value
    let nome = document.getElementById("nomeInput").value
    if (userType != "1" && userType != "2") {
        document.getElementById("typeInput").style.borderColor = "red"

        Swal.fire({
            icon: 'error',
            title: 'Oops!',
            text: 'Selecione um tipo de usuário para continuar',
            showCloseButton: true

        })
        return
    }
    if (nome.length < 3) {
        document.getElementById("nomeInput").style.borderColor = "red"
        document.getElementById("nomeInput").style.color = "red"
        Swal.fire({
            icon: 'error',
            title: 'Oops!',
            text: 'O nome deve conter pelo menos três caracteres',
            showCloseButton: true

        })
        return
    }
    if (email.length == 0) {
        document.getElementById("emailInputCadastro").style.borderColor = "red"
        Swal.fire({
            icon: 'error',
            title: 'Oops!',
            text: 'Insira um e-mail para continuar',
            showCloseButton: true

        })

        return
    } if (email.indexOf("@") == -1) {
        Swal.fire({
            icon: 'error',
            title: 'Oops!',
            text: 'Insira um e-mail válido para continuar',
            showCloseButton: true

        })
        return
    }
    nextButton();


})
nextBtn[1].addEventListener("click", function (event) {
    event.preventDefault();
    let cep = document.getElementById("cepInput").value
    if (cep.length != 8) {
        Swal.fire({
            icon: 'error',
            title: 'Oops!',
            text: 'Insira um cep válido para continuar',
            showCloseButton: true

        })
        return
    }
    nextButton();

})


nextBtn[2].addEventListener("click", function (event) {
    event.preventDefault();
    
    let especializacao = document.getElementById("especializacaoInput").value
    let numeroOab = document.getElementById("numeroOabInput").value
    let fotoOab = document.getElementById("fotoOabInput").value
    
    if (especializacao.length < 4) {
        Swal.fire({
            icon: 'error',
            title: 'Oops!',
            text: 'Insira uma especialização válida para continuar',
            showCloseButton: true

        })
        return
    }
    if (numeroOab.length != 8) {
        Swal.fire({
            icon: 'error',
            title: 'Oops!',
            text: 'Insira um número da OAB válido para continuar',
            showCloseButton: true

        })
        return
    }
    if (fotoOab == null) {
        Swal.fire({
            icon: 'error',
            title: 'Oops!',
            text: 'Faça o upload da foto da sua carteira da OAB para continuar',
            showCloseButton: true

        })
        return
    }
    nextButton();

})

nextBtn[3].addEventListener("click", function (event) {
    event.preventDefault();
    let dataAtual = new Date()
    let dataFormatada = (dataAtual.getFullYear()) + "-" + ((dataAtual.getMonth() + 1)) + "-" +((dataAtual.getDate() )) ;
    let dataNascimento = document.getElementById("nascimentoInput").value
    let estadoCivil = document.getElementById("estadoCivilInput").value
    let genero = document.getElementById("generoInput").value
    let profissao = document.getElementById("profissaoInput").value
    if (profissao.length < 3) {
        Swal.fire({
            icon: 'error',
            title: 'Oops!',
            text: 'Insira uma profissão válida para continuar',
            showCloseButton: true

        })
        return
    }
    if(estadoCivil == 0){
        Swal.fire({
            icon: 'error',
            title: 'Oops!',
            text: 'Insira o seu estado civil para continuar',
            showCloseButton: true
    
        })
        return
    }
    if(genero == 0){
        Swal.fire({
            icon: 'error',
            title: 'Oops!',
            text: 'Insira um gênero para continuar',
            showCloseButton: true
    
        })
        return
    }
    if(dataNascimento > dataFormatada || dataNascimento.length == 0){
        Swal.fire({
            icon: 'error',
            title: 'Oops!',
            text: 'Insira uma data de nascimento válida para continuar',
            showCloseButton: true
    
        })
        return
    }
    nextButton();
    
})
// nextBtn[4].addEventListener("click", function (event) {
//     event.preventDefault();
   
//     nextButton();
    
// })




// nextBtn.forEach(btn => btn.addEventListener("click", function (event) {
//     event.preventDefault();

//     // document.getElementById("emailInputCadastro").value = document.getElementById("emailInput").value
//     // Não sei o pq isso existe 
// }));

prevBtn.addEventListener("click", function (event) {
    if (current == 0) {
        history.back()
        return
    }
    prevButton();
});

submitBtn.addEventListener("click", async function (event) {
    event.preventDefault(); 
    let cpf = document.getElementById("cpfInput").value
    let senha = document.getElementById("senhaInput").value
    let confirmaSenha = document.getElementById("confirmarSenhaInput").value
   
    if (cpf.length !=11) {
        Swal.fire({
            icon: 'error',
            title: 'Oops!',
            text: 'Um CPF deve ter 11 dígitos!',
            showCloseButton: true

        })
        return
    }
    if(senha.length <6){
        Swal.fire({
            icon: 'error',
            title: 'Oops!',
            text: 'Sua senha deve conter pelo menos 6 caracteres!',
            showCloseButton: true
    
        })
        return
    }
    if(senha != confirmaSenha){
        Swal.fire({
            icon: 'error',
            title: 'Oops!',
            text: 'As senhas não coincidem',
            showCloseButton: true
    
        })
        return
    }
    

    let usuario = {
        nome: document.getElementById("nomeInput").value,
        email: document.getElementById("emailInputCadastro").value,
        senha: document.getElementById("senhaInput").value,
        contato: "11952849601",
        // contato: document.getElementById("contatoInput").value,
        // descomentar input html para funcionar
        cep: document.getElementById("cepInput").value,
        cidade: document.getElementById("cidadeInput").value,
        bairro: document.getElementById("bairroInput").value,
        numero: document.getElementById("numeroInput").value,
        cpf: document.getElementById("cpfInput").value,
        tipoUsuarioId: userType
    }
    if (userType == "1") {
        usuario.especializacao = document.getElementById("especializacaoInput").value
        usuario.numeroOab = document.getElementById("numeroOabInput").value
        usuario.fotoUrl = await uploadImage()
        // usuario.carteiraOab = document.getElementById("carteiraOabInput").value
        // usuario.fotoOab = document.getElementById("fotoOabInput").value
    }
    if (userType == "2") {
        usuario.profissao = document.getElementById("profissaoInput").value
        usuario.dataNascimento = document.getElementById("nascimentoInput").value
        usuario.estadoCivil = document.getElementById("estadoCivilInput").value
        usuario.sexo = document.getElementById("generoInput").value
    }
    cadastrarUsuario(usuario)
});

window.addEventListener("load", getUserTypes);

async function getUserTypes() {
    return
    let values = await fetch(`http://localhost:8080/tipoUsuario`, {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then((response) => response.json())

    console.log(values)
    values.forEach(value => {
        console.log(value)
        document.getElementById("typeInput").add(new Option(value.nome, value.idTipo))
    })
}

async function cadastrarUsuario(usuario) {
    console.log(usuario)
    await fetch(`http://localhost:8080/usuario`, {
        method: "POST",
        body: JSON.stringify(usuario),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then((response) => response.json())
        .then((json) => console.log(json));

    setTimeout(() => window.location.href = "login", 2000)
}

const cepInput = document.getElementById('cepInput');
const cidadeInput = document.getElementById('cidadeInput');
const bairroInput = document.getElementById('bairroInput');

cepInput.addEventListener('input', buscarCep);

function buscarCep() {
    const cep = cepInput.value.replace(/\D/g, '');

    if (cep.length === 8) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(data => {
                if (!data.erro) {
                    cidadeInput.value = data.localidade;
                    bairroInput.value = data.bairro;
                }
            })
            .catch(error => {
                console.error('Erro ao buscar CEP', error);
            });
    }
}

async function uploadImage() {
    const fileInput = document.getElementById('fotoOabInput');
    const file = fileInput.files[0];

    const formData = new FormData();
    formData.append('tipo', await getFileType(file));
    formData.append('stringByte', file);

    try {
      const response = await fetch('http://localhost:8080/usuario/subirimagem', {
        method: 'POST',
        body: formData
      });

      const data = await response.text();
      if (response.ok) {
        console.log('URL da Imagem:', data);
        return data
      } else {
        console.error('Erro:', data);
      }
    } catch (error) {
      console.error('Erro:', error);
    }
  }
  

 async function getFileType(file) {
    if (file.type === 'image/jpeg') {
      return '.jpg';
    } else if (file.type === 'image/png') {
      return '.png';
    } else {
      return 'desconhecido';
    }
  }