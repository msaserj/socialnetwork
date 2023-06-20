import React from 'react';
import { Preloader } from './Preloader';

export default {
  title: 'Components/Preloader',
  component: Preloader
};

const Template = (args: JSX.IntrinsicAttributes) => {
  return <Preloader {...args} />;
};

export const Default = Template.bind({});
// @ts-ignore
Default.args = {};
