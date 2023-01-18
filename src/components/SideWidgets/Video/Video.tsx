import React, {useEffect, useRef, useState} from "react";
import css from './Video.module.scss'
import pl from "../../01-Header/AudioPlayer/lists";
import {Button} from "../../00-Common/Button/Button";


export const Video = () => {
    const playList = pl.playlist1
    const videoRef = useRef<HTMLVideoElement>(null);
    const play = () => videoRef && videoRef.current && videoRef.current.play();
    const pause = () => videoRef && videoRef.current && videoRef.current.pause();

    // const [controls, setControls] = useState(false);
    const [currentVideo, setCurrentVideo] = useState(0);


    const toggleNextVideo = () => {
        if (currentVideo >= playList.length - 1) {
            setCurrentVideo(0)
            videoRef.current!.src = playList[0].src;
            // play()
        } else {

            setCurrentVideo(prev => prev + 1)
            videoRef.current!.src = playList[currentVideo + 1].src;
            // play()
        }
    }
    const togglePreviousVideo = () => {
        if (currentVideo > 0) {
            setCurrentVideo(prev => prev - 1);
            videoRef.current!.src = playList[currentVideo - 1].src;
            // play()
        }
    }
    useEffect(()=>{
        videoRef.current!.src = playList[0].src
    }, [])

    return(
        <nav className={css.video}>
            <div className={css.controls}>
                <Button onClick={togglePreviousVideo}>Prev</Button>
                <Button onClick={toggleNextVideo}>Next</Button>
                <span className={css.title}>{playList[currentVideo].title}</span>
            </div>
            <video
                className={css.videoItem}
                src={playList[currentVideo].src}
                width="100%"
                controls={true}
                ref={videoRef}
            />
            {/*<video src="../../../assets/123-6002.mp4"  controls/>*/}
            {/*<iframe*/}
            {/*    width="100%"*/}
            {/*    height="100%"*/}
            {/*    src="../../../assets/123-6002.mp4"*/}
            {/*    frameBorder="0"*/}
            {/*    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"*/}
            {/*    allowFullScreen*/}
            {/*/>*/}
        </nav>
    )
}