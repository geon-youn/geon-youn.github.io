import Page from './Page';
import styles from '../styles/home.module.css';
import LinkedCookie from '../components/LinkedCookie';

function Home() {
  return (
    <Page name="Home">
      <div className={styles.home}>
        <LinkedCookie></LinkedCookie>
      </div>
    </Page>
  );
}

export default Home;
