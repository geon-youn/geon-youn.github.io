import styles from '../styles/cookie.module.css';

function Cookie({ onClick }) {
  return (
    <div className={styles.cookie} onClick={onClick}>
      <img
        className={styles.cookieMain}
        src="/img/icon.png"
        alt="Geon osu! logo"
      />
      <img
        className={styles.cookieGhost}
        src="/img/icon.png"
        alt="Ghost of Geon osu! logo 1"
      />
    </div>
  );
}

export default Cookie;
