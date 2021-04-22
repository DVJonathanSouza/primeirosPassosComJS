console.log(`Trabalhando com condicionais`); // Declando com `` para poder interpolar

const listaDeDestinos = new Array(
    `Salvador`,
    `Sao Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 17;
const estaAcompanhado = true;
const temPassagemComprada = true;

console.log("Destinos possiveis:");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) { //Verificando que a idade do comprador é maior ou igual a 18
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1, 1); //Apagando um item na lista
// } else if (estaAcompanhado == true) { //Verificando se afirmacao acima é falsa ou verdadeira, se nao for verificaremos se esta acompanhado
//     console.log("Comprador esta acompanhado");
//     listaDeDestinos.splice(1, 1); //Apagando um item na lista
// } else {
//     console.log("Nao e maior de idade e nao posso vender");
// }

if (idadeComprador >= 18 || estaAcompanhado == true) {
    console.log("Boa viagem!");
    listaDeDestinos.splice(2, 1);
} else {
    console.log("Nao e maior de idade e nao posso vender");
}

console.log("Emparque: \n\n"); // "\n\n" pula duas linahs
if (idadeComprador >= 18 || estaAcompanhado && temPassagemComprada) {
    console.log("Boa viagem!");
} else {
    console.log("Voce nao pode embarcar");
}

console.log(listaDeDestinos);

//console.log (idadeComprador > 18); //Operador logico maior que
//console.log (idadeComprador < 18); //"" menor que
//console.log (idadeComprador >= 18); //"" maior ou igual que
//console.log (idadeComprador <= 18); //"" menor que ou igual que
//console.log (idadeComprador == 18); //"" igual