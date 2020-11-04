import React from 'react';

import s from './Header.module.scss';
import PokemonLogo from '../../assets/logo.svg';

const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.wrapper}>
        <PokemonLogo />
        <div className={s.nav}>
          <h3 className={s.active}>Home</h3>
          <h3>Pokédex</h3>
          <h3>Legendaries</h3>
          <h3>Documentation</h3>
        </div>
      </div>
    </div>
  );
};

export default Header;
