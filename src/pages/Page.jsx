import Transition from '../components/Transition';
import { useEffect, useState } from 'react';

function Page({ children }) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const key = setTimeout(() => {
      setHidden(true);
    }, 2500);
    return () => {
      clearTimeout(key);
    };
  }, []);

  return (
    <>
      {hidden ? null : <Transition hidden={hidden} />}
      {children}
    </>
  );
}

export default Page;
