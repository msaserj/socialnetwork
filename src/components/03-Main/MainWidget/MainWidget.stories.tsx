// MainWidget.stories.js
import React from 'react';
import { MainWidget } from './MainWidget';

export default {
  title: 'Components/MainWidget',
  component: MainWidget
};

const Template = (args: JSX.IntrinsicAttributes & { children: React.ReactNode; title: string }) => (
  <MainWidget {...args} />
);

export const Default = Template.bind({});
// @ts-ignore
Default.args = {
  title: 'Widget Title',
  children: <div>Widget Content</div>
};
