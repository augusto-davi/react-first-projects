import { useState, useEffect } from 'react';
import style from './Column.module.css';

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
      {cats.map(({ id }) => (
        <figure key={id}>
          <img src={`https://cataas.com/cat/${id}`} alt='A cat' />
          <figcaption>Cat</figcaption>
        </figure>
      ))}
    </div>
  );
}

export default Column;
