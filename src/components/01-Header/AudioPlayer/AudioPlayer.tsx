import React, {ReactNode} from 'react';
import css from "./AudioPlayer.module.scss";
import {MdFastForward, MdFastRewind, MdPause, MdPlayArrow, MdSkipNext, MdSkipPrevious} from "react-icons/md";
import {calcTime} from "../../../utils/object-helpers";
import {SoundBar} from "./SoundBar";


type AudioPlayerType = {
    muted: boolean
    volume: number
    togglePreviousTrack: ()=> void
    toggleNextTrack: ()=> void
    backTen: ()=> void
    forwardTen: ()=> void
    togglePlay: ()=> void
    isPlaying: boolean
    currentTime: number
    duration: number
    progressBar: any
    changeRange: any

    audioPlayer: any
    children: ReactNode
    changeVolume: (newVolume: any)=> void
    soundBar: any
    setMuted: (meted: boolean)=>void
}

export const AudioPlayer:React.FC<AudioPlayerType> = (
    {muted, togglePreviousTrack, toggleNextTrack, backTen, forwardTen, togglePlay, isPlaying, volume,
    currentTime, duration, progressBar, changeRange, audioPlayer, children, changeVolume, soundBar, setMuted}
) => {
    return (
        <div className={css.player}>
            <audio
                muted={muted}
                ref={audioPlayer}
                preload="metadata"/>
            <div className={css.controls}>
                <div className={css.control} onClick={togglePreviousTrack}><MdSkipPrevious/></div>
                <div className={`${css.control} ${css.rewind}`} onClick={backTen}><MdFastRewind/></div>

                <div className={css.control} onClick={togglePlay}>{isPlaying ? <MdPause/> : <MdPlayArrow/>}</div>

                <div className={`${css.control} ${css.rewind}`} onClick={forwardTen}><MdFastForward/></div>
                <div className={css.control} onClick={toggleNextTrack}><MdSkipNext/></div>
                <div className={css.soundBlockMobile}>
                    <SoundBar soundBar={soundBar} volume={volume} changeVolume={changeVolume} setMuted={setMuted} muted={muted} children={children}/>
                </div>

            </div>
            <div className={css.rangers}>
                <div className={css.progressBarBlock}>
                    <div className={css.timers}>
                        <div className={css.timer}>
                            {calcTime(currentTime)}</div>
                        <div className={css.timer}>
                            {(duration && !isNaN(duration) && duration < 35640) ? calcTime(duration) : "00 : 00"}</div>
                    </div>
                    <div className={css.progress}>
                        <input
                            min={0}
                            max={100}
                            ref={progressBar}
                            className={css.progressBar}
                            type="range"
                            value={(duration && !isNaN(duration) && duration < 356400) ? (currentTime/duration*100) : 0}
                            onChange={changeRange}/>
                    </div>
                </div>

                <div className={css.soundBlock}>
                    <SoundBar soundBar={soundBar} volume={volume} changeVolume={changeVolume} setMuted={setMuted} muted={muted} children={children}/>
                </div>
            </div>
        </div>
    );
};
