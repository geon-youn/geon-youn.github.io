import Transition from '../components/Transition';
import Header from '../components/Header';
import styles from '../styles/page.module.css';
import { useEffect, useState } from 'react';

function Page({ children, home = false, currentLink }) {
  // hide transition after a few seconds
  const [showTransition, setShowTransition] = useState(false);

  useEffect(() => {
    const key = setTimeout(() => {
      setShowTransition(true);
    }, 1500);
    return () => {
      clearTimeout(key);
    };
  }, []);

  return (
    <>
      {/* transition */}
      {home ? showTransition ? null : <Transition /> : null}

      {/* header */}
      {home ? null : <Header currentLink={currentLink}></Header>}

      {/* main content */}
      {children}
    </>
  );
}

export default Page;
