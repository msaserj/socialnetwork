// import React from 'react';
// import { action } from '@storybook/addon-actions';
//
// import { InputFormik } from './InputFormik';
//
// export default {
//   title: 'Input',
//   component: InputFormik,
//   argTypes: {
//     disabled: ['true', 'false']
//   }
// };
//
// const changeCallBack = action('Button pressed');
//
// export const InputFormikBaseExample = (args: any) => {
//   return <InputFormik placeholder={'aaaa'} type={'text'} {...args} />;
// };
// InputFormikBaseExample.args = {
//   placeholder: 'sddsd',
//   type: 'text',
//   htmlFor: 'test',
//   label: 'label',
//   getFieldProps: {},
//   errors: 'error'
// };
// export const InputFormikDisabled = (props: any) => {
//   return <InputFormik placeholder={'sss'} />;
// };

// InputFormik.stories.js
import React from 'react';
import { InputFormik, TextAreaFormik, CheckboxFormik, SelectFormik } from './InputFormik';

export default {
  title: 'Components/FormikInputs'
};

const InputTemplate = (
  args: JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLInputElement> &
    React.InputHTMLAttributes<HTMLInputElement> & {
      type?: string | undefined;
      htmlFor?: string | undefined;
      label?: string | undefined;
      getFieldProps?: any;
      errors?: any;
      placeholder?: string | undefined;
      children?: React.ReactNode;
      mustFilled?: boolean | undefined;
      selectOptions?: { value: string | number; title: string | number }[] | undefined;
    }
) => <InputFormik {...args} />;
const TextAreaTemplate = (
  args: JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLInputElement> &
    React.InputHTMLAttributes<HTMLInputElement> & {
      type?: string | undefined;
      htmlFor?: string | undefined;
      label?: string | undefined;
      getFieldProps?: any;
      errors?: any;
      placeholder?: string | undefined;
      children?: React.ReactNode;
      mustFilled?: boolean | undefined;
      selectOptions?: { value: string | number; title: string | number }[] | undefined;
    }
) => <TextAreaFormik {...args} />;
const CheckboxTemplate = (
  args: JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLInputElement> &
    React.InputHTMLAttributes<HTMLInputElement> & {
      type?: string | undefined;
      htmlFor?: string | undefined;
      label?: string | undefined;
      getFieldProps?: any;
      errors?: any;
      placeholder?: string | undefined;
      children?: React.ReactNode;
      mustFilled?: boolean | undefined;
      selectOptions?: { value: string | number; title: string | number }[] | undefined;
    }
) => <CheckboxFormik {...args} />;
const SelectTemplate = (
  args: JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLInputElement> &
    React.InputHTMLAttributes<HTMLInputElement> & {
      type?: string | undefined;
      htmlFor?: string | undefined;
      label?: string | undefined;
      getFieldProps?: any;
      errors?: any;
      placeholder?: string | undefined;
      children?: React.ReactNode;
      mustFilled?: boolean | undefined;
      selectOptions?: { value: string | number; title: string | number }[] | undefined;
    }
) => <SelectFormik {...args} />;

export const InputField = InputTemplate.bind({});
// @ts-ignore
InputField.args = {
  label: 'Input Field',
  htmlFor: 'inputField',
  placeholder: 'Enter value'
};

export const InputFieldMustFilled = InputTemplate.bind({});
// @ts-ignore
InputFieldMustFilled.args = {
  label: 'Input Field (Must Fill)',
  htmlFor: 'inputField',
  placeholder: 'Enter value',
  mustFilled: true
};

export const TextArea = TextAreaTemplate.bind({});
// @ts-ignore
TextArea.args = {
  label: 'Text Area',
  htmlFor: 'textArea',
  placeholder: 'Enter text'
};

export const Checkbox = CheckboxTemplate.bind({});
// @ts-ignore
Checkbox.args = {
  label: 'Checkbox',
  htmlFor: 'checkbox'
};

export const SelectField = SelectTemplate.bind({});
// @ts-ignore
SelectField.args = {
  label: 'Select Field',
  htmlFor: 'selectField',
  selectOptions: [
    { value: 'option1', title: 'Option 1' },
    { value: 'option2', title: 'Option 2' },
    { value: 'option3', title: 'Option 3' }
  ]
};
