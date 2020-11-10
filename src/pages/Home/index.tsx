import React from 'react';
import Header from '../../components/Header/Header';
import Button from '../../components/Button';
import Parallax from '../../components/Parallax';
import Layout from '../../components/Layout';

import s from './Home.module.scss';
import Heading from '../../components/Heading';

const HomePage = () => {
  return (
    <div className={s.root}>
      <Header />
      <Layout>
        <Button onClick={() => {}} small>
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
