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
import {
  mdiClipboardAccountOutline,
  mdiClipboardTextMultipleOutline,
  mdiAccountGroupOutline,
  mdiFileAccount
} from '@mdi/js';
import styles from '../styles/cookie.module.css';

const gitHub =
  'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z';

const links = [
  { href: '/#/about', text: 'About', path: mdiClipboardAccountOutline },
  {
    href: '/#/projects',
    text: 'Projects',
    path: mdiClipboardTextMultipleOutline,
  },
  { href: '/#/contact', text: 'Contact', path: mdiAccountGroupOutline },
  { href: '/', text: 'Resume', path: mdiFileAccount },
  { href: 'https://github.com/geon-youn', text: 'GitHub', path: gitHub },
];

function Cookie() {
  const [expand, setExpand] = useState(false);

  function handleClick() {
    setExpand(!expand);
  }

  function expandClasses(original) {
    return `${styles[original]}${
      expand ? '' : ' ' + styles[`${original}Hidden`]
    }`;
  }

  return (
    <div className={styles.cookie}>
      <div className={styles.parentCookieImg} onClick={handleClick}>
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
      <div className={expandClasses('cookieLinks')}>
        <div className={styles.clip}>
          {links.map((i) => {
            return (
              <a key={i.href} href={i.href} className={styles.cookieLink}>
                <div className={styles.cookieLinkText} hidden={!expand}>
                  {i.text}
                </div>
                <div className={styles.cookieLinkIcon} hidden={!expand}>
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
