import Page from './Page';
import Cookie from '../components/Cookie';
import BottomMenu from '../components/BottomMenu';
import styles from '../styles/play.module.css';
import { useState, useEffect, useCallback, useMemo } from 'react';
import ModeContext from '../contexts/ModeContext';

const bellCurve = (x) => {
  return Math.exp(Math.pow(x, 2) / -2) / Math.sqrt(2 * Math.PI);
};

function Play() {
  const [mode, setMode] = useState(0);
  const [currentSong, setCurrentSong] = useState(0);
  const [drag, setDrag] = useState(false);
  const [prevTouch, setPrevTouch] = useState(null);
  const modeValue = { mode, setMode };
  const songList = useMemo(() => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], []);
  const returnNewSong = useMemo(() => (currentSong, delta) => {
    return currentSong + delta;
  }, []);

  useEffect(() => {
    const key = setInterval(
      () =>
        setCurrentSong((currentSong) => {
          if (currentSong < 0) {
            return 0;
          } else if (currentSong > songList.length - 1) {
            return songList.length - 1;
          }
          return Math.round(currentSong);
        }),
      1000
    );

    return () => {
      clearInterval(key);
    };
  }, [songList.length]);

  // Move songlist through wheel
  const handleWheel = useCallback(
    (e) => {
      const delta = e.deltaY * 0.01;
      setCurrentSong((currentSong) => returnNewSong(currentSong, delta));
    },
    [returnNewSong]
  );

  const handleDrag = useCallback(
    (e) => {
      const delta = e.movementY * -0.01;
      setCurrentSong((currentSong) => returnNewSong(currentSong, delta));
    },
    [returnNewSong]
  );

  const handleTouch = useCallback(
    (e) => {
      const touch = e.touches[0];

      if (prevTouch) {
        const delta = (prevTouch.pageY - touch.pageY) * 0.01;
        setCurrentSong((currentSong) => returnNewSong(currentSong, delta));
      }

      setPrevTouch(() => touch);
    },
    [returnNewSong, prevTouch]
  );

  const handleKey = useCallback(
    (e) => {
      const roundedCurrentSong = Math.round(currentSong);
      const delta =
        e.key === 'ArrowDown' || e.key === 'ArrowRight'
          ? 1
          : e.key === 'ArrowUp' || e.key === 'ArrowLeft'
          ? -1
          : 0;
      setCurrentSong(() => returnNewSong(roundedCurrentSong, delta));
    },
    [returnNewSong, currentSong]
  );

  useEffect(() => {
    window.addEventListener('wheel', handleWheel);

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [handleWheel]);

  useEffect(() => {
    window.addEventListener('keydown', handleKey);

    return () => {
      window.removeEventListener('keydown', handleKey);
    };
  }, [handleKey]);

  return (
    <Page name="Play">
      <ModeContext.Provider value={modeValue}>
        <div className={styles.darkenBackground}></div>
        <div
          className={styles.songs}
          style={{
            transform: `translateY(${currentSong * -17 + 50 - 7.5}vh)`,
          }}
          onMouseDown={() => setDrag(true)}
          onMouseLeave={() => setDrag(false)}
          onMouseUp={() => setDrag(false)}
          onTouchStart={() => setDrag(true)}
          onTouchEnd={() => {
            setDrag(false);
            setPrevTouch(null);
          }}
          onTouchMove={(e) => (drag ? handleTouch(e) : null)}
          onMouseMove={(e) => (drag ? handleDrag(e) : null)}
        >
          {songList.map((i, idx) => {
            const bell =
              bellCurve(Math.round(currentSong - idx)) * Math.sqrt(2 * Math.PI);
            return (
              <div
                className={styles.song}
                key={i}
                style={{
                  transformOrigin: `right center`,
                  transform: `translateX(${-bell * 5 + 5}vw)`,
                }}
                onClick={() => setCurrentSong(() => idx)}
              >
                {idx}
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
