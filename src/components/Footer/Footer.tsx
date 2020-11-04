import React from 'react';

import s from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={s.footer}>
      <div className={s.wrapper}>
        <span>
          Make with{' '}
          <span role="img" aria-labelledby="mindblow">
            🤯
          </span>
        </span>
        <span>Ours Team</span>
      </div>
    </div>
  );
};

export default Footer;
