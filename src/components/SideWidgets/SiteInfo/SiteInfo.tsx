import React from 'react';
import css from './SiteInfo.module.scss';

export const SiteInfo = () => {
  return (
    <>
      <div className={css.header}>
        <strong>Demo login & password:</strong>
      </div>
      <div className={css.text}>
        <p>If you want to see a regular user account, please login with:</p>
        <div className={css.login}>
          <p>
            Login: <strong> free@samuraijs.com</strong>
          </p>
          <p>
            Password: <strong>free</strong>
          </p>
        </div>
      </div>
    </>
  );
};
