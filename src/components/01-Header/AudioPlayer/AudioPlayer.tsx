import React, {ReactNode} from 'react';
import css from "./AudioPlayer.module.scss";
import {MdFastForward, MdFastRewind, MdPause, MdPlayArrow, MdSkipNext, MdSkipPrevious} from "react-icons/md";
import {calcTime} from "../../../utils/object-helpers";


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
                <div className={css.control} onClick={backTen}><MdFastRewind/></div>

                <div className={css.control} onClick={togglePlay}>{isPlaying ? <MdPause/> : <MdPlayArrow/>}</div>

                <div className={css.control} onClick={forwardTen}><MdFastForward/></div>
                <div className={css.control} onClick={toggleNextTrack}><MdSkipNext/></div>

            </div>
            <div className={css.rangers}>
                <div className={css.progressBarBlock}>
                    <div className={css.timers}>
                        <div className={css.timer}>{calcTime(currentTime)}</div>
                        <div
                            className={css.timer}>{(duration && !isNaN(duration) && duration < 356400) ? calcTime(duration) : "00 : 00"}</div>
                    </div>
                    <div className={css.progress}>
                        <input
                            ref={progressBar}
                            className={css.progressBar}
                            type="range"
                            value={currentTime}
                            onChange={changeRange}/>
                    </div>
                </div>

                <div className={css.soundBlock}>
                    <div className={css.sound}>
                        <input
                            ref={soundBar}
                            className={css.progressBar}
                            style={{width: "80px"}}
                            id="volume-range"
                            type="range"
                            min="0"
                            max="100"
                            step="5"
                            value={volume}
                            onChange={changeVolume}
                        />
                    </div>
                    <div onClick={() => setMuted(!muted)} className={css.speaker}>{children}</div>
                </div>
            </div>
        </div>
    );
};
