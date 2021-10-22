let nome = window.document.getElementById("nome");
let email = document.querySelector("#email");
let assunto = document.querySelector("#assunto");
let mapa = document.querySelector("#mapa");
let nomeOk = false;
let emailOk = false;
let assuntoOk = false;

nome.style.width = "98%";
email.style.width = "98%";

function validaNome(){
    let txtNome = document.querySelector("#txtNome")
    if(nome.value.length < 3){
        txtNome.innerHTML = "Nome Invalido";
        txtNome.style.color = "#D19449"
        txtNome.style.display = "block"
    } else{
        txtNome.style.display = "none";
    }
}

function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")
    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
        txtEmail.innerHTML = "E-mail invalido";
        txtEmail.style.color = "#D19449"
        txtEmail.style.display = "block"
    } else{
        txtEmail.style.display = "none";
    }
}


function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto")
    if(assunto.value.length >= 100){
        txtAssunto.innerHTML = "Texto muito grande, digite no maximo 100 caracteres!";
        txtAssunto.style.color = "#D19449"
        txtAssunto.style.display = "block"
    } else {
        txtAssunto.style.display = "none";
    }
}

function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert("Formulario enviado com sucesso!")
    } else {
        alert("Dados não do formulario preenchido(s)")
    }
}

function mapaZoom(){
    mapa.style.width = "800px"
    mapa.style.height = "600px"
}

function mapaNormal(){
    mapa.style.width = "600px"
    mapa.style.height = "450px"
}
