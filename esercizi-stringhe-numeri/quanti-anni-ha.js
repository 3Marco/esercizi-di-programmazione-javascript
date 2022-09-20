/*
  Quanti anni ha?
  Scrivi un programma che dato l'anno corrente e un anno di nascita determini:
    - l'età della persona,
    - quanti anni sono necessari per raggiungere i 100
  Restituisca in output entrambi i risultati.

  Esempio:
    Input: anno corrente = 2018, anno di nascita = 1991
    Ouput: età = 27, anni mancanti = 73

  http://www.imparareaprogrammare.it
*/

//Fatto

var bornyear = 1991;
var nowyear = 2018;
const secolo = 100;
var age = nowyear-bornyear;
var morelive = (bornyear+secolo)-nowyear;
console.log('età : ' + age + ', anni mancanti : ' + morelive)
