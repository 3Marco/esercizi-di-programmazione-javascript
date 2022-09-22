/*
  Pari o dispari?
  Scrivi un programma che prenda in input un numero intero e restituisca 0 se è pari o 1 se è dispari.

  Esempi:
    Input: numero = 63
    Output: 1

    Input: numero = 24
    Output: 0

  Consigli:
  Per capire se un numero è pari o dispari puoi usare un operatore, ma quale? :) 
  (Se non ti ricordi riguarda la lezione "Come dichiarare e definire le variabili e i tipi di dato" oppure "Il tipo Numero e gli operatori aritmetici")

  http://www.imparareaprogrammare.it
*/

//Fatto

var max = 100;
var min = 1;
var numero = Math.floor(Math.random() * (max-min)+min);
console.log('numero casuale è: ' + numero);

var resto = numero % 2;

switch (resto) {
  case 0:
    console.log(0);
    break;

  default:
    console.log(1);
}
