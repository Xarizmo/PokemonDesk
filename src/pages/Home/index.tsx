import React from 'react';
import { navigate } from 'hookrouter';
import Button from '../../components/Button';
import Parallax from '../../components/Parallax';

import Layout from '../../components/Layout';
import s from './Home.module.scss';
import Heading from '../../components/Heading';
import { LinkEnum } from '../../routes';

const HomePage = () => {
  return (
    <div className={s.root}>
      <Layout>
        <Button onClick={() => navigate(LinkEnum.POKEDEX)} small>
          See pokemons
        </Button>
        <Heading type="h2">Main Header!</Heading>
        <div>
          <Parallax />
        </div>
      </Layout>
    </div>
  );
};

export default HomePage;
