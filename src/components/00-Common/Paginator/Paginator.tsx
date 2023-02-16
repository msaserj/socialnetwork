import React, { ChangeEvent, useEffect, useState } from 'react';
import css from './Paginator.module.scss';
import { Button } from '../Button/Button';
import { SelectFormik } from '../InputFormik/InputFormik';

type UsersComponentPropsType = {
  onPageChanged: (pgs: number, pageSize: number) => void;
  totalItemsCount: number;
  pageSize: number;
  currentPage: number;
  isFetching: boolean;
  reset: number;
};

export const Paginator: React.FC<UsersComponentPropsType> = ({
  onPageChanged,
  totalItemsCount,
  pageSize,
  currentPage,
  isFetching,
  reset
}) => {
  const portionSize = 5;
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  console.log(totalItemsCount);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState<number>(1);
  let [size, setSize] = useState<number>(pageSize);

  let leftPortionPageNumber = portionNumber > 0 && (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    setSize(+e.currentTarget.value);
    onPageChanged(currentPage, +e.currentTarget.value);
  };
  const selectOptions = [
    { value: 20, title: 20 },
    { value: 40, title: 40 },
    { value: 70, title: 70 },
    { value: 100, title: 100 }
  ];
  useEffect(() => {
    setPortionNumber(1);
  }, [reset]);

  return (
    <div className={css.paginator}>
      <div className={css.buttonBlock}>
        <Button
          disabled={portionNumber < 2 || isFetching}
          onClick={() => {
            setPortionNumber(portionNumber - 1); // @ts-ignore
            onPageChanged(leftPortionPageNumber - 1, size);
          }}
        >
          {'<<'}
        </Button>
      </div>

      <div className={css.pages}>
        {pages
          .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
          .map((pgs, index) => {
            return (
              <button
                disabled={isFetching}
                key={index}
                className={currentPage === pgs ? css.selectedPage : css.page}
                onClick={() => onPageChanged(pgs, size)}
              >
                {' '}
                {pgs}{' '}
              </button>
            );
          })}
      </div>
      <div className={css.buttonBlock}>
        <Button
          disabled={portionCount < portionNumber - 1 || isFetching}
          onClick={() => {
            setPortionNumber(portionNumber + 1);
            onPageChanged(rightPortionPageNumber + 1, size);
          }}
        >
          {'>>'}
        </Button>
      </div>
      <div className={css.countSelector}>
        <SelectFormik value={size} selectOptions={selectOptions} onChange={onChangeCallback} />
      </div>
    </div>
  );
};
