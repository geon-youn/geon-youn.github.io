import styles from '../styles/transition.module.css';

function Transition({ hidden }) {
  return hidden ? (
    <></>
  ) : (
    <div className={styles.transition}>
      <div className={styles.blur}></div>
      <img className={styles.transitionImg} src="/icon.png" alt="Geon osu! logo" />
    </div>
  );
}

export default Transition;
