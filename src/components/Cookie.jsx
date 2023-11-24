import styles from '../styles/cookie.module.css';

function Cookie({ onClick, duration = '0.5s' }) {
  const style = {
    'animationDuration': duration,
  };

  return (
    <div className={styles.cookie} onClick={onClick}>
      <img
        className={styles.cookieMain}
        style={style}
        src="/img/icon.png"
        alt="Geon osu! logo"
      />
      <img
        className={styles.cookieGhost}
        style={style}
        src="/img/icon.png"
        alt="Ghost of Geon osu! logo 1"
      />
    </div>
  );
}

export default Cookie;
