import React from 'react';
import preload from '../../../assets/images/ajax-loader.gif';

export const PreloaderSmall = () => {
  return (
    <div>
      <img src={preload} alt="smallLoader" />
    </div>
  );
};
