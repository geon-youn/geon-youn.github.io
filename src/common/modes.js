import {
  mdiAccount,
  mdiAccountDetails,
  mdiClipboardTextMultiple,
} from '@mdi/js';

const mode = (name, path) => {
  return {
    name,
    path,
  };
};

export const modes = [
  mode('geon!', mdiAccount),
  mode('geon!skills', mdiAccountDetails),
  mode('geon!projects', mdiClipboardTextMultiple),
];
