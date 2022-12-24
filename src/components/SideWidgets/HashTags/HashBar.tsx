import React from "react";
import css from './HashBar.module.css'



export const HashBar = () => {
    // const setActive = ({isActive}: {isActive: boolean}) => isActive ? css.activeLink : css.inactiveLink;
    return(
        <nav className={css.hash}>
            <h3>Community Hashtags</h3>
            <div >
                <a data-debug="#60bin (1 / 20%)" className={css.tag}
                   href="src/components/SideWidgets/HashTags/HashBar?hashtag/60bin/">
                    #60bin </a>
                <a data-debug="#60binn (1 / 20%)" className={css.tag}
                   href="src/components/SideWidgets/HashTags/HashBar?hashtag/60binn/">
                    #60binn </a>
                <a data-debug="#africa (1 / 20%)" className={css.tag}
                   href="src/components/SideWidgets/HashTags/HashBar?hashtag/africa/">
                    #africa </a>
                <a data-debug="#anan (1 / 20%)" className={css.tag}
                   href="src/components/SideWidgets/HashTags/HashBar?hashtag/anan/">
                    #anan </a>
                <a data-debug="#atama (3 / 50%)" className={css.tag}
                   href="src/components/SideWidgets/HashTags/HashBar?hashtag/atama/">
                    #atama </a>
                <a data-debug="#awesome (2 / 30%)" className={css.tag}
                   href="src/components/SideWidgets/HashTags/HashBar?hashtag/awesome/">
                    #awesome </a>
                <a data-debug="#beauty (1 / 20%)" className={css.tag}
                   href="src/components/SideWidgets/HashTags/HashBar?hashtag/beauty/">
                    #beauty </a>
                <a data-debug="#cars (1 / 20%)" className={css.tag}
                   href="src/components/SideWidgets/HashTags/HashBar?hashtag/cars/">
                    #cars </a>
                <a data-debug="#cool (2 / 30%)" className={css.tag}
                   href="src/components/SideWidgets/HashTags/HashBar?hashtag/cool/">
                    #cool </a>
                <a data-debug="#geldik (1 / 20%)" className={css.tag}
                   href="src/components/SideWidgets/HashTags/HashBar?hashtag/geldik/">
                    #geldik </a>
                <a data-debug="#hey (1 / 20%)" className={css.tag}
                   href="src/components/SideWidgets/HashTags/HashBar?hashtag/hey/">
                    #hey </a>
                <a data-debug="#hobby (1 / 20%)" className={css.tag}
                   href="src/components/SideWidgets/HashTags/HashBar?hashtag/hobby/">
                    #hobby </a>
                <a data-debug="#honeymoon (2 / 30%)" className={css.tag}
                   href="src/components/SideWidgets/HashTags/HashBar?hashtag/honeymoon/">
                    #honeymoon </a>
                <a data-debug="#markdown (1 / 20%)" className={css.tag}
                   href="src/components/SideWidgets/HashTags/HashBar?hashtag/markdown/">
                    #markdown </a>
                <a data-debug="#matebook (1 / 20%)" className={css.tag}
                   href="src/components/SideWidgets/HashTags/HashBar?hashtag/matebook/">
                    #matebook </a>
                <a data-debug="#mobile (1 / 20%)" className={css.tag}
                   href="src/components/SideWidgets/HashTags/HashBar?hashtag/mobile/">
                    #mobile </a>
                <a data-debug="#peepso (2 / 30%)" className={css.tag}
                   href="src/components/SideWidgets/HashTags/HashBar?hashtag/peepso/">
                    #peepso </a>
                <a data-debug="#prueba (1 / 20%)" className={css.tag}
                   href="src/components/SideWidgets/HashTags/HashBar?hashtag/prueba/">
                    #prueba </a>
                <a data-debug="#test1 (1 / 20%)" className={css.tag}
                   href="src/components/SideWidgets/HashTags/HashBar?hashtag/test1/">
                    #test1 </a>
                <a data-debug="#tourism (2 / 30%)" className={css.tag}
                   href="src/components/SideWidgets/HashTags/HashBar?hashtag/tourism/">
                    #tourism </a>
                <a data-debug="#tourist (3 / 50%)" className={css.tag}
                   href="src/components/SideWidgets/HashTags/HashBar?hashtag/tourist/">
                    #tourist </a>
                <a data-debug="#travel (6 / 100%)" className={css.tag}
                   href="src/components/SideWidgets/HashTags/HashBar?hashtag/travel/">
                    #travel </a>
                <a data-debug="#vide (2 / 30%)" className={css.tag}
                   href="src/components/SideWidgets/HashTags/HashBar?hashtag/vide/">
                    #vide </a>
                <a data-debug="#video (1 / 20%)" className={css.tag}
                   href="src/components/SideWidgets/HashTags/HashBar?hashtag/video/">
                    #video </a>
                <a data-debug="#videouploads (2 / 30%)" className={css.tag}
                   href="src/components/SideWidgets/HashTags/HashBar?hashtag/videouploads/">
                    #videouploads </a>
                <a data-debug="#wordpress (5 / 80%)" className={css.tag}
                   href="src/components/SideWidgets/HashTags/HashBar?hashtag/wordpress/">
                    #wordpress </a>
            </div>
            <div>
            </div>
        </nav>
    )
}