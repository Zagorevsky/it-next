import styles from '../blocks/ButtonReadMore.module.css';

const ButtonReadMore = (props) => {
  return (
    <button className={ styles.button }>{ props.txtButton } </button>
  );
};

export default ButtonReadMore;
