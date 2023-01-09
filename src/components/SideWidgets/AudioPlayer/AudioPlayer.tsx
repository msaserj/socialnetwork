import React, {useEffect, useRef, useState} from 'react';
import {Button} from "../../00-Common/Button/Button";
import css from "./AudioPlayer.module.scss"

export const AudioPlayer = () => {

    const [isPlaying, setIsPlaying] = useState<boolean>(false)
    const [duration, setDuration] = useState<number>(0)
    const [currentTime, setCurrentTime] = useState<number>(0)

    const audioPlayer = useRef<HTMLAudioElement>(null) // ref for audio
    const progressBar = useRef<any>(null) // ref for progress bar
    const animationRef = useRef<any>() // ref for animate knobby

    const togglePlay = () => {
        const prevPlay = isPlaying;
        setIsPlaying(!prevPlay)
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
    const calcTime = (secs: number) => {
        const minutes = Math.floor(secs / 60);
        const returnedMinutes = minutes < 10 ? `0${minutes}` : minutes;
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : seconds;
        return `${returnedMinutes} : ${returnedSeconds}`
    }
    const changeRange = () => {
        audioPlayer.current!.currentTime = progressBar.current.value;
        changePlayerCurrentTime()
    }
    const changePlayerCurrentTime = () => {
        const widthBar = progressBar.current.value / duration * 100
        progressBar.current.style.setProperty('--seek-before-width', `${widthBar}%`)
        setCurrentTime(progressBar.current.value)
    }

    const backTen = () => {
      progressBar.current.value = Number(progressBar.current.value - 10);
      changeRange()
    }
    const forwardTen = () => {
        progressBar.current.value = Number(progressBar.current.value + 10);
        changeRange()
    }

    useEffect(() => {
        const seconds = Math.floor(audioPlayer.current!.duration)
        setDuration(seconds);
        progressBar.current.max = seconds;

    }, [audioPlayer?.current?.onloadedmetadata, audioPlayer?.current?.readyState])

    useEffect(() => {
        console.log("")
        audioPlayer.current!.volume = 0.4
    }, [])
    return (
        <div>
            <audio
                ref={audioPlayer}
                src="http://sc.schwarze-welle.de:7500/;&type=mp3"
                // src="http://mds.kallisto.ru/hell/2020/02/Devid_Keller_-_Vosstanie_peshehodov.mp3"
                preload="metadata"></audio>

            <Button onClick={backTen}>{"<<"}</Button>
            <Button onClick={togglePlay}>
                {isPlaying ? "Pause" : " Play "}
            </Button>
            <Button onClick={forwardTen}>{">>"}</Button>

            {/*    current time*/}
            <div>{calcTime(currentTime)}</div>

            {/*progress bar*/}
            <div>
                <input
                    ref={progressBar}
                    className={css.progressBar}
                    type="range"
                    defaultValue={0}
                    onChange={changeRange}/>
            </div>

            {/*    duration*/}
            <div>{(duration && !isNaN(duration) && duration < 356400) ? calcTime(duration) : "00 : 00"}</div>
        </div>
    );
};
