import Page from './Page';
import Cookie from '../components/Cookie';
import BottomMenu from '../components/BottomMenu';
import styles from '../styles/play.module.css';
import { useState } from 'react';
import ModeContext from '../contexts/ModeContext';

function Play() {
  const [mode, setMode] = useState(0);
  const modeValue = { mode, setMode };

  return (
    <Page name="Play">
      <ModeContext.Provider value={modeValue}>
        <div className={styles.darkenBackground}></div>
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
