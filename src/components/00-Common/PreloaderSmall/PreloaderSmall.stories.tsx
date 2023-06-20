import React from 'react';
import { PreloaderSmall } from './PreloaderSmall';

export default {
  title: 'Components/PreloaderSmall',
  component: PreloaderSmall
};

const Template = (args: JSX.IntrinsicAttributes) => <PreloaderSmall {...args} />;

export const Default = Template.bind({});
// @ts-ignore
Default.args = {};
