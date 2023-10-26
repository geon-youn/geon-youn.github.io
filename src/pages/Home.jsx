/**
 * --- Home Page ---
 *
 * osu! logo that expands upon click to show links to
 *  - About
 *  - Projects
 *  - Contact
 *  - GitHub
 *
 */

import Page from './Page';
import Cookie from '../components/Cookie';
import styles from '../styles/home.module.css';

function Home() {
  return (
    <Page home={true}>
      <div className={styles.home}>
        <Cookie></Cookie>
      </div>
    </Page>
  );
}

export default Home;
