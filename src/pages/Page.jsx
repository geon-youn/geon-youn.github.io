import Transition from '../components/Transition';
import Header from '../components/Header';
import styles from '../styles/page.module.css';
import { useEffect, useState } from 'react';

function Page({ children, page = 'Home' }) {
  // hide transition after a few seconds
  const [showTransition, setShowTransition] = useState(true);

  useEffect(() => {
    const key = setTimeout(() => {
      setShowTransition(false);
    }, 1500);
    return () => {
      clearTimeout(key);
    };
  }, []);

  return (
    <>
      {/* transition */}
      {showTransition ? <Transition page={page} /> : null}

      {/* header */}
      {page === 'Home' ? null : <Header page={page}></Header>}

      {/* main content */}
      {children}
    </>
  );
}

export default Page;
