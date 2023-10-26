/**
 * --- Cookie ---
 *
 * Expands on click to show links to different sections of the site.
 * - About
 * - Projects
 * - Contact
 * - Resume*
 * - GitHub*
 *
 * *External links to another site.
 */

import { useState } from 'react';
import Icon from '@mdi/react';
import styles from '../styles/cookie.module.css';
import links from '../common/links';

function Cookie() {
  // expand the cookie
  const [expand, setExpand] = useState(false);

  function handleClick() {
    setExpand(!expand);
  }

  // set classes according to `expand`
  // `original` is the original class name
  function expandClasses(original) {
    return `${styles[original]}${
      expand ? '' : ' ' + styles[`${original}Hidden`]
    }`;
  }

  return (
    <div className={styles.cookie}>
      <div className={styles.parentCookieImg} onClick={handleClick}>
        {/* two images to create a nicer pulse effect */}
        <img
          className={styles.cookieImg}
          src="/img/icon.png"
          alt="Geon osu! logo"
        />
        <img
          className={styles.ghostCookieImg}
          src="/img/icon.png"
          alt="Ghost of Geon osu! logo 1"
        />
      </div>
      {/* parent div to create shadows */}
      <div className={expandClasses('cookieLinks')}>
        {/* child div clips links into a circle */}
        <div className={styles.clip}>
          {links.map((i) => {
            return (
              <a key={i.text} {...i.data} className={styles.cookieLink}>
                {/* link text */}
                <div className={expandClasses('cookieLinkText')}>{i.text}</div>
                {/* link svg */}
                <div className={expandClasses('cookieLinkIcon')}>
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

export default Cookie;
