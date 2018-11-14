// https://us.api.battle.net/wow/data/character/races?locale=en_US&apikey=a52v5fm7m4jusnvbhee4d9xc4wuckxg9
import axios from "axios";

export function fetchPokeData({ path = "pokemon", selectedPoke = "" } = {}) {
  const POKEMON_BASE_PATH = "https://pokeapi.co/api/v2/";
  const URL = `${POKEMON_BASE_PATH}${path}/${selectedPoke}/`;

  return axios
    .get(URL)
    .then(response => {
      return response.data;
    })
    .catch(err => {
      throw new Error(err);
    });
}
