import styles from '../blocks/Block.module.css';

const Block = (props) => {
  return (
    <section className={ styles.block }>
      <img ></img>
      <h3>{ props.title }</h3>
      <p>{ props.txt }</p>
    </section>
  );
};

export default Block;
