import React, {useEffect} from 'react';
import css from "./LastMembers.module.scss"
import {Member} from "./Member/Member";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {getUsersTC} from "../../redux/users-reducer";

const LastMembers = () => {
    const members = useAppSelector(state => state.usersPage.users)
    const dispatch = useAppDispatch()
    useEffect(()=>{
        dispatch(getUsersTC(1, 6, {term: "",friend: null}))
    })
    return (
        <div className={css.LastMembers}>
            <Member usersComponent={members[0]}/>
            <Member usersComponent={members[1]}/>
            <Member usersComponent={members[2]}/>
            <Member usersComponent={members[3]}/>
            <Member usersComponent={members[4]}/>
            <Member usersComponent={members[5]}/>
        </div>
    );
};

export default LastMembers;