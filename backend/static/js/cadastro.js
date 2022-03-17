const form = document.querySelector("form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  let data = new FormData(form);
  let formJson = {};
  for (const [name, value] of data) {
    formJson[name] = value;
  }

  const response = await fetch("/api/user/signup", {
    method: "post",
    body: JSON.stringify(formJson),
    headers: { "Content-Type": "application/json" },
  });
  const json = await response.json();
  localStorage.setItem('user', JSON.stringify(json))
  window.location.href = '/artigo'
})


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