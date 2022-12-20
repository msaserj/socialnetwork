import React from 'react';
import css from "./SiteInfo.module.scss"

export const SiteInfo = () => {
    return (
        <>
            <div className={css.header}>
                <strong>Dear HR`s and TechLid`s, login below to see all the features:</strong>
            </div>
            <div className={css.text}>
                <p>If you want to see a regular user account, please login with:</p>
                <div className={css.login}>
                    <p>Login: <strong>login</strong></p>
                    <p>Password: <strong>pass</strong></p>
                </div>

            </div>
        </>

    );
};
