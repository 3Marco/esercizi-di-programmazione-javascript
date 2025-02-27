/*
  Menu dei dolci
  Scrivi un programma che dato il seguente menu (da stampare):
    MENU:
    1. Tiramisù
    2. Torta della nonna
    3. Cheesecake alla nutella
    4. Macedonia

  Prenda in input un valore numerico che rappresenti la scelta e restituisca:
    - se la scelta non è tra quelle elencate la scritta 'Dolce non disponibile',
    - altrimenti la scelta effettuata 'Hai scelto il dolce X'.


  Esempi:
    Input: scelta = 4
    Output: Hai scelto il dolce Macedonia

    Input: scelta = 7
    Output: Dolce non disponibile

  http://www.imparareaprogrammare.it
*/

//Fatto

var menu = ('             MENU: \n\
\n\
             1. Tiramisù \n\
             2. Torta della nonna \n\
             3. Cheescake alla nutella \n\
             4. Macedonia \n\
           ');

console.log(menu);
var max = 8;
var min = 1;
var scelta = Math.floor(Math.random() * (max-min)+min);
console.log('La tua scelta è: ' + scelta)

switch (scelta) {
  case 1:
    console.log('Hai scelto il dolce Tiramisù');
    break;
  case 2:
    console.log('Hai scelto il dolce Torta della nonna');
    break;
  case 3:
    console.log('Hai scelto il dolce Cheescake alla nutella');
    break;
  case 4:
    console.log('Hai scelto il dolce Macedonia');
    break;
  default:
    console.log('Dolce non disponibile!');

}
