import styles from '../styles/songlist.module.css';
import Song from '../components/Song';
import ModeContext from '../contexts/ModeContext';
import { modesData } from '../common/modes';
import { useState, useEffect, useCallback, useMemo, useContext } from 'react';

function bellCurve(x) {
  return Math.exp(Math.pow(x, 2) / -2);
}

function SongList() {
  const { mode } = useContext(ModeContext);
  const [currentSong, setCurrentSong] = useState(0);
  const [drag, setDrag] = useState(false);
  const [prevTouch, setPrevTouch] = useState(null);
  const songList = modesData[mode];

  // Function to update current song by a certain amount
  const returnNewSong = useMemo(
    () => (currentSong, delta) => {
      return currentSong + delta;
    },
    []
  );

  // Periodically round currentSong to an int and keep it within bounds
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

  useEffect(() => {
    window.addEventListener('wheel', handleWheel);

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [handleWheel]);

  // Move songlist through drag with mouse
  const handleDrag = useCallback(
    (e) => {
      const delta = e.movementY * -0.01;
      setCurrentSong((currentSong) => returnNewSong(currentSong, delta));
    },
    [returnNewSong]
  );

  // Move songlist through drag with touch
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

  // Move songlist through arrow keys
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
    window.addEventListener('keydown', handleKey);

    return () => {
      window.removeEventListener('keydown', handleKey);
    };
  }, [handleKey]);

  return (
    <div
      className={styles.songs}
      style={{
        transform: `translateY(calc(50% - min(7vw, 7vh) - min(${
          12 * currentSong
        }vw, ${12 * currentSong}vh)))`,
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
          bellCurve(Math.round(currentSong - i));
        const current = Math.round(currentSong) === i;
        return (
          <Song
            key={i}
            style={{
              transformOrigin: `right center`,
              transform: `translateX(${-bell * (current ? 5 : 2) + 5}vw)`,
              color: current ? 'black' : `white`,
              backgroundColor: current ? '#f1f1f1' : '#e36808',
              margin: current ? 'min(2vw, 2vh) 0' : `max(-1vw, -1vh) 0`,
            }}
            song={song}
            focused={current}
            onClick={() => setCurrentSong(() => i)}
          ></Song>
        );
      })}
    </div>
  );
}

export default SongList;
