/*
  La difficoltà del fattoriale
  Scrivi una funzione che calcoli in maniera iterativa (usando un ciclo) il fattoriale di un numero preso in input.

  Esempio:
    Input: n = 5
    Output: 120

  Consigli:
  Il fattoriale è il prodotto dei numeri interi da 1 a n.
  Esempio: n = 5, fattoriale = 5*4*3*2*1 = 120

  http://www.imparareaprogrammare.it
*/

//Fatto

var num = Math.floor(Math.random() * 10+1);
function fattoriale (n){
     var ris = 1;
     for (var i = 2; i < n+1; i++) {
         ris *= i;
     }
     return ris;
}
var fat = fattoriale(num);
console.log(fat + ' è il fattoriale di ' + num);
