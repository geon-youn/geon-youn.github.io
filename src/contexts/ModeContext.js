import { createContext } from 'react';

const ModeContext = createContext({
  mode: 0,
  setMode: () => {},
});

export default ModeContext