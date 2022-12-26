import React from "react";
import css from "./Preloader.module.scss"

export const Preloader = () => {
  const divStyle = {
    height: '100px'
  }
  return <div className={css.preloader}>
      <img alt="preloader" style={divStyle}
    src="https://v.fastcdn.co/u/430e104e/57579327-0-Loaders-3.svg"/>
        </div>
}