import Transition from '../components/Transition';
import styles from '../styles/page.module.css';
import { useEffect, useState } from 'react';

function Page({ children, showBack }) {
  // hide transition after a few seconds
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const key = setTimeout(() => {
      setHidden(true);
    }, 1500);
    return () => {
      clearTimeout(key);
    };
  }, []);

  return (
    <>
      {/* transition */}
      {hidden ? null : <Transition hidden={hidden} />}

      {/* main content */}
      {children}

      {/* back button */}
      {showBack ? (
        <a className={styles.back} href="/">
          <div id={styles.back1}>B</div>
          <div id={styles.back2}>a</div>
          <div id={styles.back3}>c</div>
          <div id={styles.back4}>k</div>
        </a>
      ) : null}
    </>
  );
}

export default Page;
