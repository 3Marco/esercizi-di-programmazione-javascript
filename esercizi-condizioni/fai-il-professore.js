/*
  Fai il professore
  Scrivi un programma che converta un voto numerico (v) in un giudizio seguendo questi parametri:
    v < 18: insufficiente
    18 <= v < 21: sufficiente
    21 <= v < 24: buono
    24 <= v < 27: distinto
    27 <= v <= 29: ottimo
    v = 30: eccellente
  Utilizza costrutto If.

  Esempio:
    Input: v = 29
    Output: Distinto

  Variante
  Realizzare una versione con il costrutto Switch-Case. In questo caso gestire anche il caso in cui il voto inserito non sia valido.

  http://www.imparareaprogrammare.it
*/

//Fatto

var voto = 22

  if (voto < 18) {
    console.log('insufficiente');
}
  else if (18 <= voto && voto < 21) {
    console.log('sufficiente');
}
  else if (21 <= voto && voto < 24) {
    console.log('buono');
}
  else if (24 <= voto && voto < 27) {
    console.log('distinto');
}
  else if (27 <= voto && voto <= 29) {
    console.log('ottimo');
}
  else if (voto === 30) {
    console.log('eccellente');
}
  else {
    console.log('Errore! Il voto inserito non esiste!')
}
