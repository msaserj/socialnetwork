import React, { ChangeEvent, useState } from 'react';
import css from './HashBar.module.css';
import { InputFormik } from '../../00-Common/InputFormik/InputFormik';
import { AuthButton } from '../../00-Common/AuthButton/AuthButton';

export const HashBar = () => {
  const [text, setText] = useState('');

  const [hastags, setHashtags] = useState([{ tag: '#test1' }, { tag: '#test2' }]);
  function onChangeHandler(e: ChangeEvent<HTMLInputElement>) {
    setText(e.currentTarget.value);
  }
  function generateHashtag() {
    if (text.trim() !== '') {
      const strUpperCase = text
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('');
      const strWithHashtag = '#' + strUpperCase.trim();

      return strWithHashtag.length > 20 ? false : setHashtags([...hastags, { tag: strWithHashtag }]);
    }
    return false;
  }
  return (
    <nav className={css.hash}>
      <div className={css.form}>
        <InputFormik onChange={onChangeHandler} value={text} placeholder={'enter text'} type={'text'} />
        <AuthButton onClick={generateHashtag}>Generate</AuthButton>
      </div>

      <div>
        {hastags.map((e, index) => {
          return (
            <a key={index} className={css.tag} href={`https://www.google.com/search?q=%23${e.tag.slice(1)}`}>
              {e.tag}
            </a>
          );
        })}
      </div>
      <div></div>
    </nav>
  );
};
