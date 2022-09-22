/*
  Il conta cifre
  Scrivi un programma che dato un numero (massimo 9999) conti da quante cifre è formato.

  Esempi:
    Input: numero = 9
    Output: 1 cifra

    Input: numero = 245
    Output: 3 cifre

  http://www.imparareaprogrammare.it
*/

//Fatto

var max = 9999;
var min = 1;
var numero = Math.floor(Math.random() * (max-min)+min);
console.log('numero casuale è: ' + numero);


var n = numero.toString()

if ((numero <= 9999) && (n.length === 1))
console.log('Il numero ' + numero + ' è composto da ' + n.length + ' cifra.');

else if ((numero <= 9999) && (n.length !== 1))

console.log('Il numero ' + numero + ' è composto da ' + n.length + ' cifre.');
