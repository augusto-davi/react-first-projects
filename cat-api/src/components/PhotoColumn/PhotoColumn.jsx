import { useState, useEffect } from 'react';
import style from './PhotoColumn.module.css';

function Column({ tag }) {
  const [cats, setCats] = useState([]);

  const getAPIData = async () => {
    const response = await fetch(`https://cataas.com/api/cats?tags=${tag}`);
    const data = await response.json();
    console.log(data);
    setCats(data);
  };

  useEffect(() => {
    getAPIData();
  }, []);

  return (
    <div className={style.Column}>
      {cats.map(({ id, tags }) => (
        <figure className={style.imgWrapper} key={id}>
          <img
            className={style.imgContent}
            src={`https://cataas.com/cat/${id}`}
            alt='A cat'
          />
          <figcaption className={style.imgCaption}>
            Tag: <span className={style.imgTag}>{tags[0]}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export default Column;
