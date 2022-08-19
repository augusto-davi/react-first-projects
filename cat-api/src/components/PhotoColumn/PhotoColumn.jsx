import { useState, useEffect } from 'react';
import PhotoCard from '../PhotoCard/PhotoCard';
import style from './PhotoColumn.module.css';

function Column({ tag }) {
  const [cats, setCats] = useState([]);

  const getAPIData = async () => {
    const response = await fetch(`https://cataas.com/api/cats?tags=${tag}`);
    const data = await response.json();
    setCats(data);
  };

  useEffect(() => {
    getAPIData();
  }, []);

  return (
    <div className={style.Column}>
      {cats.map(({ id, tags }, index) => (
        <PhotoCard id={id} tags={tags} index={index} />
      ))}
    </div>
  );
}

export default Column;
