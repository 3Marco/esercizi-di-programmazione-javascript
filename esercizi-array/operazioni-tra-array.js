/*
  Operazioni tra array
  Scrivi un programma che dati:
  - 2 array di 10 elementi interi casuali compresi tra 1 e 10,
  - il tipo di operazione aritmetica da effettuare, una delle seguenti:
    addizione
    sottrazione
    moltiplicazione
    divisione
  Esegua il calcolo tra ogni elemento dei due array, salvando ciascun risultato in un terzo array di appoggio.

  Esempio:
    Input: a = [3, 7, 2, 5, 8, 1, 2, 5, 6, 4], b = [9, 3, 1, 4, 7, 6, 5, 10, 1, 5], operazione = "addizione"
    Output: c = [12, 10, 3, 9, 15, 7, 7, 15, 7, 9]

  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".


  http://www.imparareaprogrammare.it
*/

//Fatto

var mx = 10;
var mn = 1;
var one = Array(10);
var two = Array(10);


for (var i = 0; i < one.length; i++) {
  one[i] = Math.floor(Math.random() * (mx-mn)+mn);
}
for (var i = 0; i < two.length; i++) {
  two[i] = Math.floor(Math.random() * (mx-mn)+mn);
}
console.log(one);
console.log(two);

var ope = ('\n\
OPERAZIONI DISPONIBILI: \n\
\n\
1. addizione \n\
2. sottrazione \n\
3. moltiplicazione \n\
4. divisione \n\
\n');
console.log(ope);
var max = 5;
var min = 1;
var three = Array(10);
cope = Math.floor(Math.random() * (max-min)+min);

for (var i = 0; i < three.length; i++) {
switch (cope) {
  case 1:
    three[i] = one[i]+two[i];
    console.log('Scelta: ' + cope + '. somma');
    break;
  case 2:
    three[i] = one[i]-two[i];
    console.log('Scelta: ' + cope + '. sottrazione');
    break;
  case 3:
    three[i] = one[i]*two[i];
    console.log('Scelta: ' + cope + '. moltiplicazione');
    break;
  case 4:
    three[i] = one[i]/two[i];
    console.log('Scelta: ' + cope + '. divisione');
    break;
   }
}
console.log(three);
