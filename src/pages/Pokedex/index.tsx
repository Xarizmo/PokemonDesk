import React, { useState } from 'react';
import useData from '../../hook/getData';

import s from './Pokedex.module.scss';
import PokemonCard from '../../components/PokemonCard';
import Heading from '../../components/Heading';
import { IPokemons, PokemonsRequest } from '../../interface/pokemons';
import useDebounce from '../../hook/useDebounce';

interface IQuery {
  name?: string;
}

const Pokedex = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState<IQuery>({});
  const debouncedValue = useDebounce(searchValue, 500);
  const { data, isLoading, isError } = useData<IPokemons>('getPokemons', query, [debouncedValue]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setQuery((state: IQuery) => ({
      ...state,
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
        <div>
          <input type="text" value={searchValue} onChange={handleSearchChange} />
        </div>
        <Heading type="h1">
          {!isLoading && data && data.total} <b>Pokemons</b> for you to choose your favorite
        </Heading>
        <div className={s.pokemonsWrap}>
          {!isLoading &&
            data &&
            data.pokemons.map((item: PokemonsRequest) => {
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
