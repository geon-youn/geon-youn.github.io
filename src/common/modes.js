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
const getDay = (date) => dayjs(date, 'M/D/YYYY');

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
    'Honours Computer Science Co-op',
    'McMaster University',
    'Sep 2021 - Apr 2025',
    '3.9/4.0 GPA',
    getDay('9/1/2021')
  ),
  song(
    'Varsity Rower',
    'McMaster University Rowing Club',
    'Aug 2021 - Present',
    'Open weight 4+ and 2x',
    getDay('8/20/2021')
  ),
  song(
    'Full-Stack Web Developer',
    'The Odin Project',
    'Dec 2022 - Present',
    'React + NodeJS/Express',
    getDay('12/1/2022')
  ),
  song(
    'Canada Top #150 osu! Player',
    'osu!',
    'Jun. 2017 - Present',
    'Tablet + Keyboard',
    getDay('7/18/2017')
  ),
  song(
    'Support Main in Lost Ark',
    'Lost Ark',
    'Feb. 2022 - Present',
    'Bard best support',
    getDay('2/11/2022')
  ),
];

const skills = [
  song(
    'Basic Web Skills',
    'The Odin Project',
    'Dec. 2022 - Present',
    'JavaScript, HTML, CSS'
  ),
  song(
    'Basic Front-end Skills',
    'The Odin Project',
    'Dec. 2022 - onging',
    'webpack, ReactJS, Vite, NextJS'
  ),
  song(
    'Basic Back-end Skills',
    'The Odin Project',
    'Dec. 2022 - Present',
    'NodeJS, ExpressJS (+ RESTful APIs)'
  ),
  song(
    'Authentication',
    'The Odin Project',
    'Dec. 2022 - Present',
    'PassportJS, JSON Web Tokens'
  ),
  song(
    'Databases',
    'The Odin Project + McMaster University',
    'Jan. 2022 - Present',
    'SQL, DB2, Relational Algebra, Mongoose, MongoDB Atlas'
  ),
  song(
    'Soft Skills',
    '',
    '',
    'Time Management, Communication, Adaptability, Problem-Solving, Teamwork'
  ),
  song(
    'Programming Languages',
    'High School + McMaster University + Online Courses',
    '2017 - Present',
    'C++, C, Java, Python, Haskell, Prolog, Elm'
  ),
  song(
    'Algorithms and Data Structures',
    'McMaster University',
    '2nd Year: COMPSCI 2C03 + COMPSCI 2XC3',
    'Theoretical + Application'
  ),
  song(
    'Design Patterns, Design Principles, SDLC',
    'McMaster University',
    '2nd Year: COMPSCI 2ME3',
    ''
  ),
];

const projects = [
  song(
    'McMaster Room Booking',
    'McMaster University',
    '3rd year: COMPSCI 4HC3',
    'Made room booking for McMaster students easier through HCD'
  ),
  song(
    'Education Data for Change',
    'DeltaHacks IX',
    'Jan. 2023',
    'Built a tool to discover insights into the Ontario education system',
    undefined,
    'https://github.com/owengretzinger/education-data-for-change'
  ),
  song(
    'Blog API',
    'The Odin Project',
    'Sep. 2023',
    'Built a RESTful API for blogs using Express',
    undefined,
    'https://github.com/geon-youn/blog-api'
  ),
  song(
    'Deep Learning Blog',
    'fast.ai',
    'Feb. 2022 - May. 2022',
    'Kept track of my deep learning journey through a blog',
    undefined,
    'https://geon-youn.github.io/DunGeon/'
  ),
  song(
    'The Trig Project',
    'McMaster University',
    '1st year: COMPSCI 1XD3',
    'Helped high school students learn trigonometry by building an app through HCD',
    undefined,
    'https://github.com/youcefs21/TheTrigProject'
  ),
];

// List of songs for each mode (0 = geon!), (1 = geon!skills), (2 = geon!projects)
export const modesData = [about, skills, projects];
