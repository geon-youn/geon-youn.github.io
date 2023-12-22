import {
  mdiAccount,
  mdiAccountDetails,
  mdiClipboardTextMultiple,
} from '@mdi/js';

import dayjs from 'dayjs';

// Factory to create mode
const mode = (name, path) => {
  return {
    name,
    path,
  };
};

// List of modes for Play
export const modes = [
  mode('geon!', mdiAccount),
  mode('geon!skills', mdiAccountDetails),
  mode('geon!projects', mdiClipboardTextMultiple),
];

const today = dayjs();
const getDay = (date) => dayjs(date, 'MM/DD/YYYY');

// Factory to create songs
const song = (title, author, mapper, difficulty, startDate, href) => {
  return {
    title,
    author,
    mapper,
    difficulty,
    stars: today.diff(getDay(startDate), 'y', true),
    href,
  };
};

const about = [
  song(
    'BASc in Honours Computer Science (Co-op)',
    'McMaster University',
    'Sep 2021 - Apr 2025',
    '3rd year student with 3.9/4.0 GPA',
    getDay('9/1/2021')
  ),
  song(
    'Varsity Rower',
    'McMaster University Rowing Club',
    'Aug 2021 - Present',
    "Open Mens' 4+ and 2x",
    getDay('8/20/2021')
  ),
  song(
    'Full-Stack Web Developer',
    'Self-Taught',
    'Dec 2022 - Present',
    'JS, TS, HTML, CSS, React, Node, Express, SQL, MongoDB',
    getDay('12/1/2022')
  ),
  song(
    'Canada Top #150 osu! Player',
    'osu!',
    'Jun. 2017 - Present',
    'Tablet and Keyboard',
    getDay('7/18/2017')
  ),
  song(
    'Best Support in Lost Ark',
    'Lost Ark',
    'Feb. 2022 - Present',
    'Radiant support always',
    getDay('2/11/2022')
  ),
];

const skills = [
  song(
    'Front-end Development',
    'The Odin Project',
    'Dec 2022 - Present',
    'JS, TS, HTML, CSS, React, Next.js, Tailwind CSS, Webpack',
    getDay('12/1/2022')
  ),
  song(
    'Back-end Development',
    'The Odin Project and McMaster University',
    'Sep 2022 - Present',
    'Node.js, Express.js, SQL, MongoDB, Mongoose',
    getDay('9/1/2022')
  ),
  song(
    'Main Programming Languages',
    'The Odin Project',
    'Dec 2022 - Present',
    'JavaScript, TypeScript',
    getDay('12/1/2022')
  ),
  song(
    'Other Programming Languages',
    'Westdale S.S., McMaster University, and The Odin Project',
    '',
    'C/C++, Java, Python, Haskell, Elm, Prolog',
    getDay('9/1/2017')
  ),
];

const projects = [
  song(
    'McMaster Room Booking',
    'McMaster University',
    '3rd year: COMPSCI 4HC3',
    'Make room booking great again',
    getDay('9/1/2023'),
    'https://github.com/owengretzinger/room-booking-system'
  ),
  song(
    'Education Data for Change',
    'DeltaHacks IX',
    'Jan. 2023',
    'Built a tool to discover insights into the Ontario education system',
    getDay('1/1/2023'),
    'https://github.com/owengretzinger/education-data-for-change'
  ),
  song(
    'Blog API',
    'The Odin Project',
    'Sep. 2023',
    'Built a RESTful API for blogs using Express',
    getDay('9/1/2023'),
    'https://github.com/geon-youn/blog-api'
  ),
  song(
    'Deep Learning Blog',
    'fast.ai',
    'Feb. 2022 - May. 2022',
    'Kept track of my deep learning journey through a blog',
    getDay('2/1/2022'),
    'https://geon-youn.github.io/DunGeon/'
  ),
  song(
    'The Trig Project',
    'McMaster University',
    '1st year: COMPSCI 1XD3',
    'Trigonometry is now so easy',
    getDay('1/1/2022'),
    'https://github.com/youcefs21/TheTrigProject'
  ),
];

// List of songs for each mode (0 = geon!), (1 = geon!skills), (2 = geon!projects)
export const modesData = [about, skills, projects];
