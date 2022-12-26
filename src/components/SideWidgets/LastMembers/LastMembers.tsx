import React, {useEffect} from 'react';
import css from "./LastMembers.module.scss"
import {Member} from "./Member/Member";
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";
import {getMembersTC} from "../../../redux/members-reducer";
import {PreloaderSmall} from "../../00-Common/PreloaderSmall/PreloaderSmall";

const LastMembers = () => {
    const members = useAppSelector(state => state.members.users)
    const dispatch = useAppDispatch()
    const isFetching = useAppSelector(state => state.usersPage.isFetching)

    useEffect(()=>{
        dispatch(getMembersTC())
    },[dispatch])

    return (
        <div className={css.LastMembers}>
            {isFetching? <PreloaderSmall/>: null}
            {members.map((m, key) => <Member key={key} name={m.name} photo={m.photos} id={m.id}/>)}
            {/*<Button onClick={()=>getMembersTC()}>set</Button>*/}
        </div>

    );
};

export default LastMembers;