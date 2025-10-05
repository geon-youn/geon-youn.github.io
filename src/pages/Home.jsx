import styles from '../styles/home.module.css';
import LinkedCookie from '../components/LinkedCookie';

function Home() {
    return (
        <div className={styles.home}>
            <LinkedCookie></LinkedCookie>
        </div>
    );
}

export default Home;
