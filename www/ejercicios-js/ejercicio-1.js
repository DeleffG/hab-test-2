'use strict';

/* Escribe una función que devuelva un array de usuarios. De cada usuario guardaremos el username, el nombre 
y apellido, el sexo, el país, el email y un enlace a su foto de perfil.
El número de usuarios a obtener se debe indicar con un parámetro de dicha función.
Sírvete de la API: https://randomuser.me/ */

async function arrayUsuarios(n) {
  const apiUrl = `https://randomuser.me/api/?results=${n}`;

  const requestData = await fetch(apiUrl);
  const userData = await requestData.json();
  const apiUser = userData.results;

  let users = [];

  for (let user of apiUser) {
    users.push(
      {
        username: user.login.username, 
        nombre: user.name.first, 
        apellido: user.name.last, 
        sexo: user.gender, 
        pais: user.location.country,
        email: user.email,
        imagen: user.picture.medium
      }
    ) 
  }
  return users;
};
let user;
arrayUsuarios(5).then(result => console.log(result));