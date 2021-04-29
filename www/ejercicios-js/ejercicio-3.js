'use strict';

/* Crea un programa que reciba un número en decimal o binario y devuelva la conversión:

Si le pasamos un nº en decimal debe retornar la conversión a binario.

Si le pasamos un nº en binario deberá devolver su equivalente decimal.

Para ello la función deberá recibir un segundo parámetro que indique la base: 10 (decimal) o 2 (binario).
No se permite utilizar el método parseInt(). */

function convert(number, base) {
    if(base === 10) {
      console.log(binarioADecimal(number));
  } else if (base === 2) {
     console.log(decimalABinario(number));
  }
}

function decimalABinario(numero) {
    return numero.toString(2);
}

function binarioADecimal(numero) {
    const string = numero.split("");

    const contador = string.map(function(val, i) {
      return i;
    }).reverse();

    const almacenandoBin = string.map(function(val, i) {
      return val * Math.pow(2, contador[i]);
    });

    let resultado = 0;

    for (let i = 0; i < numero.length; i++) {
      resultado += almacenandoBin[i]
    }

  return resultado;
}

convert('10100111001',10);