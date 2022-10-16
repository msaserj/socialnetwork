import React from "react";
import css from "./Paginator.module.css";

type UsersComponentPropsType = {
    onPageChanged: (pgs: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
}

export const Paginator: React.FC<UsersComponentPropsType> = (
    {
        onPageChanged,
        totalUsersCount,
        pageSize,
        currentPage
    }) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            {pages.map((pgs, index) => {
                return <span key={index} className={currentPage === pgs ? css.selectedPage : ""}
                             onClick={() => onPageChanged(pgs)}
                > {pgs} </span>
            })}
        </div>
    )
}