import React, {ReactNode} from 'react';
import css from "./ProfileWidget.module.scss"

type WidgetType = {
    children: ReactNode
    title: string
}


export const ProfileWidget: React.FC<WidgetType> = ({children, title}) => {

    return (
        <div className={css.widget}>
            <div className={css.titleBlock}>
                <h2 className={css.title}>{title}</h2>
            </div>
            <div className={css.childrenBlock}>
                {children}
            </div>
        </div>
    );
};
