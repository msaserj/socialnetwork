import React, {useEffect} from 'react';
import css from "./LastMembers.module.scss"
import {Member} from "./Member/Member";
import {useAppDispatch, useAppSelector} from "../../../../hooks/hooks";
import {getMembersTC} from "../../../../redux/members-reducer";

const LastMembers = () => {
    const members = useAppSelector(state => state.members.users)
    const dispatch = useAppDispatch()

    useEffect(()=>{
        dispatch(getMembersTC())
    },[])

    return (
        <div className={css.LastMembers}>
            {members.map((m, key) => <Member key={key} name={m.name} photo={m.photos} id={m.id}/>)}
            {/*<Button onClick={()=>getMembersTC()}>set</Button>*/}
        </div>

    );
};

export default LastMembers;