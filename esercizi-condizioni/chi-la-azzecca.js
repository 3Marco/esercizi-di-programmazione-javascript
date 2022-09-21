/*
  Chi l'azzecca?
  Scrivi un programma che dati due numeri di due ipotetici giocatori,
  generi un numero casuale compreso tra 1 e 100 (zero escluso),
  verifichi se uno dei due giocatori ha azzeccato il numero casuale,
  e in caso contrario quale dei due si è avvicinato di più al numero.

  Esempio:
    Input: giocatore 1 = 5, giocatore 2 = 10
    Output: Numero casuale generato = 7
            "Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più!"

  Consigli:
  Per generare un numero casuale utlizza la funzione javascript Math.random() che restituisce un intervallo compreso tra 0 e 1.
  Il valore ottenuto dovrà essere convertito per ottenere un valore valido per il tuo intervallo, in questo modo:
    (Math.random() * (max-min) + min) ovvero, nel tuo caso:
    (Math.random() * (100-1) + 1)
  Ricordati che il valore dovrà essere intero quindi dovrai arrontondarlo usando Math.floor()

  http://www.imparareaprogrammare.it
*/

//Fatto

var giocatore1 = 45;
var giocatore2 = 30;
var max = 100;
var min = 1;
var numcaus = Math.floor(Math.random() * ((max-min) + min));
console.log('numero casuale generato = ' + numcaus)
var difgioc1 = Math.abs(giocatore1 - numcaus);
var difgioc2 = Math.abs(giocatore2 - numcaus);

console.log('La differenza del giocatore 1 è: ' + difgioc1);
console.log('La differenza del giocatore 2 è: ' + difgioc2);




if (giocatore1 == numcaus) {
  console.log('Complimenti al giocatore 1!!! Hai azzeccato il numero casuale!');
}
else if (giocatore2 == numcaus) {
  console.log('Complimenti al giocatore 2!!! Hai azzeccato il numero casuale!');
}
else if (difgioc1 < difgioc2) {
  console.log('Nessuno dei due giocatori ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più!');
}
else if (difgioc1 > difgioc2) {
  console.log('Nessuno dei due giocatori ha azzeccato il numero casuale, ma il giocatore 2 si è avvicinato di più!');
}
