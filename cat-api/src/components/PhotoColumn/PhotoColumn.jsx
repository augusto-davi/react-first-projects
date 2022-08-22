import { useState, useEffect } from 'react';
import PhotoCard from '../PhotoCard/PhotoCard';
import style from './PhotoColumn.module.css';

function PhotoColumn({ tag }) {
  const [cats, setCats] = useState([]);
  const [apiStatus, setApiStatus] = useState(true);

  const getAPIData = async () => {
    try {
      const response = await fetch(`https://cataas.com/api/cats?tags=${tag}`);
      const data = await response.json();
      setCats(data);
    } catch (error) {
      setApiStatus(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getAPIData();
  }, []);

  if (!apiStatus) {
    return <PhotoCard id={'/cat_img_error.jpg'} tags={['#plsComeBackLater']} />;
  }
  return (
    <div className={style.Column}>
      {cats.map(({ id, tags }, index) => (
        <PhotoCard
          id={`https://cataas.com/cat/${id}`}
          tags={tags}
          key={index}
        />
      ))}
    </div>
  );
}

export default PhotoColumn;
