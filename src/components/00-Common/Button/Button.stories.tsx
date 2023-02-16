import React from 'react';
import { action } from '@storybook/addon-actions';

import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    disabled: ['true', 'false']
  }
};

const changeCallBack = action('Button pressed');

export const ButtonBaseExample = (args: any) => {
  return <Button onClick={changeCallBack} {...args} />;
};
ButtonBaseExample.args = {
  children: 'Button',
  disabled: false
};
export const ButtonDisabled = (props: any) => {
  return (
    <Button onClick={changeCallBack} disabled>
      Disabled button
    </Button>
  );
};
