/*
  Ti ricordi le tabelline?
  Scrivi un programma che dato un numero stampi la tabellina corrispondente.

  Esempio:
    Input: 5
    Output: 0 5 10 15 20 25 30 35 40 45 50

  http://www.imparareaprogrammare.it
*/

//Fatto

var max = 10;
var min = 1;
var numero = Math.floor(Math.random() * (max-min)+min);
console.log('Ecco la tabellina del numero: ' + numero);

var limit = 11;

for (var i = 1; i < limit; i++) {
  var tab = numero * i;
  console.log(tab);
}
