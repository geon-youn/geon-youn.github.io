import ModeContext from '../contexts/ModeContext';
import styles from '../styles/mode.module.css';
import Icon from '@mdi/react';
import { useContext, useState, useEffect, useRef } from 'react';
import { modes } from '../common/modes';

function useOutsideMode(ref, setExpandFalse) {
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setExpandFalse();
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [ref]);
}

function Mode() {
  const [expand, setExpand] = useState(false);
  const { mode, setMode } = useContext(ModeContext);
  const currentMode = modes[mode];
  const ref = useRef(null);
  useOutsideMode(ref, () => {setExpand(() => false)});

  return (
    <div className={styles.modeParent} ref={ref}>
      <div
        className={styles.modeButton}
        onClick={() => {
          setExpand((e) => !e);
        }}
        style={
          expand ? { 'background-color': 'rgba(255, 255, 255, 0.3)' } : null
        }
      >
        <Icon path={currentMode.path} size={1} color={'white'}></Icon>
        <div>Mode</div>
      </div>
      {expand ? (
        <div id={styles.modes}>
          {[].concat(modes).reverse().map((mode, idx) => {
            const i = modes.length - 1 - idx;
            return (
              <div
                className={styles.mode}
                key={mode.name}
                onClick={() => {
                  setMode(() => i);
                  setExpand(() => false);
                }}
              >
                <Icon path={mode.path} size={4} color={'white'}></Icon>
                <div>{mode.name}</div>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

export default Mode;
