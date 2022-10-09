/*
  Le tabelline nel tabellone
  Scrivi un programma che stampi il tabellone delle tabelline, da 0 a 10.
  In questo modo:
    x | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
    0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0
    1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
    2 | 0 | 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16 | 18 | 20
    ...
    10 | 0 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100
    
  http://www.imparareaprogrammare.it
*/

//Fatto

var tabelline = Array();
for (var i = 0; i < 10; i++) {
  tabelline[i] = Array();
}
var tabellone = 'x' + ' ' + '\t';
for (var j = 0; j < 11; j++) {
    tabellone += ' | ' + j + '\t';
}
tabellone += '\n';

for (var i = 0; i < 11; i++) {
  tabellone += i + '\t';
  for (var j = 0; j < 11; j++) {
      tabellone += ' | ' + i*j + '\t';
    }
  tabellone += '\n';
}
console.log(tabellone);
