/**
 * Mode context for keeping track of the current mode
 */

import { createContext } from 'react';

const ModeContext = createContext({
  mode: 0,
  setMode: () => {},
});

export default ModeContext