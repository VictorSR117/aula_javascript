var lista = ["maça", "pera", "laranja"]; //declaração de um vetor
console.log(lista);
line();
console.log(lista[1]); //mostra um item do vetor
line();
lista.push("uva"); //adiciona um item no vetor
line();
console.log(lista);
line();
lista.pop();
line();
console.log(lista);
line();
console.log(lista.length); //mostra o tamanho do vetor
line();
console.log(lista.reverse()); //inverte a ordem do vetor
line();
console.log(lista.toString()); //transforma o vetor em string
line();
console.log(lista[0]);
console.log(lista.toString()[0]);
line();
console.log(lista.join(" - ")); //transforma o vetor em string e muda o seu estilo (melhoria do toString)
line();
line();

var fruta = {nome: "macaa", cor: "vermelha"}; //declaração de um objeto
console.log(fruta);
console.log(fruta.nome);
line();
line();

var frutas = [
    {nome: "maca", cor: "vermelha"}, {nome: "uva", cor: "roxa"}
];
line();
console.log(frutas[0].nome);




function line() {
    console.log("\n");
}