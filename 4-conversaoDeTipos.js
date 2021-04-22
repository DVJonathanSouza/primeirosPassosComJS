console.log("Conversao de tipos");

console.log("ano" + 2021);
console.log("2" + "2");
//Ate o momento ele so concateno 

console.log(parseInt("2") + parseInt("2"));
//Com o "parseInt" ele tranforma explicitamente esse texto em numero inteiro e execulta a soma
//Existe o "parseFloat" que trabalhamos com numeros quebrados

console.log("10" / "2"); //O proprio JS entende que e uma conta e converte implicitamente o textos em numeros
console.log("Jonathan" / "2"); //(NaN) Not a number. O JS tentar tranformar "Jonathan" em numero, mas nao e, entao o resultado e Nao e Numero

console.log(6, 5); //A virgula tem um caracter especial no JS..
console.log(6.5); //..Sendo assim quando trabalhamos com numeros quebrados no JS temos que presentar usando o "." (ponto flutuante)