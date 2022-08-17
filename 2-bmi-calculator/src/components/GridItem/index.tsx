import { Level } from '../../helpers/bmi';
import styles from './GridItem.module.css';
import upImage from '../../assets/up.png';
import downImage from '../../assets/down.png';

type Props = {
  item: Level;
};

export const GridItem = ({ item }: Props) => {
  return (
    <div className={styles.main} style={{ backgroundColor: item.color }}>
      <div className={styles.gridIcon}>
        <img src={item.icon === 'up' ? upImage : downImage} alt='' width='30' />
      </div>
      <div className={styles.gridTitle}>{item.title}</div>
      {item.yourBMI && (
        <div className={styles.yourBMI}>Seu IMC é de {item.yourBMI} kg/m^2</div>
      )}
      <div className={styles.gridInfo}>
        <>
          IMC está entre <strong>{item.bmi[0]}</strong> e{' '}
          <strong>{item.bmi[1]}</strong>
        </>
      </div>
    </div>
  );
};
