function soma(n1, n2) {
    return n1 + n2;
}
console.log(soma(5, 10));

function setReplace(frase, nome, novoNome) {
    return frase.replace(nome, novoNome)
}
console.log.setReplace(("Vai Japão", "Japão", "Brasil"));




validar = 0;




function validaIdade(idade) {
    var validar;
    if (idade >= 18) {
        validar = true;
    }
    else {
        validar = false;
    }
    return validar;
}

var idade1 = prompt("qual a sua idade ?");
console.log(validaIdade(idade1));