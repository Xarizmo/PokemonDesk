import React from 'react';
import Heading from '../Heading';

import s from './PokemonCard.module.scss';

interface PokemonCardProps {
  name: string;
  attack: number;
  defense: number;
  types: string[];
  img: string;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name, attack, defense, types, img }) => {
  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        <Heading type="h2">{name}</Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{attack}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{defense}</div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          <span className={s.label}>{types[0]}</span>
        </div>
      </div>
      <div className={s.pictureWrap}>
        <img src={img} alt="Charmander" />
      </div>
    </div>
  );
};

export default PokemonCard;
