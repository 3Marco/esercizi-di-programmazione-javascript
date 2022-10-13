/*
  La funzione banale
  Scrivi una funzione di uguaglianza che prenda in input due argomenti e restituisca TRUE se i due argomenti sono IDENTICI,
  FALSE altrimenti.

  Esempi:
    Input: n = 2, m = 3
    Output: FALSE

    Input: n = 2, m = '2'
    Output: FALSE

    Input: n = 2, m = 2
    Output: TRUE

    
  http://www.imparareaprogrammare.it
*/

//Fatto

var n = prompt('Confronto tra due valori: sono uguali?\nInserisci il primo valore');
var m = prompt('Inserisci il secondo valore');
console.log('Input: n = ' + n + ' , m = ' + m);
function egual (n, m) {
  if (n === m) {
    return 'Output: TRUE'
  }
  return 'Output: FALSE'
}
var output = egual(n, m);
console.log(output);
