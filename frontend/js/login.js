function validar() {
    var usuario = formuser.usuario.value;
    var senha = formuser.senha.value;

    if (usuario === '') {
        alert("Preencha o campo usuário!");
    }

    if (senha === '') {
        alert("Preencha o campo senha!");
    }
}