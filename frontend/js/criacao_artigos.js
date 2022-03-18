const form = document.getElementsByTagName('form')[0]
form.addEventListener('submit', validate)

function validate(){
    const inputs = form.getElementsByClassName('caixa-de-texto')
    console.log(inputs[0].innerText)
    if (inputs[0].innerText == ''){
        alert('Campo obrigatório não preenchido!')
    }
    if (inputs[1].innerText == ''){
        alert('Campo obrigatório não preenchido!')    
    }
}


