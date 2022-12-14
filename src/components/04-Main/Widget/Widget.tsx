import React, {ReactNode} from 'react';
import css from "./Widget.module.scss"

type WidgetType = {
    children: ReactNode
    title: string
    rightSide: boolean
    secondBlock: boolean
}


export const Widget: React.FC<WidgetType> = ({children, title, rightSide, secondBlock}) => {

    const positionBlock = rightSide? css.rightSide : css.leftSide
    const second = secondBlock? css.second : css.first
    return (
        <div className={`${css.widget} ${positionBlock} ${second}`}>
            <div className={css.titleBlock}>
                <h2 className={css.title}>{title}</h2>
            </div>
            <div className={css.childrenBlock}>
                {children}
            </div>
        </div>
    );
};
