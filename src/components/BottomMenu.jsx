import styles from '../styles/bottommenu.module.css';
import BackButton from './BackButton';

function BottomMenu() {
  return <footer className={styles.bottomMenu}>
    <BackButton></BackButton>
  </footer>;
}

export default BottomMenu;
