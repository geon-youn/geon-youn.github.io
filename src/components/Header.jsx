import styles from '../styles/header.module.css';
import links from '../common/links';
import { useState, useEffect } from 'react';

const titles = [
  'McMaster Student',
  'Computer Science Undergraduate',
  'Varsity Rower',
  'Full Stack Developer',
  'osu! Player',
  'Lost Ark Player',
];

function Header({ page }) {
  const [titleIdx, setTitleIdx] = useState(0);

  useEffect(() => {
    const key = setInterval(() => {
      setTitleIdx((current) => {
        if (current === titles.length - 1) {
          return 0;
        } else return current + 1;
      });
    }, 2000);

    return () => {
      clearInterval(key);
    };
  }, []);

  return (
    <div className={styles.header}>
      <div className={styles.name}>
        <h1>Geon&nbsp;</h1>
        <a href="/" className={styles.home}>
          <img href="/" src="/img/xD.png" alt="Geon" className={styles.home} />
        </a>
        <h1>&nbsp;Youn</h1>
      </div>
      <div className={styles.titles}>
        {titles.map((title, idx) => {
          return (
            <h1
              className={`${styles.title}${
                idx === titleIdx ? '' : ' ' + styles.titleHidden
              }`}
              key={title}
            >
              {title}
            </h1>
          );
        })}
      </div>
      <div className={styles.links}>
        {links.map((link) => {
          return (
            <a
              className={`${styles.link}${
                page === link.text ? ' ' + styles.linkActive : ''
              }`}
              key={link.text}
              {...link.data}
            >
              {link.text}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Header;
