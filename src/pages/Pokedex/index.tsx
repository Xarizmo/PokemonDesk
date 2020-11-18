import React, { useState } from 'react';
import useData from '../../hook/getData';

import s from './Pokedex.module.scss';
import PokemonCard from '../../components/PokemonCard';
import Heading from '../../components/Heading';

const Pokedex = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState({});

  const { data, isLoading, isError } = useData('getPokemons', query, [searchValue]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setQuery((i) => ({
      ...i,
      name: e.target.value,
    }));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something wrong!</div>;
  }

  return (
    <>
      <div className={s.root}>
        <Heading type="h1">
          {!isLoading && data.total} <b>Pokemons</b> for you to choose your favorite
        </Heading>
        <div>
          <input type="text" value={searchValue} onChange={handleSearchChange} />
        </div>
        <div className={s.pokemonsWrap}>
          {!isLoading &&
            data.pokemons.map((item) => {
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
