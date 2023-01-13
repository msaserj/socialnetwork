import React from "react";
import css from './MusicPlayList.module.css'
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";
import pl from "../../01-Header/AudioPlayer/lists"
import {currentTrackAC} from "../../../redux/audioPlayer-reducer";


export const MusicPlayList = () => {

    const playList = pl.playlist2
    const dispatch = useAppDispatch()

    const currentTrack = useAppSelector(state => state.audioPlayer.currentTrack)

    const changeTrack = (index: any) => {
      dispatch(currentTrackAC(index))
        console.log(index)
    }


    return(
        <nav className={css.hash}>
            {
                playList.map((p, index)=>{
                    return <>
                    <div onClick={()=>changeTrack(index)} style={{fontSize: "16px", margin: "5px"}}>{p.title}</div>
                    </>
                })
            }
        </nav>
    )
}