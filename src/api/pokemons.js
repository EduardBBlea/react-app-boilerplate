import { POKEMON_API } from "./config";

const fetchPokemons = () => {
    return fetch(POKEMON_API).then((response) => {
        return response.json();
    })
}

export default fetchPokemons;