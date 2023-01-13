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
    const playList = pl.playlist1

    const dispatch = useAppDispatch()
    const muted = useAppSelector(state => state.audioPlayer.muted)
    const isPlaying = useAppSelector(state => state.audioPlayer.isPlaying)
    const duration = useAppSelector(state => state.audioPlayer.duration)
    const currentTime = useAppSelector(state => state.audioPlayer.currentTime)
    const volume = useAppSelector(state => state.audioPlayer.volume)
    const currentTrack = useAppSelector(state => state.audioPlayer.currentTrack)

    console.log("audio")

    const audioPlayer = useRef<HTMLAudioElement>(null) // ref for audio
    const progressBar = useRef<any>(null) // ref for progress bar
    const soundBar = useRef<any>() // ref for sound range
    const animationRef = useRef<any>() // ref for animate knobby

    const togglePlay = () => {
        const prevPlay = isPlaying;
        dispatch(playingAC(!prevPlay))
        // setIsPlaying(!prevPlay)
        if (!prevPlay) {
            audioPlayer.current?.play()
            animationRef.current = requestAnimationFrame(whilePlaying)
        } else {
            audioPlayer.current?.pause()
            cancelAnimationFrame(animationRef.current)
        }
    }
    const whilePlaying = () => {
        progressBar.current.value = audioPlayer.current?.currentTime
        changePlayerCurrentTime()
        animationRef.current = requestAnimationFrame(whilePlaying)

    }
    const changeRange = () => {
        audioPlayer.current!.currentTime = progressBar.current.value;
        changePlayerCurrentTime()
    }
    const changePlayerCurrentTime = () => {
        const widthBar = progressBar.current.value / duration * 100
        progressBar.current.style.setProperty('--seek-before-width', `${widthBar}%`)
        dispatch(currentTimeAC(progressBar.current.value))
    }

    const backTen = () => {

        audioPlayer.current!.currentTime -= 10;
    }
    const forwardTen = () => {
        audioPlayer.current!.currentTime += 10;
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
    const toggleNextTrack = () => {
      if(currentTrack >= playList.length - 1) {
          dispatch(currentTrackAC(0))
          audioPlayer.current!.src = playList[0];
          audioPlayer.current!.play()
      } else {

          dispatch(currentTrackAC(currentTrack + 1))
          audioPlayer.current!.src = playList[currentTrack + 1];
          audioPlayer.current!.play()
      }
    }
    const togglePreviousTrack = () => {
        if(currentTrack > 0) {
            dispatch(currentTrackAC(currentTrack - 1));
            audioPlayer.current!.src = playList[currentTrack - 1];
            audioPlayer.current!.play()
        }
    }
    const toggleMuted = () => {
      dispatch(mutedAC(!muted))
    }

    useEffect(() => {

        const seconds = Math.floor(audioPlayer.current!.duration)
        dispatch(durationAC(seconds))
        progressBar.current.max = seconds;

    }, [audioPlayer?.current?.onloadedmetadata, audioPlayer?.current?.readyState])
    useEffect(()=>{
        audioPlayer.current!.src = playList[currentTrack]
    },[])
    useEffect(() => {
        if (audioPlayer) {

            const widthBar = progressBar.current.value/duration *100
            progressBar.current.style.setProperty('--seek-before-width', `${widthBar}%`)
        }
    }, [currentTime])

    useEffect(() => {
        if (audioPlayer) {
            audioPlayer.current!.volume = volume / 100
            const widthBar = soundBar.current.value
            soundBar.current.style.setProperty('--seek-before-width', `${widthBar}%`)
        }
    }, [volume])
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
