import { useEffect, useState } from "react";

const useGlobalState = () => {
    const [pokemons, setPokemons] = useState(
        JSON.parse(localStorage.getItem('pokemons')) || []
    );

    const addPokemon = (pokemon) => {
        setPokemons([
            ...pokemons,
            pokemon
        ])
    }

    const getPokemon = (id) => {
        return pokemons.find((pokemon) => {
            return pokemon.id === parseInt(id);
        })
    }

    const hasPokemon = (id) => {
        return getPokemon(id) !== undefined;
    }

    const modPokemon = (id, property, value) => {
        const pokemon = getPokemon(id);
        pokemon[property] = value;
        setPokemons([...pokemons]);
    }

    useEffect(() => {
        localStorage.setItem('pokemons', JSON.stringify(pokemons));
    }, [pokemons]);

    return {
        pokemons,
        addPokemon,
        getPokemon,
        hasPokemon,
        modPokemon
    }
}

export default useGlobalState;