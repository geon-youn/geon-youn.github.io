/**
 * Takes the Cookie and adds links to it that appear when the Cookie is clicked
 */

import links from '../common/links';
import styles from '../styles/linkedcookie.module.css';
import Icon from '@mdi/react';
import Cookie from './Cookie';
import { useState } from 'react';

function LinkedCookie() {
    const [expand, setExpand] = useState(true);

    function toggleExpand() {
        setExpand((expand) => !expand);
    }

    // When expand is false, adds another class of the same name with Hidden added to the end
    function toggleHidden(name) {
        return `${styles[name]}${expand ? '' : ' ' + styles[name + 'Hidden']}`;
    }

    return (
        <div className={styles.linkedCookie}>
            {/* Click the cookie to toggle the links */}
            <Cookie onClick={toggleExpand}></Cookie>
            {/* Only show the links when expanded */}
            <div className={toggleHidden('cookieLinksContainer')}>
                <div className={toggleHidden('cookieLinks')}>
                    {links.map((i) => {
                        return (
                            <a
                                key={i.text}
                                {...i.data}
                                className={styles.cookieLink}
                                onClick={
                                    i.text === 'Close' ? toggleExpand : null
                                }
                            >
                                <div className={styles.cookieLinkText}>
                                    {i.text}
                                </div>
                                <div className={styles.cookieLinkIcon}>
                                    <Icon
                                        path={i.path}
                                        size={`min(5vw, 5vh)`}
                                    />
                                </div>
                            </a>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default LinkedCookie;
