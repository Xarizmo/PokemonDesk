import React from 'react';
import cn from 'classnames';

import s from './App.module.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <Header />
      <div className={cn(s.header, 'color')}>This is App component! Hello world!!!</div>
      <Footer />
    </>
  );
};

export default App;
