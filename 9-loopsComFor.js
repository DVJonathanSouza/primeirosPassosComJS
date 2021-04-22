console.log(`\n Trabalhando com loops usando For`);

const listaDeDestinos = new Array(
    `Salvador`,
    `Sao Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 18;
const estaAcompanhado = false;
let temPassagemComprada = true;
const destino = "Sao Paulo";

console.log("\n Destinos possiveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhado == true;

let destinoExiste = false;

for (let contador = 0; contador < 3; contador++) { // Para o caso do for, a contagem deverá ser dividida em 3 partes: precisaremos inicializar o contador (let contador = 0), colocar sua condição ( contador < 3 ) e por fim o comando que deverá ser executado ao final do loop, neste caso para evitar o loop infinito, somaremos + 1 no contador (++)
    if (listaDeDestinos[contador] == destino) {
        destino
        destinoExiste = true;
        break;
    }
}

console.log("\n Destino existe: ", destinoExiste);

if (podeComprar && destinoExiste) {
    console.log("\n Boa Viagem!");
} else {
    console.log("\n Desculpe tivemos um erro!");
}