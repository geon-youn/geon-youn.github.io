import Page from './Page';
import Cookie from '../components/Cookie';
import BottomMenu from '../components/BottomMenu';
import styles from '../styles/play.module.css';
import { useState, useEffect, useCallback, useMemo } from 'react';
import ModeContext from '../contexts/ModeContext';

const bellCurve = (x) => {
  return Math.exp(Math.pow(x, 2) / (-2)) / Math.sqrt(2 * Math.PI)
}

function Play() {
  const [mode, setMode] = useState(0);
  const [currentSong, setCurrentSong] = useState(0);
  const modeValue = { mode, setMode };
  const songList = useMemo(() => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], []);

  const handleWheel = useCallback(
    (e) => {
      const deltaSong = (e.deltaY < 0 ? -1 : 1);
      setCurrentSong((currentSong) => {
        const newSong = currentSong + deltaSong;
        if (newSong <= 0) {
          return 0;
        } else if (newSong >= songList.length - 1) {
          return songList.length - 1;
        }
        return newSong;
      });
    },
    [songList]
  );

  useEffect(() => {
    window.addEventListener('wheel', handleWheel);

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [handleWheel]);

  return (
    <Page name="Play">
      <ModeContext.Provider value={modeValue}>
        <div className={styles.darkenBackground}></div>
        <div
          className={styles.songs}
          style={{
            transform: `translateY(${currentSong * (-17) + 50 - 7.5}vh)`,
          }}
        >
          {songList.map((i, idx) => {
            return (
              <div className={styles.song} key={i} style={{
                transform: `translateX(${-bellCurve((currentSong - idx)) * 10 + 5}vw)`
              }}>
                a
              </div>
            );
          })}
        </div>
        <BottomMenu></BottomMenu>
        <a
          className={styles.bottomLeftCookie}
          href="https://osu.ppy.sh/users/geon"
          target="_blank"
          rel="noreferrer"
        >
          <Cookie></Cookie>
        </a>
      </ModeContext.Provider>
    </Page>
  );
}

export default Play;
