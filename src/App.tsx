import React from 'react';

import s from './App.module.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className={s.app}>
      <Header />
      <div className={s.main}>Main content</div>
      <Footer />
    </div>
  );
};

export default App;
