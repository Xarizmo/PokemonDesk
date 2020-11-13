import React, { useEffect, useState } from 'react';
import PokemonCard from '../../components/PokemonCard';

import s from './Pokedex.module.scss';
import Heading from '../../components/Heading';

const usePokemons = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getPokemons = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('http://zar.hosthot.ru/api/v1/pokemons');
        const result = await response.json();

        setData(result);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getPokemons();
  }, []);

  return {
    data,
    isLoading,
    isError,
  };
};

const Pokedex = () => {
  const { data, isLoading, isError } = usePokemons();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Smth wrong!</div>;
  }

  return (
    <>
      <div className={s.root}>
        <Heading type="h1">
          {data.total} <b>Pokemons</b> for you to choose your favorite
        </Heading>
        <div className={s.pokemonsWrap}>
          {data.pokemons.map((item) => {
            const {
              id,
              name,
              stats: { attack, defense },
              types,
              img,
            } = item;

            return <PokemonCard key={id} name={name} attack={attack} defense={defense} types={types} img={img} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Pokedex;
