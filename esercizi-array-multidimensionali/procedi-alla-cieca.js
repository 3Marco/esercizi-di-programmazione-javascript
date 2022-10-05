/*
  Procedi alla cieca
  Scrivi un programma che stampi il contenuto di una matrice i cui valori interi sono generati casualmente nel range di 0 e 100.

  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".

  http://www.imparareaprogrammare.it
*/

//Fatto

var numbers = Array();
var righe = 10;
var colonne = 10;
var tabella = '';
var mx = 100;
var mn = 1;
for (var i = 0; i < colonne; i++) {
    numbers[i] = Array();
}
for (var i = 0; i < righe; i++) {
  for (var j = 0; j < colonne ; j++) {
    numbers[i][j] = Math.floor(Math.random() * (mx-mn)+mn);
  }
}
for (var i = 0; i < righe; i++) {
  for (var j = 0; j < colonne ; j++) {
    tabella += numbers[i][j] + ' ' + '\t';
  }
  tabella += '\n';
}
console.log(tabella);
