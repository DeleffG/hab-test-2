'use strict';

/* Escribe una función que, al recibir un array como parámetro, elimine los strings repetidos del mismo.
No se permite hacer uso de Set ni Array.from(). */

const array = [
  'A-Jay',
  'Manuel',
  'Manuel',
  'Eddie',
  'A-Jay',
  'Su',
  'Reean',
  'Manuel',
  'A-Jay',
  'Zacharie',
  'Zacharie',
  'Tyra',
  'Rishi',
  'Arun',
  'Kenton',
];

function trimArray(array) {
  let encontrado = false;
  const nuevoArray = [];
  array.forEach(actual => {
    nuevoArray.forEach(nuevo => {
      if (actual === nuevo) {
        encontrado = true;
        }
    })
    if (encontrado === false) {
      nuevoArray.push(actual);
    }
    encontrado = false;
  })
  console.log(nuevoArray);
}

trimArray(array);