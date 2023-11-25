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
            transform: `translateY(calc(50% - min(7vw, 7vh) - min(${
              14 * currentSong
            }vw, ${14 * currentSong}vh)))`,
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
          {songList.map((song, i) => {
            const bell =
              bellCurve(Math.round(currentSong - i)) * Math.sqrt(2 * Math.PI);
            const current = Math.round(currentSong) === i;
            return (
              <div
                className={styles.song}
                key={i}
                style={{
                  transformOrigin: `right center`,
                  transform: `translateX(${-bell * (current ? 5 : 2) + 5}vw)`,
                  color: current ? 'black' : `white`,
                  backgroundColor: current ? '#f1f1f1' : '#e36808',
                  margin: current ? 'min(2vw, 2vh) 0' : `max(-1vw, -1vh) 0`,
                }}
                onClick={() => setCurrentSong(() => i)}
              >
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
