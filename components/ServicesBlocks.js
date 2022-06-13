import styles from './blocks/ServicesBlocks.module.css';
import Block from './UI/Block';

const ServicesBlocks = (props) => {
  return (
    <section className={ styles.container }>
     <ul className="elements">
          {/* {props.block.map(({ key, ...props }) => (<Block key={key} {...props} />))} */}
        </ul>
    </section>
  );
};

export default ServicesBlocks;
