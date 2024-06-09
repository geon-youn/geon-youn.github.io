/**
 * Bottom menu for the Play page
 */

import styles from '../styles/bottommenu.module.css';
import BackButton from './BackButton';
import Mode from './Mode';

function BottomMenu() {
    return (
        <div className={styles.bottomMenu}>
            {/* Back button */}
            <div className={styles.backButton}>
                <BackButton></BackButton>
            </div>
            {/* Extra buttons */}
            <div className={styles.buttons}>
                <div className={styles.modeButton}>
                    <Mode></Mode>
                </div>
                <a
                    className={styles.linkedInButton}
                    href="https://www.linkedin.com/in/geon-youn/"
                    target="_blank"
                    rel="noreferrer"
                >
                    LinkedIn
                </a>
                <a
                    className={styles.gitHubButton}
                    href="https://github.com/geon-youn/geon-youn.github.io"
                    target="_blank"
                    rel="noreferrer"
                >
                    GitHub
                </a>
            </div>
        </div>
    );
}

export default BottomMenu;
