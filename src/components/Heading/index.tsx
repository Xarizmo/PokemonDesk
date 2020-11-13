import React from 'react';

import s from './Heading.module.scss';

interface HeadingProps {
  type: string;
}

const Heading: React.FC<HeadingProps> = ({ children, type }) => {
  switch (type) {
    case 'h1':
      return <h1 className={s.root}>{children}</h1>;
    case 'h2':
      return <h2 className={s.root}>{children}</h2>;
    case 'h3':
      return <h3 className={s.root}>{children}</h3>;
    case 'h4':
      return <h4 className={s.root}>{children}</h4>;
    case 'h5':
      return <h5 className={s.root}>{children}</h5>;
    case 'h6':
      return <h6 className={s.root}>{children}</h6>;
    default:
      return <h1 className={s.root}>{children}</h1>;
  }
};

export default Heading;
