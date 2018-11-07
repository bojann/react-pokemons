// https://us.api.battle.net/wow/data/character/races?locale=en_US&apikey=a52v5fm7m4jusnvbhee4d9xc4wuckxg9
import axios from 'axios'

export function fetchPokemons(path = 'pokemon') {
  const POKEMON_BASE_PATH = 'https://pokeapi.co/api/v2/'
  const URL = POKEMON_BASE_PATH + path + '/'
  
  return axios.get(URL)
    .then( response => {
       return response.data;
    })
    .catch(err => {
      throw new Error(err) 
    })
}