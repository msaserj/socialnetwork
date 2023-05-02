import React from 'react';
import css from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={css.footerBlock}>
      <div className={css.footerContainer}>
        <div className={css.social}>
          <a href="https://github.com/msaserj/inc-socialnetwork">GitHub</a>
          <a href="https://www.linkedin.com/in/msaserj">LinkedIn</a>
          <a href="https://msaserj.ru">msaserj</a>
        </div>
        <h3 className={css.rights}>
          © 2022. This layout is borrowed from <a href="https://velikorodnov.com/dev/devmatebook/">Matebook</a>
        </h3>
      </div>
    </footer>
  );
};
