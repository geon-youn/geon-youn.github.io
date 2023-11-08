/**
 * --- Transition ---
 *
 * Pops up at the start of each new route.
 */

import styles from '../styles/transition.module.css';

const transitions = {
  Home: {
    className: styles.homeTransition,
    src: '/img/icon.png',
    alt: 'Geon osu! logo',
  },
  Contact: {
    className: styles.contactTransition,
    src: '/img/letsplay.png',
    alt: "[Let'sPlay]",
  },
};

function Transition({ page }) {
  // If the page's transition isn't implemented, then ignore the transition
  if (!page || !(page in transitions)) {
    return null;
  }

  const transition = transitions[page];

  return (
    <div className={styles.transition}>
      <div className={styles.blur}></div>
      <img
        className={transition.className}
        src={transition.src}
        alt={transition.alt}
      />
    </div>
  );
}

export default Transition;
