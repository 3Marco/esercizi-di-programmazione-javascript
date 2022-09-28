/*
  Invertimi
  Scrivi un programma che dato un numero N, generi un array di N numeri casuali
  e stampi sia l'array ottenuto che quello invertito.

  Esempio:
    Input: N = 5
    Output: array ottenuto = [3, 5, 10, 2, 8], array invertito = [8, 2, 10, 5, 3]

  Variante:
  Non utilizzare array/variabili di appoggio per l'inversione.

  Consigli:
  Per la variante ricordati l'uso degli indici del ciclo ;)

  http://www.imparareaprogrammare.it
*/

//Fatto

var max = 15;
var min = 2;
var n = Math.floor(Math.random() * (max-min)+min);
console.log('lunghezza array: ' + n);

var toinv = Array(n);

var mx = 50;
var mn = 1;
for (var i = 0; i < toinv.length; i++) {
  toinv[i] = Math.floor(Math.random() * (mx-mn)+mn);
}
console.log('originale: ' + toinv);
console.log('invertita: ' + toinv.reverse());
