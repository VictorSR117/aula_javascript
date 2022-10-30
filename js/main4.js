function botao() {
    document.getElementById("agradecimento");
    document.getElementById("agradecimento").innerHTML = "muito obrigado";
    document.getElementById("agradecimento").innerHTML = "<b>Valeeeuu</b>"
    console.log(document.getElementById("agradecimento"));
}

function redirecionar() {
    window.open("http://google.com.br"); //abre numa janela por fora
    window.location.href = "http://youtube.com.br" //abre na mesma pagina
}

function trocar(elemento) {
    document.getElementById("mousemoove").innerHTML = "vlw por testar";
    console.log("trocar texto");
    elemento.innerHTML = "vlw por testar";
}

function voltar(elemento) {
    document.getElementById("mousemoove").innerHTML = "passa o mouse dnv ";
    elemento.innerHTML = "passa o mouse dnv";
}

function load() {
    console.log("pagina carregada");
}

function funcaoChange(elemento) {
    console.log(elemento.value);
}