import styles from './blocks/BigBanner.module.css';
import ButtonReadMore from './UI/ButtonReadMore';

const BigBanner = () => {
  return (
    <section className={ styles.container }>
      <div className={ styles.banner }>
        <div></div>
        <div className={ styles.block }>
          <h1 >Мое творчество - это твой успех </h1>
          <p>Я нарушаю все границы, если они возникают
            на нашем пути развития Твоего проекта!</p>
          <ButtonReadMore txtButton="ПОДРОБНЕЕ"/>
        </div>
      </div>
    </section>
  );
};

export default BigBanner;
