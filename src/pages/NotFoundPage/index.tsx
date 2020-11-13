import React from 'react';
import { navigate } from 'hookrouter';
import Button from '../../components/Button';

import s from './NotFoundPage.module.scss';

import TeamRocket from './assets/Team_Rocket_trio.png';
import { LinkEnum } from '../../routes';

const NotFoundPage = () => {
  return (
    <div className={s.root}>
      <div className={s.wrap}>
        <div className={s.text}>404</div>
        <div className={s.layer}>
          <img src={TeamRocket} alt="Team Rocket" />
          <div className={s.subTitle}>
            <span>The rocket team</span> has won this time.
          </div>
          <Button yellow onClick={() => navigate(LinkEnum.HOME)}>
            Return
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
