console.log("Trabalhando com atribuicao de variaveis");

const primeiroNome = "Jonathan";
const sobrenome = "Souza";
//Variaveis apresentadas com "const" nao podem esta sendo sobrescrevendo ao decorrer do codigo
//Variaveis apresentadas com "let" nos permite sobrescrever ela ao decorrer do codigo, mas isso esta errado

//console.log (nome + "" + sobrenome); Aqui ele esta concateno as duas variaveis
//console.log (nome , sobrenome); A "," esta dando um espaco entre as variaveis
console.log(`Meu nome e ${primeiroNome} ${sobrenome}`); //Melhor jeito de fazer esta separacao interpolando

//nome = nome + sobrenome; //Sobrescrevendo o valor da variavel se ela fosse apresentada como "let"
//console.log (nome); //Aqui sera apresentado o novo valor da varaivel "nome"
const nomeCompleto = primeiroNome + sobrenome; //Fazendo a mesma coisa acima, mas de forma certa, criando uma nova variavel const
console.log(nomeCompleto);

let contador = 0;
contador = contador + 1;
//Forma formal de se usar "let" no mercado

let idade; //Declarando variavel
idade = 21; //Atribuindo valor
idade = idade + 1;
console.log(idade);