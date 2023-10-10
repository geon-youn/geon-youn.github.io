import Transition from '../components/Transition';
import { useEffect, useState } from 'react';

function Page({ children }) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const key = setTimeout(() => {
      setHidden(true);
    }, 3000);
    return () => {
      clearTimeout(key);
    };
  }, []);

  return <>{hidden ? children : <Transition hidden={hidden} />}</>;
}

export default Page;
