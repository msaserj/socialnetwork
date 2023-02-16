import React, { ReactNode } from 'react';
import css from './AudioPlayer.module.scss';

type SoundBarType = {
  soundBar: any;
  volume: number;
  changeVolume: (newVolume: any) => void;
  children: ReactNode;
  setMuted: (meted: boolean) => void;
  muted: boolean;
};

export const SoundBar: React.FC<SoundBarType> = ({ soundBar, volume, changeVolume, setMuted, muted, children }) => {
  return (
    <>
      <div className={css.sound}>
        <input
          ref={soundBar}
          className={css.progressBar}
          style={{ width: '80px' }}
          id="volume-range"
          type="range"
          min="0"
          max="100"
          step="5"
          value={volume}
          onChange={changeVolume}
        />
      </div>
      <div onClick={() => setMuted(!muted)} className={css.speaker}>
        {children}
      </div>
    </>
  );
};
