import styles from './button.module.css';

function Button(props) {
  return (
    <button className={`${styles.button} ${props.w100 ? styles.w100 : ''}`}>
      {props.children}
    </button>
  );
}

export default Button;
