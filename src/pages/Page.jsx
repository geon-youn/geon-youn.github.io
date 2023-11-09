import Transition from '../components/Transition';
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

      {/* main content */}
      {children}
    </>
  );
}

export default Page;
