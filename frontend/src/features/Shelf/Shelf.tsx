import React from 'react';
import Book from '../Book/Book';
import style from './Shelf.module.css'

function Shelf() {
  return (
    <>
      <div className={style.container}>
        <Book />
        <Book />
        <Book />
      </div>
      <div className={style.shelf} />
    </>
  );
}

export default Shelf;
