import React from "react";
import {MessageItemType} from "../../../../redux/dialogs-reducer";

type MessagessType = {
    messagess: MessageItemType[]
}

export const Messages: React.FC<MessagessType> = (
    {messagess}
    ) => {
    return (
        <div>
            messages
            {messagess && messagess.map((e)=>{
                return(
                    <div style={{border: "1px solid red", margin: "5px"}} key={e.id}>
                        <div style={{padding: "5px"}}>data {new Date(e.addedAt).toLocaleString()}</div>
                        <p style={{padding: "5px"}}>message {e.body}</p>
                        <div style={{padding: "5px"}}>senderName {e.senderName}</div>
                        <div style={{padding: "5px"}}>viewed {e.viewed}</div>
                    </div>
                )
            })}
        </div>

    )
}
