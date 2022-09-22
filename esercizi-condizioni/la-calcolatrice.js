/*
  La calcolatrice
  Scrivi un programma che dati:
    - Due numeri
    - Una stringha che identifichi l'operazione da eseguire, es: "somma"
  Restituisca il valore ottenuto calcolando l'operazione tra i due numeri.

  Le operazioni supportate sono le suguenti:
    somma
    sottrazione
    moltiplicazione
    divisione
    modulo (solo tra interi)
    potenza
    media


  Esempi:
    Input: a = 5, b = 6, operazione = "somma"
    Output: 11

    Input: a = 5, b = 6, operazione = "media"
    Output: 5.5


  Utilizza il costrutto Switch-Case, gestire anche il caso di operazione non valida (non presente tra le operazioni consentite).


  http://www.imparareaprogrammare.it
*/

//Fatto

const lista = 'OPERAZIONI \n\
\n\
  1. Somma \n\
  2. Sottrazione \n\
  3. Moltiplicazione \n\
  4. Divisione \n\
  5. Modulo (solo per interi) \n\
  6. Potenza \n\
  7. Media \n\
  ';
console.log(lista);

var max = 10;
var min = 1;
var n1 = Math.floor(Math.random() * (max-min)+min);
var n2 = Math.floor(Math.random() * (max-min)+min);
var scelta = Math.floor(Math.random() * (max-min)+min);
console.log('Scegliere operazione tra i numeri ' + n1 + ' e ' + n2);
console.log('operazione casuale scelta = ' + scelta);

switch (scelta) {

 case 1:
    var somma = n1 + n2;
    console.log('Hai scleto la SOMMA. Il risultato è = ' + somma);
    break;
 case 2:
    var sottrazione = n1 - n2;
    console.log('Hai scleto la SOTTRAZIONE. Il risultato è = ' + sottrazione);
    break;
 case 3:
    var moltiplicazione = n1 * n2;
    console.log('Hai scleto la MOLTIPLICAZIONE. Il risultato è = ' + moltiplicazione);
    break;
 case 4:
    var divisione = n1 / n2;
    console.log('Hai scleto la DIVISIONE. Il risultato è = ' + divisione);
    break;
 case 5:
    var modulo = n1 % n2;
    console.log('Hai scleto la MODULO. Il risultato è = ' + modulo);
    break;
 case 6:
    var potenza = Math.pow(Math.floor(n1), Math.floor(n2));
    console.log('Hai scleto la POTENZA. Il risultato è = ' + potenza);
    break;
 case 7:
    var media = ((n1 + n2)/2);
    console.log('Hai scleto la MEDIA. Il risultato è = ' + media);
    break;
 default:
    console.log('Attenzione! La scelta non corrisponde ad una operazione in elenco!')
}
