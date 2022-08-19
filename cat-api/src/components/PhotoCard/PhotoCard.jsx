import React from 'react';
import style from './PhotoCard.module.css';

export default function PhotoCard({ id, tags, index }) {
  return (
    <figure className={style.imgWrapper} key={index}>
      <img
        className={style.imgContent}
        src={`https://cataas.com/cat/${id}`}
        alt='A cat'
      />
      <figcaption className={style.imgCaption}>
        Tag: <span className={style.imgTag}>{tags[0]}</span>
      </figcaption>
    </figure>
  );
}
