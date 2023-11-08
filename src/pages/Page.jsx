import Transition from '../components/Transition';
import Header from '../components/Header';
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
      {page !== 'Home' ? <Header page={page}></Header> : null}

      {/* main content */}
      {children}
    </>
  );
}

export default Page;
