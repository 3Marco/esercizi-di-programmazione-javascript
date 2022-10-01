/*
  Tanti numeri
  Scrivi un programma che dato array di numeri, calcoli la media dei valori e
  restituisca in output la media e tutti i valori minori della media.

  Esempio:
    Input: a = [3, 5, 10, 2, 8]
    Output: media = 5.6, valori minori = [3, 5, 2]

  Variante:
  Stampa anche quanti sono i valori monori della media e quanti quelli maggiori.

  http://www.imparareaprogrammare.it
*/

//Fatto

var exe = Array();
var exef = Array();
var tot = 0;
var xa = 50;
var na = 1;
var x = 15;
var n = 2;
exe.length = Math.floor(Math.random() * (x-n)+n);
console.log('Lunghezza Array: ' + exe.length);
for (var i = 0; i < exe.length; i++) {
  exe[i] = Math.floor(Math.random() * (xa-na)+na);
  tot += exe[i];

 };
console.log('Array iniziale: ' + exe);
  var md = tot/exe.length;
  exef = exe.filter(function evenNumbers (item) {
    return item < md
  }
);
console.log('Somma degli elementi: '+ tot);
console.log('Media degli elementi: '+ md);
console.log('Elementi sotto la media: ' + exef);
console.log('Quantità elementi sotto la media: ' + exef.length);
console.log('Quantità elementi sopra la media: ' + (exe.length-exef.length));
