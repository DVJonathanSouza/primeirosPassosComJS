console.log(`Trabalhando com listas`); // Declando com `` para poder interpolar

// const salvador = `Salvador`;
// const saoPaulo = `Sao Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;
const listaDeDestinos = new Array(
    `Salvador`,
    `Sao Paulo`,
    `Rio de Janeiro`
);

listaDeDestinos.push(`Curitiba`); //Add um novo item na lista

console.log("Destinos possiveis:");
//console.log (salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDestinos);

listaDeDestinos.splice(1, 1); //Apagando um item na lista. Lebrando que um Array comeca contar do 0

console.log(listaDeDestinos);
console.log(listaDeDestinos[0], listaDeDestinos[1]); //Mostrando somente um elementos selecionados