const button = document.querySelector('button');
button.addEventListener('mouseover', alterar1)
button.addEventListener('mouseout', alterar2)

function alterar1(){
    const h1 = document.querySelector('h1');
    h1.innerText = "Artigo de Criação";
}

function alterar2(){
    const h1 = document.querySelector('h1');
    h1.innerText = "Criação de Artigo";
}
