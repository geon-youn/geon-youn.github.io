import ModeContext from '../contexts/ModeContext';
import styles from '../styles/mode.module.css';
import Icon from '@mdi/react';
import { useContext } from 'react';
import { modes } from '../common/modes';

function Mode() {
  const { mode, setMode } = useContext(ModeContext);
  const currentMode = modes[mode];

  return (
    <>
      <div className={styles.modeButton}>
        <Icon path={currentMode.path} size={1} color={'white'}></Icon>
        <div>Mode</div>
      </div>
    </>
  );
}

export default Mode;
