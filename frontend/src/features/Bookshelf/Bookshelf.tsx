import React from 'react';
import Shelf from '../Shelf/Shelf';
import style from './Bookshelf.module.css'

function Bookshelf() {
  return (
    <div className={style.container}>
      <div className={style.wall}/>
      <div>
        <Shelf />
        <Shelf />
        <Shelf />
        <Shelf />
        <Shelf />
        <Shelf />
      </div>
      <div className={style.wall}/>
    </div>
  );
}

export default Bookshelf;
