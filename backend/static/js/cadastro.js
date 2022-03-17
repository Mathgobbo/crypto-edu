document.querySelector("form").addEventListener("submit", async (e) => {
    e.preventDefault()
    console.log(e)
    return
    const response = await fetch('/user/signup', {method: 'post'})
    const json = await res.json()
})



const user = json;
console.log(json)
localStorage.setItem("crypto.edu.user", JSON.stringify(user))
const localUser = JSON.parse(localStorage.getItem("crypto.edu.user"))


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