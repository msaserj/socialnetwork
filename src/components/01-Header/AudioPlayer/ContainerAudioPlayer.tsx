import React, {useEffect, useRef} from 'react';
import {MdVolumeDown, MdVolumeMute, MdVolumeOff, MdVolumeUp} from "react-icons/md";
import pl from "./lists"
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";
import {
    currentTimeAC,
    currentTrackAC,
    durationAC,
    mutedAC,
    playingAC,
    volumeAC
} from "../../../redux/audioPlayer-reducer";
import {AudioPlayer} from "./AudioPlayer";

export const ContainerAudioPlayer = () => {
    const playList = pl.playlist2

    const dispatch = useAppDispatch()
    const muted = useAppSelector(state => state.audioPlayer.muted)
    const isPlaying = useAppSelector(state => state.audioPlayer.isPlaying)
    const duration = useAppSelector(state => state.audioPlayer.duration)
    const currentTime = useAppSelector(state => state.audioPlayer.currentTime)
    const volume = useAppSelector(state => state.audioPlayer.volume)
    const currentTrack = useAppSelector(state => state.audioPlayer.currentTrack)
    const selectTrack = useAppSelector(state => state.audioPlayer.selectTrack)


    const audioPlayer = useRef<HTMLAudioElement>(null) // ref for audio
    const progressBar = useRef<any>(null) // ref for progress bar
    const soundBar = useRef<any>() // ref for sound range

    const togglePlay = () => {
        dispatch(playingAC(!isPlaying))
        if (!isPlaying) {
            audioPlayer.current!.src = playList[currentTrack].src
            audioPlayer.current?.play()
            dispatch(durationAC(Math.floor(audioPlayer.current!.duration)))
        } else {
            audioPlayer.current?.pause()
        }
    }
    const toggleSelectTrack = () => {
        audioPlayer.current!.src = playList[currentTrack].src
        dispatch(durationAC(Math.floor(audioPlayer.current!.duration)))
        isPlaying && audioPlayer.current?.play()
    }
    const changeRange = () => {
        audioPlayer.current!.currentTime = duration / 100 * progressBar.current.value;
        dispatch(currentTimeAC(audioPlayer.current!.currentTime))
    }

    function changeVolume(newVolume: any) {
        if (audioPlayer.current) {
            dispatch(volumeAC(newVolume.target.valueAsNumber));
        }
    }

    function VolumeSpeakers() {
        return muted
            ? <MdVolumeOff/>
            : volume <= 25 ? <MdVolumeMute/>
                : volume <= 70 ? <MdVolumeDown/>
                    : <MdVolumeUp/>
    }

    const toggleMuted = () => {
        dispatch(mutedAC(!muted))
    }

    const backTen = () => {
        audioPlayer.current!.currentTime -= 10;
    }
    const forwardTen = () => {
        audioPlayer.current!.currentTime += 10;
    }
    const toggleNextTrack = () => {
        if (currentTrack >= playList.length - 1) {
            dispatch(currentTrackAC(0))
            audioPlayer.current!.src = playList[0].src;
            audioPlayer.current!.play()
        } else {

            dispatch(currentTrackAC(currentTrack + 1))
            audioPlayer.current!.src = playList[currentTrack + 1].src;
            audioPlayer.current!.play()
        }
    }
    const togglePreviousTrack = () => {
        if (currentTrack > 0) {
            dispatch(currentTrackAC(currentTrack - 1));
            audioPlayer.current!.src = playList[currentTrack - 1].src;
            audioPlayer.current!.play()
        }
    }
    const progressBarMover = () => {
        progressBar.current.style.setProperty('--seek-before-width',
            `${(duration && !isNaN(duration) && duration < 356400 && duration) ? (currentTime / duration * 100) : 0}%`)
    }
    isPlaying && progressBarMover()
    useEffect(() => {
        if (audioPlayer) {
            audioPlayer.current!.volume = volume / 100
            const widthBar = soundBar.current.value
            soundBar.current.style.setProperty('--seek-before-width', `${widthBar}%`)
        }
        if (isPlaying) {
            const intervalId = setInterval(() => {
                dispatch(currentTimeAC(Math.floor(audioPlayer.current!.currentTime)))
                dispatch(durationAC(Math.floor(audioPlayer.current!.duration)))
            }, 1000);
            return () => {
                clearInterval(intervalId);
            };
        }
    }, [volume, isPlaying])


    useEffect(() => {
        toggleSelectTrack()
    }, [selectTrack])
    return (
        <>
            <AudioPlayer
                muted={muted}
                volume={volume}
                togglePreviousTrack={togglePreviousTrack}
                toggleNextTrack={toggleNextTrack}
                backTen={backTen}
                forwardTen={forwardTen}
                togglePlay={togglePlay}
                isPlaying={isPlaying}
                currentTime={currentTime}
                duration={duration}
                progressBar={progressBar}
                changeRange={changeRange}
                audioPlayer={audioPlayer}
                changeVolume={changeVolume}
                soundBar={soundBar}
                setMuted={toggleMuted}><VolumeSpeakers/></AudioPlayer>
        </>

    );
};
