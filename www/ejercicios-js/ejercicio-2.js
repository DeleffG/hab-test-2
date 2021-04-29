'use strict';

/* Crea un programa que imprima cada 5 segundos el tiempo desde la ejecución del mismo. 
Formatea el tiempo para que se muestren los segundos, los minutos, las horas y los días desde la ejecución. */

let seconds = 0;
 setInterval(function(){ 
  seconds += 5;
  console.log(secondsToDhms(seconds));

}, 5000);

function secondsToDhms(seconds) {
  seconds = Number(seconds);
  let d = Math.floor(seconds / (360024));
  let h = Math.floor(seconds % (360024) / 3600);
  let m = Math.floor(seconds % 3600 / 60);
  let s = Math.floor(seconds % 60);

  let dias = d > 0 ? d +  " días, " : "";
  let horas = h > 0 ? h + " horas, " : "";
  let minutos = m > 0 ? m + " minutos, ": "";
  let segundos = s > 0 ? s + " segundos" : "";

  return dias + horas + minutos + segundos;
}