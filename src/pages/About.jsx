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
import { useState, useEffect } from 'react';

function About() {
  return (
    <Page page={'About'}>
      <div className={styles.about}>
        {/* Bio */}
        <div className={styles.bio}>
          <div className={styles.bioText}>
            <div className={styles.bioSection}></div>
            <div className={styles.bioSection}>{''}</div>
          </div>
        </div>
        {/* Skills */}
        <div className={styles.skills}></div>
      </div>
    </Page>
  );
}

export default About;
