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

function readImage() {
    if (this.files && this.files[0]) {
        var file = new FileReader();
        file.onload = function(e) {
            document.getElementById("preview").src = e.target.result;
        };       
        file.readAsDataURL(this.files[0]);
    }
}
document.getElementById("img-input").addEventListener("change", readImage, false);