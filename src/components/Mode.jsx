/**
 * Mode menu
 */

import ModeContext from '../contexts/ModeContext';
import styles from '../styles/mode.module.css';
import Icon from '@mdi/react';
import { useContext, useState, useEffect, useRef } from 'react';
import { modes } from '../common/modes';

// Detects if there's a click outside of the mode menu to close the menu
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
    }, [ref, setExpandFalse]);
}

function Mode() {
    const [expand, setExpand] = useState(false);
    const { mode, setMode } = useContext(ModeContext);
    const currentMode = modes[mode];
    const ref = useRef(null);
    useOutsideMode(ref, () => {
        setExpand(() => false);
    });

    return (
        <div className={styles.modeParent} ref={ref}>
            {/* Mode button */}
            <div
                className={styles.modeButton}
                onClick={() => {
                    setExpand((e) => !e);
                }}
                style={
                    expand
                        ? { backgroundColor: 'rgba(255, 255, 255, 0.05)' }
                        : null
                }
            >
                <Icon
                    path={currentMode.path}
                    size="min(3vw, 3vh)"
                    color={'white'}
                ></Icon>
                <div>Mode</div>
            </div>
            {/* Mode menu */}
            {expand ? (
                <div id={styles.modes}>
                    {/* Reverse modes to show bottom-up */}
                    {[]
                        .concat(modes)
                        .reverse()
                        .map((mode, idx) => {
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
                                    <Icon
                                        path={mode.path}
                                        size="min(6vw, 6vh)"
                                        color={'white'}
                                    ></Icon>
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
