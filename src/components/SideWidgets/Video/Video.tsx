import React from "react";
import css from './Video.module.scss'


export const Video = () => {


    return(
        <nav className={css.video}>
            <video className={css.videoItem} controls={true} >
                <source src="https://msaserj.ru/video/lapse.mp4" type="video/mp4"/>
                <source src="https://msaserj.ru/video/lapse.mp4" type="video/mp4"/>
                Sorry, your browser doesn't support videos.
            </video>

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