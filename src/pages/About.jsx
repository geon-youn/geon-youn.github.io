/**
 * --- About Page ---
 *
 * Bio
 *  - Education
 *  - Hobbies
 *
 * Resume Breakdown
 *
 * Skills
 *  - Languages
 *  - Frameworks
 *  - Tools
 *
 */

import Page from './Page';
import styles from '../styles/about.module.css';

function About() {
  return (
    <Page page={'About'}>
      <div className={styles.about}>
        {/* Bio */}
        <div className={styles.bio}>
          <div className={styles.bioSection}>
            <div className={styles.bioText}>
              Hi, I&apos;m Geon, an athlete-student at McMaster University for
              the varsity rowing team, majoring in Computer Science.
            </div>
            <img
              className={styles.bioImage}
              src="/img/oua.jpg"
              alt="The four at OUAs. Credits to Kevin Lassel."
            />
          </div>

          <div className={styles.bioSection}>
            <div className={styles.bioText}>
              <div>
                Other than rowing and building web apps, my hobbies include bass
                guitar, reading manga or books, and playing games. One game that
                I enjoy playing is{' '}
                <a
                  href="https://osu.ppy.sh/users/Geon"
                  target="_blank"
                  rel="noreferrer"
                >
                  osu!
                </a>
                , a rhythm game where you click circles.
              </div>
            </div>
            <img
              className={styles.bioImage}
              src="/img/rank.png"
              alt="Back when I was at my peak."
            />
          </div>

          <div className={styles.bioSection}>
            <div className={styles.bioText}>
              I stopped playing osu! once Lost Ark came out because its combat
              system was fun. Although I main bard, my favourite dps classes
              were gunslinger and scrapper.
            </div>
            <img
              className={styles.bioImage}
              src="/img/radiant.png"
              alt="Radiant supporter for g6 brel."
            />
          </div>
        </div>
        {/* Skills */}
        <div className={styles.skills}></div>
      </div>
    </Page>
  );
}

export default About;
