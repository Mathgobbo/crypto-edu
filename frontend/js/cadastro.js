function validar() {
    var email = formuser.email.value;
    var usuario = formuser.usuario.value;
    var senha = formuser.senha.value;

    if (email === '') {
        alert("Preencha o campo E-mail!");
    }

    if (usuario === '') {
        alert("Preencha o campo usuário!")
    }

    if (senha === '') {
        alert("Preencha o campo senha!")
    }
}