/*
  Maggiore e minore
  Scrivi un programma che dati quattro numeri in input,
  restituisca in output il maggiore e il minore.

  Esempio:
    Input: a = 3, b = -1, c = 4, d = -2
    Output: maggiore = 4, minore = -2
    

  http://www.imparareaprogrammare.it
*/

//Fatto

var a = 3;
var b = -1;
var c = 4;
var d = -2;
var max = Math.max(a, b, c, d);
var min = Math.min(a, b, c, d);
console.log('maggiore = ' + max + ', minore = ' + min);
