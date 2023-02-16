import React, { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import css from './Button.module.scss';

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type ButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type PropsType = ButtonPropsType & {
  children: ReactNode;
};

export const Button: React.FC<PropsType> = ({ children, className, ...restProps }) => {
  return (
    <button className={css.link} {...restProps}>
      {children}
    </button>
  );
};
