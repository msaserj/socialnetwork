import React from "react";
import css from './HashBar.module.css'



export const HashBar = () => {
    // const setActive = ({isActive}: {isActive: boolean}) => isActive ? css.activeLink : css.inactiveLink;
    return(
        <nav className={css.hash}>
            <h3>Community Hashtags</h3>
            <div >
                <a data-debug="#60bin (1 / 20%)" className={css.tag}
                   href="https://velikorodnov.com/dev/devmatebook/?hashtag/60bin/">
                    #60bin </a>
                <a data-debug="#60binn (1 / 20%)" className={css.tag}
                   href="https://velikorodnov.com/dev/devmatebook/?hashtag/60binn/">
                    #60binn </a>
                <a data-debug="#africa (1 / 20%)" className={css.tag}
                   href="https://velikorodnov.com/dev/devmatebook/?hashtag/africa/">
                    #africa </a>
                <a data-debug="#anan (1 / 20%)" className={css.tag}
                   href="https://velikorodnov.com/dev/devmatebook/?hashtag/anan/">
                    #anan </a>
                <a data-debug="#atama (3 / 50%)" className={css.tag}
                   href="https://velikorodnov.com/dev/devmatebook/?hashtag/atama/">
                    #atama </a>
                <a data-debug="#awesome (2 / 30%)" className={css.tag}
                   href="https://velikorodnov.com/dev/devmatebook/?hashtag/awesome/">
                    #awesome </a>
                <a data-debug="#beauty (1 / 20%)" className={css.tag}
                   href="https://velikorodnov.com/dev/devmatebook/?hashtag/beauty/">
                    #beauty </a>
                <a data-debug="#cars (1 / 20%)" className={css.tag}
                   href="https://velikorodnov.com/dev/devmatebook/?hashtag/cars/">
                    #cars </a>
                <a data-debug="#cool (2 / 30%)" className={css.tag}
                   href="https://velikorodnov.com/dev/devmatebook/?hashtag/cool/">
                    #cool </a>
                <a data-debug="#geldik (1 / 20%)" className={css.tag}
                   href="https://velikorodnov.com/dev/devmatebook/?hashtag/geldik/">
                    #geldik </a>
                <a data-debug="#hey (1 / 20%)" className={css.tag}
                   href="https://velikorodnov.com/dev/devmatebook/?hashtag/hey/">
                    #hey </a>
                <a data-debug="#hobby (1 / 20%)" className={css.tag}
                   href="https://velikorodnov.com/dev/devmatebook/?hashtag/hobby/">
                    #hobby </a>
                <a data-debug="#honeymoon (2 / 30%)" className={css.tag}
                   href="https://velikorodnov.com/dev/devmatebook/?hashtag/honeymoon/">
                    #honeymoon </a>
                <a data-debug="#markdown (1 / 20%)" className={css.tag}
                   href="https://velikorodnov.com/dev/devmatebook/?hashtag/markdown/">
                    #markdown </a>
                <a data-debug="#matebook (1 / 20%)" className={css.tag}
                   href="https://velikorodnov.com/dev/devmatebook/?hashtag/matebook/">
                    #matebook </a>
                <a data-debug="#mobile (1 / 20%)" className={css.tag}
                   href="https://velikorodnov.com/dev/devmatebook/?hashtag/mobile/">
                    #mobile </a>
                <a data-debug="#peepso (2 / 30%)" className={css.tag}
                   href="https://velikorodnov.com/dev/devmatebook/?hashtag/peepso/">
                    #peepso </a>
                <a data-debug="#prueba (1 / 20%)" className={css.tag}
                   href="https://velikorodnov.com/dev/devmatebook/?hashtag/prueba/">
                    #prueba </a>
                <a data-debug="#test1 (1 / 20%)" className={css.tag}
                   href="https://velikorodnov.com/dev/devmatebook/?hashtag/test1/">
                    #test1 </a>
                <a data-debug="#tourism (2 / 30%)" className={css.tag}
                   href="https://velikorodnov.com/dev/devmatebook/?hashtag/tourism/">
                    #tourism </a>
                <a data-debug="#tourist (3 / 50%)" className={css.tag}
                   href="https://velikorodnov.com/dev/devmatebook/?hashtag/tourist/">
                    #tourist </a>
                <a data-debug="#travel (6 / 100%)" className={css.tag}
                   href="https://velikorodnov.com/dev/devmatebook/?hashtag/travel/">
                    #travel </a>
                <a data-debug="#vide (2 / 30%)" className={css.tag}
                   href="https://velikorodnov.com/dev/devmatebook/?hashtag/vide/">
                    #vide </a>
                <a data-debug="#video (1 / 20%)" className={css.tag}
                   href="https://velikorodnov.com/dev/devmatebook/?hashtag/video/">
                    #video </a>
                <a data-debug="#videouploads (2 / 30%)" className={css.tag}
                   href="https://velikorodnov.com/dev/devmatebook/?hashtag/videouploads/">
                    #videouploads </a>
                <a data-debug="#wordpress (5 / 80%)" className={css.tag}
                   href="https://velikorodnov.com/dev/devmatebook/?hashtag/wordpress/">
                    #wordpress </a>
            </div>
            <div>
            </div>
        </nav>
    )
}