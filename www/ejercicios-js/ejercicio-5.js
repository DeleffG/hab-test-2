'use strict';

/* Consigue una lista con los nombres de los personajes de la serie Rick and Morty que aparecen en los episodios 
lanzados en el mes de enero (el año no importa).
Utiliza llamadas a la API: 'https://rickandmortyapi.com/api/' */

getCharacters()

async function getCharacters () {
  const episodes = await getEpisodes()
  // console.log(episodes)
  let characters = []
  for (const episode of episodes.results) {
    if (!episode.air_date.includes('January')) {
      continue
    } else {
      for (const character of episode.characters) {
      if (characters.includes(character)) {
      continue
    } else {
      characters.push(character)
      }
    }
  }
}

  for (let i = 0; i < characters.length; i++) {
    characters[i] = await fetch(characters[i])
    .then(response => response.json())
    .then(data => {
    // console.log(data)
    return data.name
  })
}
  console.log(characters)
  return characters
}

async function getEpisodes () {
  let characters = []
  const episodes = await fetch('https://rickandmortyapi.com/api/episode')
    .then(response => response.json())
    .then(data => {
    return data
  })
  return episodes;
}