import React from 'react';
import { action } from '@storybook/addon-actions';

import { InputFormik } from './InputFormik';

export default {
  title: 'Input',
  component: InputFormik,
  argTypes: {
    disabled: ['true', 'false']
  }
};

const changeCallBack = action('Button pressed');

export const InputFormikBaseExample = (args: any) => {
  return <InputFormik placeholder={'aaaa'} type={'text'} {...args} />;
};
InputFormikBaseExample.args = {
  placeholder: 'sddsd',
  type: 'text',
  htmlFor: 'test',
  label: 'label',
  getFieldProps: {},
  errors: 'error'
};
export const InputFormikDisabled = (props: any) => {
  return <InputFormik placeholder={'sss'} />;
};
