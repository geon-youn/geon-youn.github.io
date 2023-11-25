import Page from './Page';
import Cookie from '../components/Cookie';
import BottomMenu from '../components/BottomMenu';
import styles from '../styles/play.module.css';
import { useState, useEffect, useCallback, useMemo } from 'react';
import ModeContext from '../contexts/ModeContext';
import { modesData } from '../common/modes';
import Icon from '@mdi/react';
import { mdiStar } from '@mdi/js';

const bellCurve = (x) => {
  return Math.exp(Math.pow(x, 2) / -2) / Math.sqrt(2 * Math.PI);
};

function Play() {
  const [mode, setMode] = useState(0);
  const [currentSong, setCurrentSong] = useState(0);
  const [drag, setDrag] = useState(false);
  const [prevTouch, setPrevTouch] = useState(null);
  const modeValue = { mode, setMode };
  const songList = modesData[mode];
  const returnNewSong = useMemo(
    () => (currentSong, delta) => {
      return currentSong + delta;
    },
    []
  );

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
            const current = Math.round(currentSong) === idx;
            return (
              <div
                className={styles.song}
                key={i}
                style={{
                  transformOrigin: `right center`,
                  transform: `translateX(${-bell * (current ? 5 : 2) + 5}vw)`,
                  color: current ? 'black' : `white`,
                  backgroundColor: current ? '#f1f1f1' : '#e36808',
                  margin: current ? 'min(1vw, 1vh) 0' : null,
                }}
                onClick={() => setCurrentSong(() => idx)}
              >
                <div className={styles.songDetails}>
                  <div className={styles.songTitle}>{i.title}</div>
                  <div
                    className={styles.songAuthors}
                  >{`${i.author} // ${i.mapper}`}</div>
                  <div className={styles.songDifficulty}>{i.difficulty}</div>
                  <div className={styles.songStars}>
                    {Array.from(Array(10).keys()).map((d, idx) => {
                      const starSize =
                        (idx + 1 < i.stars
                          ? 1
                          : idx + 1 === Math.floor(i.stars)
                          ? (i.stars % 1) / 2 + 0.5
                          : 0.5) * 2;
                      return (
                        <Icon
                          key={i.stars + i.title}
                          path={mdiStar}
                          size={`min(${starSize}vw, ${starSize}vh)`}
                          style={{
                            opacity: idx + 1 > Math.ceil(i.stars) ? 0.5 : 1,
                            minWidth: 'min(3vw, 3vh)',
                          }}
                        ></Icon>
                      );
                    })}
                  </div>
                </div>
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
