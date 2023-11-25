import styles from '../styles/song.module.css';
import Icon from '@mdi/react';
import { mdiStar } from '@mdi/js';

function Song({ style, song }) {
  return (
    <div className={styles.song} style={style}>
      <div className={styles.songDetails}>
        <div className={styles.songTitle}>{song.title}</div>
        <div
          className={styles.songAuthors}
        >{`${song.author} // ${song.mapper}`}</div>
        <div className={styles.songDifficulty}>{song.difficulty}</div>
        <div className={styles.songStars}>
          {Array.from(Array(10).keys()).map((dummy, j) => {
            const scale =
              j + 1 < song.stars
                ? 1
                : j + 1 === Math.ceil(song.stars)
                ? (song.stars % 1) / 2 + 0.5
                : 0.5;
            return (
              <Icon
                key={j}
                path={mdiStar}
                style={{
                  opacity: j + 1 > Math.ceil(song.stars) ? 0.5 : 1,
                  minWidth: 'min(1.5vw, 1.5vh)',
                  minHeight: 'min(1.5vw, 1.5vh)',
                  transform: `scale(${scale})`,
                }}
              ></Icon>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Song;
