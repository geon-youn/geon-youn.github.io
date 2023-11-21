import styles from '../styles/bottommenu.module.css';
import BackButton from './BackButton';
import Mode from './Mode';

function BottomMenu() {
  return (
    <footer className={styles.bottomMenu}>
      <div className={styles.backButton}>
        <BackButton></BackButton>
      </div>
      <div className={styles.buttons}>
        <div className={styles.modeButton}>
          <Mode></Mode>
        </div>
        <a
          className={styles.linkedInButton}
          href="https://www.linkedin.com/in/geon-youn/"
          target="_blank"
          rel='noreferrer'
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default BottomMenu;
