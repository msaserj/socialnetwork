import React, { useEffect } from 'react';
import css from './Music.module.scss';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import pl from '../../01-Header/AudioPlayer/lists';
import { currentTrackAC, playingAC, selectTrackAC } from '../../../redux/audioPlayer-reducer';
import { useNavigate } from 'react-router-dom';

export const Music = () => {
  const playList = pl.playlist2;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const selectTrack = useAppSelector(state => state.audioPlayer.selectTrack);
  const currentTrack = useAppSelector(state => state.audioPlayer.currentTrack);
  const userId = useAppSelector(state => state.auth.data.id);

  const changeTrack = (index: any) => {
    dispatch(playingAC(true));
    dispatch(currentTrackAC(index));
    dispatch(selectTrackAC(!selectTrack));
  };
  useEffect(() => {
    !userId && navigate('/');
  }, []);

  return (
    <nav className={css.hash}>
      {playList.map((p, index) => {
        const resultStyle = index === currentTrack ? css.selected : '';
        return (
          <div
            className={`${css.playList} ${resultStyle}`}
            key={index}
            onClick={() => changeTrack(index)}
            style={{ fontSize: '16px', margin: '5px' }}
          >
            {p.title}
          </div>
        );
      })}

      <a target="_blank" href="http://www.4duk.ru/">
        <img src="http://4duk.ru/images/banner/pakanedagonyat.gif" alt="4duk" />
      </a>
    </nav>
  );
};
