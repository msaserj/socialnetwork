import React from "react";
import css from './Music.module.scss'
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";
import pl from "../../01-Header/AudioPlayer/lists"
import {currentTrackAC, playingAC, selectTrackAC} from "../../../redux/audioPlayer-reducer";


export const Music = () => {

    const playList = pl.playlist2
    const dispatch = useAppDispatch()
    const selectTrack = useAppSelector(state => state.audioPlayer.selectTrack)
    const currentTrack = useAppSelector(state => state.audioPlayer.currentTrack)

    const changeTrack = (index: any) => {
        dispatch(playingAC(true))
      dispatch(currentTrackAC(index))
      dispatch(selectTrackAC(!selectTrack))
    }

    return(
        <nav className={css.hash}>
            {
                playList.map((p, index)=>{
                    // @ts-ignore
                    const resultStyle = index === currentTrack? css.selected : ''
                    return <div
                        className={`${css.playList} ${resultStyle}`}
                        key={index}
                        onClick={()=>changeTrack(index)}
                        style={{fontSize: "16px", margin: "5px"}}>{p.title}</div>
                })
            }
        </nav>
    )
}