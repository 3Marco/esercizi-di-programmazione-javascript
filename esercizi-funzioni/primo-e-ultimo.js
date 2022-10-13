/*
  Primo e ultimo
  Scrivi due funzioni una che prenda in input tre numeri e restituisca il maggiore,
  l'altra che restituisca il minore.

  Esempio:
    Input: a = 1, b = -10, c = 4
    Output: minore = -10, maggiore = 4

  Variante:
  Scrivi due funzioni che prendano in input un array di numeri, una funzione deve restituire il valore maggiore contenuto nell'array,
  l'altra il valore minore.

  http://www.imparareaprogrammare.it
*/

//Fatto: prima versione

mx = 50;
var mn = -50;
var a = Math.floor(Math.random() * (mx-mn)+mn);
var b = Math.floor(Math.random() * (mx-mn)+mn);
var c = Math.floor(Math.random() * (mx-mn)+mn);
console.log('Input: a = ' + a + ' , b = ' + b + ' , c = ' + c);
function maggiore (a, b, c) {
  return Math.max(a, b, c)
}
function minore (a, b, c) {
  return Math.min(a, b, c)
}
var max = maggiore(a, b, c);
var min = minore(a, b, c);
console.log('Output: minore = ' + min + ', maggiore = ' + max);

//versione Array

var mx = 50;
var mn = -50;
var ins = Array();
ins.length = Math.floor(Math.random() * 50+1);
for (var i = 0; i < ins.length; i++) {
  ins[i] = Math.floor(Math.random() * (mx-mn)+mn);
};
console.log('Input: matrice = [' + ins + ']');
console.log('Output: minore = ' + (Math.min(...ins)) + ', maggiore = ' + (Math.max(...ins)));
