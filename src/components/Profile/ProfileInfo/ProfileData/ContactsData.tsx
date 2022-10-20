import React from "react";

type ContactType = {
    contactTitle: string
    contactValue: string
}
export const Contact: React.FC<ContactType> = ({contactTitle, contactValue}) => {
    return <li>{contactTitle}: {contactValue}</li>
}