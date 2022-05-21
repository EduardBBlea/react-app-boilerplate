import { POKEMON_API } from "./config";

const computeSinglePokemonAPi = (id) => {
    return `${POKEMON_API}/${id}`;
}

const fetchPokemon = (id) => {
    return fetch(computeSinglePokemonAPi(id)).then((response) => {
        return response.json();
    })
}

export default fetchPokemon;