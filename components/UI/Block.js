import styles from '../blocks/Block.module.css';

const Block = (props) => {
  return (
    <section className={ styles.block }>
      <img className={ styles.image }></img>
      <h3 className={ styles.title }>{ props.title }</h3>
      <p className={ styles.text }>{ props.txt }</p>
    </section>
  );
};

export default Block;
