'use strict';

// Crea un cronómetro que permita ponerlo en marcha, pararlo y resetearlo.

let horas = `00`,
  minutos = `00`,
  segundos = `00`,
  chronometerDisplay = document.querySelector(`[data-chronometer]`),
  chronometerCall

function chronometer() {
  segundos ++

  if (segundos < 10) segundos = `0` + segundos
  if (segundos > 59) {
    segundos = `00`
    minutos++
  if (minutos < 10) minutos = `0` + minutos
    }

  if (minutos > 59) {
    minutos = `00`
    horas ++
  if (horas < 10) horas = `0` + horas
    }

    chronometerDisplay.textContent = `${horas}:${minutos}:${segundos}`
};

play.onclick = (event) => {
  chronometerCall = setInterval(chronometer, 1000)
  event.target.setAttribute(`desactivado`,``)
};

pause.onclick = () => {
  clearInterval(chronometerCall)
  play.removeAttribute(`desactivado`)
};

reset.onclick = () => {
  clearInterval(chronometerCall)
  play.removeAttribute(`desactivado`)
  chronometerDisplay.textContent = `00:00:00`
  horas = `00`,
    minutos = `00`,
    segundos = `00`
};