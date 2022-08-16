import styles from './App.module.css';
import poweredImage from './assets/powered.png';

const App = () => {
  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt='Logo' width={150} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC</h1>
          <p>
            IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela
            Organização Mundial de Saúde para calcular o peso ideal de cada
            pessoa.
          </p>
          <input
            type='number'
            placeholder='Digite a sua altura em metros. Ex.: 1.5'
            value={}
            onChange={}
          />
        </div>
        <div className={styles.rightSide}>...</div>
      </div>
    </div>
  );
};

export default App;
