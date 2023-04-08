import React from 'react';
import { action } from '@storybook/addon-actions';

import { AuthButton } from './AuthButton';

export default {
  title: 'Button',
  component: AuthButton,
  argTypes: {
    disabled: ['true', 'false']
  }
};

const changeCallBack = action('Button pressed');

export const AuthButtonBaseExample = (args: any) => {
  return <AuthButton onClick={changeCallBack} {...args} />;
};
AuthButtonBaseExample.args = {
  children: 'Button',
  disabled: false
};
export const AuthButtonDisabled = (props: any) => {
  return (
    <AuthButton onClick={changeCallBack} disabled>
      Disabled button
    </AuthButton>
  );
};
