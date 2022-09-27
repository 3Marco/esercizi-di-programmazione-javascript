/*
  Vinci tu!
  Scrivi un programma che dato il numero dei tiri da effettuare per ciascun giocatore (N),
  simuli un gioco di dadi tra due utenti, stampando il giocatore che ha totalizza più punti.
  Supponendo che ogni dado abbia al massimo 6 facce.

  Ogni giocatore tirerà il dado N volte, ciò significa che verrà generato un numero casuale
  ad ogni tiro che sarà sommato ai precedenti per calcolare il punteggio del giocatore.


  Consigli:
  Il numero casuale generato, deve essere convertito nel tuo intervallo (min = 1, max = 6).
  Se non ti ricordi come si fa puoi rivedere l'esercizio sulle condizioni "Chi l'azzecca?".

  http://www.imparareaprogrammare.it
*/

//Fatto

var max = 6;
var min = 1;
var point1 = 0;
var point2 = 0;
var shoots = Math.floor(Math.random() * (max-min)+min);
var step = 1
var accumulator = step
var pl1 = 0
var pl2 = 0

while (accumulator <= shoots) {
accumulator += step
point1 = Math.floor(Math.random() * (max-min)+min);
pl1 += point1
point2 = Math.floor(Math.random() * (max-min)+min);;
pl2 += point2
}

if (pl1 < pl2) {
  console.log('Il giocatore due tirando il dado ' + shoots + ' volte ha vinto col punteggio di ' + pl2 + ' a ' + pl1);
}

else if (pl1> pl2) {
  console.log('Il giocatore uno tirando il dado ' + shoots + ' volte ha vinto col punteggio di ' + pl1 + ' a ' + pl2);
}

else {
  console.log('Pareggio: Tirando il dado ' + shoots + ' volte, entrambi i giocatori hanno fatto lo stesso punteggio di ' + pl1)
}
