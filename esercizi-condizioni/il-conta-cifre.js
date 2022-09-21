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

var numero = 6;

var n = numero.toString()

if ((numero <= 9999) && (n.length === 1))
console.log('Il numero ' + numero + ' è composto da ' + n.length + ' cifra.');

else if ((numero <= 9999) && (n.length !== 1))

console.log('Il numero ' + numero + ' è composto da ' + n.length + ' cifre.');
