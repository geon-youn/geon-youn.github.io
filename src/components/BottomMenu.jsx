import styles from '../styles/bottommenu.module.css';
import BackButton from './BackButton';
import Mode from './Mode';

function BottomMenu() {
  return (
    <footer className={styles.bottomMenu}>
      <div className={styles.backButton}>
        <BackButton></BackButton>
      </div>
      <div className={styles.modeButton}>
        <Mode></Mode>
      </div>
    </footer>
  );
}

export default BottomMenu;
