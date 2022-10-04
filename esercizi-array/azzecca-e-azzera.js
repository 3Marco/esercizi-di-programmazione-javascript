/*
  Azzecca e azzera
  Scrivi un programma che dato un array di 100 elementi, lo riempia con numeri interi casuali da 1 a 50.
  Permetti all'utente di inserire un numero e azzera tutti i gli elementi nell'array principale che sono suoi multipli.
  Richiedi all'utente un altro numero e così via.
  Il programma termina quando tutti gli elementi dell'array principale sono uguali a zero.

  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".
  Per richiedere un numero all'utente puoi usare il comando prompt(), se vuoi saperne di più puoi controllare nella
  documentazione: https://developer.mozilla.org/it/docs/Web/API/Window/prompt

  http://www.imparareaprogrammare.it
*/

//Fatto

var mx = 50;
var mn = 1;
var grp = Array();
for (var i = 0; i < 100; i++) {
  grp[i] = Math.floor(Math.random() * (mx+mn));
};

var app = 0;
var check = true;
while (check) {
  console.log('Azzera i seguenti numeri : '+grp);
    do {
          app = parseInt(prompt("immetti valore compreso tra numeri interi 2 e 50"));
       }
          while (app <1 || app>50);
            for(j=0; j<grp.length; j++){
                  if(grp[j] % app === 0)	{
                        grp[j] = 0;
                  }
            }
            check = false;
            for (var i = 0; i < grp.length; i++) {
                  if (grp[i] > 0) {
            check = true;
                  }
            }
}
console.log(grp + ' \n\Hai azzerato tutti i numeri!');
