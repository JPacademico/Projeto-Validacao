const emailregex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const form = document.getElementById('formulario')
const camposText = document.querySelectorAll('.inputs')
const campoSelect = document.getElementById('senioridade')
const span = document.querySelectorAll('.span-required')

form.addEventListener('submit', (event) =>{
    event.preventDefault();
    validarNome();
    validarSobrenome();
    senhasIguais();
    validarEmail();
})

function validarNome(){
    if(camposText[0].value.length<4){
        verErroText(0)
    }else{
        resolverErroText(0)
    }
}

function validarSobreNome(){
    if(camposText[1].value.length<4){
        verErroText(1)
    }else{
        resolverErroText(1)
    }
}

function validarEmail(){
    if(emailregex.test(camposText[2].value)){
        resolverErroText(2)
    }else{
        verErroText(2)
    }
}

function validarSelect(){
    if(campoSelect.value=="Selecione"){
        verErroText()
    }else{
        resolverErroText()
    }
}

function verErroText(index){
    camposText[index].style.border = '2px solid #e63636';
    span[index].style.display = 'block';
}

function resolverErroText(index){
    camposText[index].style.border = '';
    span[index].style.display = 'none';
}

function verErroSelec(){
    campoSelect.style.border = '2px solid #e63636';
    span.style.display = 'block';
}

function resolverErroSelect(){
    campoSelect.style.border = '';
    span.style.display = 'none';
}

console.log(campoSelect[0])