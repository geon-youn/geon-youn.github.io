import links from '../common/links';
import styles from '../styles/linkedcookie.module.css';
import Icon from '@mdi/react';
import Cookie from './Cookie';
import { useState } from 'react';

function LinkedCookie() {
  const [expand, setExpand] = useState(false);

  function toggleExpand() {
    setExpand(!expand);
  }

  function toggleHidden(name) {
    return `${styles[name]}${expand ? '' : ' ' + styles[name + 'Hidden']}`;
  }

  return (
    <div className={styles.linkedCookie}>
      <Cookie onClick={toggleExpand}></Cookie>
      <div className={toggleHidden('cookieLinksContainer')}>
        <div className={toggleHidden('cookieLinks')}>
          {links.map((i) => {
            return (
              <a
                key={i.text}
                {...i.data}
                className={styles.cookieLink}
                onClick={i.text === 'Back' ? toggleExpand : null}
              >
                <div className={styles.cookieLinkText}>{i.text}</div>
                <div className={styles.cookieLinkIcon}>
                  <Icon path={i.path} size={`min(5vw, 5vh)`} />
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
