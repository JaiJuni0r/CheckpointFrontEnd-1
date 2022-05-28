const nome = document.getElementById('nomeNinja');
const aldeia = document.getElementById('nomeAldeia');
const form = document.getElementById('form');
const error = document.querySelectorAll('.error');
const item = document.querySelectorAll('.item');


form.addEventListener('submit', (e) => {

    checkName();
    checkAldeia();

    function checkName() {
        let mensagemError = [];
        if (nome.value === '' || nome.value == null){
            e.preventDefault();
            mensagemError.push('Ei, ninja-chan, preencha seu nome!')
            error[0].innerText = mensagemError;
            item[0].classList.add('fail');
        }

        else{
            item[0].classList.remove('fail');
            error[0].innerText = null;
            item[0].classList.add('sucess')
        }
    }


    function checkAldeia(){
        let mensagemError = [];
        if (aldeia.value === '' || aldeia.value == null){
            e.preventDefault();
            mensagemError.push('Ei, ninja-chan, preencha sua aldeia!')
            error[1].innerText = mensagemError;
            item[1].classList.add('fail');

        }

        else{
            item[1].classList.remove('fail');
            error[1].innerText = null;
            item[1].classList.add('sucess');
        }
    }
})

const imagem = document.querySelectorAll('.item img');
const urlImagens = [];

imagem.forEach(function (_ , botao){
    const url = [];
    url.push(url)
})

urlImagens.forEach(function (url,index){
    const imagem = document.querySelectorAll(`#imagem-${index}`)
    imagem.setAttibute('src', url)
})

imagem.forEach(function (element, index){
    const link = document.createElement('a')
    link.appendChild(element)
    link.classList.add('img-routes')
    link.setAttribute('href', `${element.sec}`)
    link.addEventListener('click', event =>{
        event.preventDefault()
        const newWindow = window.open(element.src, '_blank')
        newWindow.focus() 
    })
    const div = document.getElementsByClassName('item')
    div[index].appendChild(link)
}
)