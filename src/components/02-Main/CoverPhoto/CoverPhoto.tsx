import React from 'react';
import css from "./CoverPhoto.module.scss"
import cover from "../../../assets/images/originalCover.jpg"

export const CoverPhoto = () => {
    return (
        <div className={css.coverPhoto}>
            <div className={css.photoBlock} >
                <img className={css.photo} src={cover} alt="coverPhoto"/>
            </div>
            <div className={css.coverMenu}>
                <div className={css.menuItem}>
                    Stream
                </div>
                <div className={css.menuItem}>
                    About
                </div>
            </div>

        </div>
    );
};