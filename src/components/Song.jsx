/**
 * Each song in the song list in Play page
 */

import styles from '../styles/song.module.css';
import Icon from '@mdi/react';
import { mdiStar } from '@mdi/js';
import { useEffect, useState } from 'react';

function Song({ style, song, onClick, focused }) {
    // Prevent link from opening as soon as the song is clicked
    const [href, setHref] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            setHref(focused ? song.href : null);
        });
    }, [focused, song]);

    return (
        <a
            className={styles.song}
            style={style}
            target="_blank"
            rel="noreferrer"
            href={href}
            onClick={onClick}
        >
            <div className={styles.songDetails}>
                <div className={styles.songTitle}>{song.title}</div>
                {/* Only show // when both author and mapper are defined */}
                <div className={styles.songAuthors}>{`${song.author}${song.author && song.mapper ? ' // ' : ''
                    }${song.mapper}`}</div>
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
        </a>
    );
}

export default Song;
