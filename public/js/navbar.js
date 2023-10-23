function alterarNavbar() {
    console.log(sessionStorage.getItem("userId"))
    if (sessionStorage.getItem("userId")) {
        document.getElementById("header-site").innerHTML = `
            <nav class="navbar navbar-expand-md navbar-dark navbar-color-primary fixed-top">
                <div class="container-fluid">
                    <a class="navbar-brand" href="home">
                        <img src="img/Logo-SemFundo.svg" width="120" height="100" class="d-inline-block align-center"
                            alt="">
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <ul class="navbar-nav ms-auto mb-2 mb-md-0">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="contact">Contato</a>
                            </li>
                            <li class="nav-item">
                                ${sessionStorage.getItem("userType") == "cliente" ? `<a class="nav-link" href="marketplace">Buscar Advogado</a>` : `<a class="nav-link" href="profile">Ver Perfil</a>`}
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="chat">Chat</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="userName" onclick="deslogar()">Logoff</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        `
    } else {
        document.getElementById("header-site").innerHTML = `
            <nav class="navbar navbar-expand-md navbar-dark navbar-color-primary fixed-top" style="font-family: 'Brawler'; height: 112px;">
                <div class="container-fluid">
                    <a class="navbar-brand" href="home">
                        <img src="img/Logo-SemFundo.svg" width="120" height="100" class="d-inline-block align-center" alt="">
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <ul class="navbar-nav ms-auto mb-2 mb-md-0">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="contact">Contato</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="marketplace">Buscar Advogado</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="login"><button class="btn btn-outline-light">Login</button></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="cadastro"><button class="btn btn-outline-light">Cadastre-se</button></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        `
    }
}

function deslogar() {
    sessionStorage.clear()
    window.location = "home"
}