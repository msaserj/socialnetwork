import React from 'react';
import css from "./RightWidgets.module.scss"
import {MainWidget} from "../03-Main/MainWidget/MainWidget";
import {SiteInfo} from "../03-Main/SideWidgets/SiteInfo/SiteInfo";
import {HashBar} from "../03-Main/SideWidgets/HashTags/HashBar";


export const RightWidgets = () => {
    return (
        <div className={css.sideSection}>
            <MainWidget title={"Site Info"}><SiteInfo/></MainWidget>
            <MainWidget title={"Hash Tags"}><HashBar/></MainWidget>
        </div>
    );
};
