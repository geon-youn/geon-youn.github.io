import '../styles/transition.css';
import { useEffect, useState } from 'react';

function Transition() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const key = setTimeout(() => {
      setHidden(true);
    }, 3000);
    return () => {
      clearTimeout(key);
    };
  }, []);

  return hidden ? (
    <></>
  ) : (
    <img src="../../public/icon.png" alt="Geon osu! logo" />
  );
}

export default Transition;
