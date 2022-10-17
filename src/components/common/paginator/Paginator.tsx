import React, {useState} from "react";
import css from "./Paginator.module.css";

type UsersComponentPropsType = {
    onPageChanged: (pgs: number) => void
    totalItemsCount: number
    pageSize: number
    currentPage: number
}

export const Paginator: React.FC<UsersComponentPropsType> = (
    {
        onPageChanged,
        totalItemsCount,
        pageSize,
        currentPage,
    }) => {
    const portionSize = 10
    let pagesCount = Math.ceil(totalItemsCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let portionCount = Math.ceil(pagesCount/portionSize);
    let [portionNumber, setPortionNumber] = useState<number>(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return (
        <div className={css.paginator}>
            { portionNumber > 1 &&
                <button onClick={()=>{setPortionNumber(portionNumber-1)}}>PREV</button>
            }
            {pages
                .filter(p=>p >= leftPortionPageNumber && p<=rightPortionPageNumber)
                .map((pgs, index) => {
                return <span key={index} className={currentPage === pgs ? css.selectedPage : ""}
                             onClick={() => onPageChanged(pgs)}
                > {pgs} </span>
            })}
            { portionCount > portionNumber &&
                <button onClick={()=>{setPortionNumber(portionNumber+1)}}>NEXT</button>
            }
        </div>
    )
}