import React from "react";

type ContactType = {
    contactTitle: string
    contactValue: string
}
export const Contact: React.FC<ContactType> = ({contactTitle, contactValue}) => {
    if (!contactValue) {
        return null
    }
    return <li>{contactTitle}:  <a target="_blank" href={contactValue}>{contactTitle}</a></li>
}

// <a target="_blank" href="https://it-incubator.ru/"><img className={css.logo} src={logo} alt="logo"/></a>