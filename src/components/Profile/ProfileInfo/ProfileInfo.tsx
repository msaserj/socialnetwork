import React from "react";
import classes from "./ProfileInfo.module.css"

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={classes.bgc} src="http://location-la-batie-montsaleon.fr/layout/img/entete.jpg"
                     alt="la_batie"/>
            </div>
            <div className={classes.descriptionBlock}>
                ava + description
            </div>
        </div>)
}