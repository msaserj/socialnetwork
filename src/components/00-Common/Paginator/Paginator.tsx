import React, {ChangeEvent, useState} from "react";
import css from "./Paginator.module.scss";
import {Button} from "../Button/Button";
import {SelectFormik} from "../InputFormik/InputFormik";

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
    const portionSize = 6
    let pagesCount = Math.ceil(totalItemsCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState<number>(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {

        console.log(e.currentTarget.value)
    }

    return (
        <div className={css.paginator}>
            <div className={css.buttonBlock}>

                    <Button disabled={portionNumber < 2} onClick={() => {
                        setPortionNumber(portionNumber - 1)
                    }}>PREV</Button>

            </div>

            <div className={css.pages}>
                {pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map((pgs, index) => {
                        return <span key={index} className={currentPage === pgs ? css.selectedPage : css.page}
                                     onClick={() => onPageChanged(pgs)}
                        > {pgs} </span>
                    })}
            </div>
            <div className={css.buttonBlock}>

                    <Button disabled={portionCount < portionNumber - 1} onClick={() => {
                        setPortionNumber(portionNumber + 1)
                    }}>NEXT</Button>

            </div>
            <div>
                <SelectFormik value={100} selectOptions={[{value: 20, title: 20}, {value: 40, title: 40}, {value: 70, title: 70}, {value: 100, title: 100}]} onChange={onChangeCallback}/>
            </div>
        </div>

    )
}