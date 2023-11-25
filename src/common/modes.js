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

const song = (title, author, mapper, difficulty, stars) => {
  return { title, author, mapper, difficulty, stars };
};

export const modesData = [
  [
    song(
      'B. Eng. in Computer Science',
      'McMaster University',
      'Sep. 2021 - Apr. 2024',
      '3.9+ GPA',
      7.21
    ),
    song(
      'McMaster University Varsity Rowing',
      'McMaster University',
      'Sep. 2021 - Apr. 2024',
      '',
      6.9
    ),
    song(
      'Full-Stack Web Developer',
      'The Odin Project',
      'Dec. 2022 - ongoing',
      '',
      8.5
    )
  ],
  [],
  [],
];
