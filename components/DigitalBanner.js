import styles from './blocks/DigitalBanner.module.css';
import ButtonReadMore from './UI/ButtonReadMore';

const DigitalBanner = () => {
  return (
    <section className={ styles.container }>
      <div className={ styles.banner }>
        <div className={ styles.block }>
          <h2 className={ styles.h1 }>Поставщик цифровых решений для ваших брендов </h2>
          <p className={ styles.p }>Я нарушаю все границы, если они возникают
            на пути развития Твоего проекта!</p>
          <ButtonReadMore txtButton="БОЛЬШЕ ИНФОРМАЦИИ" />
        </div>
        <div className={ styles.image }></div>
      </div>
    </section>
  );
};

export default DigitalBanner;
