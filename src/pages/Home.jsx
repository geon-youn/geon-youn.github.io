import Page from './Page';
import Cookie from '../components/Cookie';
import styles from '../styles/home.module.css';

function Home() {
  return (
    <Page name="Home">
      <div className={styles.home}>
        <Cookie></Cookie>
      </div>
    </Page>
  );
}

export default Home;
