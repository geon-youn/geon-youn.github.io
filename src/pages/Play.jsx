import Page from './Page';
import Cookie from '../components/Cookie';
import BottomMenu from '../components/BottomMenu';
import styles from '../styles/play.module.css';
import TopMenu from '../components/TopMenu';

function Play() {
  return (
    <Page name="Play">
      <TopMenu></TopMenu>
      <div className={styles.darkenBackground}></div>
      <BottomMenu></BottomMenu>
      <div className={styles.bottomLeftCookie}>
        <Cookie></Cookie>
      </div>
    </Page>
  );
}

export default Play;
