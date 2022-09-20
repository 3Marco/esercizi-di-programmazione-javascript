/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

  http://www.imparareaprogrammare.it
*/

//Fatto

var sec = 60
var min = 60
var hour = min*sec;
var seconds = 12560;
var calchour = (seconds/hour);
var arrcalchour = Math.round(calchour);
var calcmin = ((calchour-arrcalchour)*min);
var arrcalcmin = Math.round(calcmin);
var calcsec = ((calcmin-arrcalcmin)*sec);
var arrcalcsec = Math.round(calcsec);
console.log(seconds + ' secondi equivalgono a ' + arrcalchour + ' ore ' + arrcalcmin + ' minuti e ' + arrcalcsec + ' secondi');
