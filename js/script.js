const nome = document.getElementById('nomeNinja');
const aldeia = document.getElementById('nomeAldeia');
const rank = document.getElementById('nomeRank');
const form = document.getElementById('form');

const imagem = document.getElementById('fotoNinja');

const placeholder = document.querySelectorAll('.placeholder');
const item = document.querySelectorAll('.item');

const enviar = document.querySelector('#submit');
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const h3 = document.querySelector('h3');
const img = document.querySelector('img');

form.addEventListener('submit', (e) => {

    
    checkNome();
    checkAldeia();
    checkRank();
    checkFoto();

    function checkNome(){
        let mensagemError = [];
        if(nome.value === '' || nome.value==null){
            e.preventDefault();
            mensagemError.push('Ei, ninja-chan, adicione seu nome!')
            placeholder[0].innerText = mensagemError;
            item[0].classList.add('fail');
        } 
        
        else{
            item[0].classList.remove('fail');
            placeholder[0].innerText = null;
            item[0].classList.add('sucess');
            mensagemError.push('Nome do Jogo')
            placeholder[0].innerText = mensagemError;
            h1.innerText = nome.value;
        }
    }

    function checkAldeia(){
        let mensagemError = [];
        if(aldeia.value === '' || aldeia.value==null){
            e.preventDefault();
            mensagemError.push('Ei, ninja-chan, adicione sua aldeia!')
            placeholder[1].innerText = mensagemError;
            item[1].classList.add('fail');
        } 

        else{
            item[1].classList.remove('fail');
            placeholder[1].innerText = null;
            item[1].classList.add('sucess');
            mensagemError.push('Nome do Jogo')
            placeholder[1].innerText = mensagemError;
            h2.innerText = aldeia.value;
        }
    }

    function checkRank(){
        let mensagemError = [];
        if(rank.value === '' || rank.value==null){
            e.preventDefault();
            mensagemError.push('Ei, ninja-chan, adicione seu rank!')
            item[2].classList.remove('sucess');
            placeholder[2].innerText = mensagemError;
            item[2].classList.add('fail');
            item[2].classList.remove('sucess');
            
        } 
        else{
            item[2].classList.remove('fail');
            placeholder[2].innerText = null;
            item[2].classList.add('sucess');
            mensagemError.push('Nome do Jogo')
            placeholder[2].innerText = mensagemError;
            h3.innerText = rank.value;
            
        }
    }

    function checkFoto(){
        let mensagemError = [];
        if(imagem.nodeValue === '' || imagem==null){
            e.preventDefault();
            mensagemError.push('Ei, ninja-chan, adicione sua foto!')
            placeholder[3].innerText = mensagemError;
            item[3].classList.add('fail');
            item[3].classList.remove('sucess');
        }
        
        else{
            item[3].classList.remove('fail');
            placeholder[3].innerText = null;
            item[3].classList.add('sucess');
            mensagemError.push('Nome do Jogo')
            placeholder[3].innerText = mensagemError;
            img.src = imagem.value;
        }
    }

})