import React from 'react';
import { MainWidget } from '../03-Main/MainWidget/MainWidget';
import { SiteInfo } from '../SideWidgets/SiteInfo/SiteInfo';
import { HashBar } from '../SideWidgets/HashTags/HashBar';
import css from './RightWidgets.module.scss';

export const RightWidgets = () => {
  return (
    <div className={css.sideSection}>
      <MainWidget title={'Site Info'}>
        <SiteInfo />
      </MainWidget>
      <MainWidget title={'Hash Tag Generator'}>
        <HashBar />
      </MainWidget>
    </div>
  );
};
