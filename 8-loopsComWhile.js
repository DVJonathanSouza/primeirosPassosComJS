console.log(`\n Trabalhando com loops usando While`);

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

const podeComprar = idadeComprador >= 18 || estaAcompanhado == true; // Transformou todo aquele laco em uma variavel 

let contador = 0;
let destinoExiste = false;

while (contador < 3) { //Enquanto a variavel contador dor menor que minha lista
    if (listaDeDestinos[contador] == destino) { //Verificando se o numero do contador esta de acordo com numero selicionado na variavel destino
        destinoExiste = true;
        break; //Ao encontrar o destino como true pulamos o nó com break e damos seguimento no codigo, se nao fizermos isso o nó vai verificar item por item ate o final da lista
    }

    contador += 1; //Somando mais 1 para o contador, se nao fizer isso ele sempre valera 0 e ficaremos em loop infinite
}

console.log("\n Destino existe: ", destinoExiste);

if (podeComprar && destinoExiste) {
    console.log("\n Boa Viagem!");
} else {
    console.log("\n Desculpe tivemos um erro!");
}