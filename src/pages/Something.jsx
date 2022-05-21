import React, { useEffect, useState, useRef } from 'react';
import { useParams } from "react-router-dom";

import fetchPokemon from '../api/pokemon';

import useFetch from '../hooks/useFetch';

import {useGlobalContext} from '../contexts/GlobalContext';

const Something = () => {
    const { id } = useParams();


    const {hasPokemon, getPokemon, addPokemon, modPokemon} = useGlobalContext();

    const {load, response, error, isLoading} = useFetch({
        fetchFn: () => fetchPokemon(id),
        immediate: false
    });

    const [pokemon, setPokemon] = useState(null);

    const nameInput = useRef();
    const heightInput = useRef();

    useEffect(() => {
        if(hasPokemon(id)) {
            setPokemon(
                getPokemon(id)
            )
        } else {
            load();
        }
    }, [])

    useEffect(() => {
        if(response) {
            addPokemon(response);
            setPokemon(response);
        }
    }, [response]);

    useEffect(() => {
        if(pokemon) {
            if(nameInput.current && heightInput.current) {
                nameInput.current.value = pokemon.name;
                heightInput.current.value = pokemon.height;
            }
        }
    }, [pokemon])


    const onSubmit = (event) => {
        event.preventDefault();
        modPokemon(id, 'name', nameInput.current.value);
        modPokemon(id, 'height', heightInput.current.value);
    }

    if(error) {
        return <h1>There is a network error.</h1>
    }

    if(isLoading || pokemon === null) {
        return <h1>The data is loading...</h1>
    }

    return (
        <h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="name">{pokemon.name}</label>
                    <input type="text" name="name" ref={nameInput} />
                </div>
                <div>
                    <label htmlFor="height">{pokemon.height}</label>
                    <input type="text" name="height" ref={heightInput} />
                </div>
                <button>Save</button>
            </form>
        </h1>
    )
};

export default Something