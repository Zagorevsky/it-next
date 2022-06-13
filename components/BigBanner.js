import styles from './blocks/BigBanner.module.css';
import ButtonReadMore from './UI/ButtonReadMore';

const BigBanner = () => {
  return (
    <section className={ styles.container }>
      <div className={ styles.banner }>
        <div></div>
        <div className={ styles.block }>
          <h1 className={ styles.h1 }>Мое web-творчество - это твой бизнес успех </h1>
          <p className={ styles.p }>Я нарушаю все границы, если они возникают
            на пути развития Твоего проекта!</p>
          <ButtonReadMore txtButton="ПОДРОБНЕЕ"/>
        </div>
      </div>
    </section>
  );
};

export default BigBanner;
