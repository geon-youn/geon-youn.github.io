import {
    mdiAccount,
    mdiAccountDetails,
    mdiClipboardTextMultiple
} from '@mdi/js';

import dayjs from 'dayjs';

// Factory to create mode
const mode = (name, path) => {
    return {
        name,
        path
    };
};

// List of modes for Play
export const modes = [
    mode('geon!', mdiAccount),
    mode('geon!skills', mdiAccountDetails),
    mode('geon!projects', mdiClipboardTextMultiple)
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
        href
    };
};

const about = [
    song(
        'BASc in Honours Computer Science (Co-op)',
        'McMaster University',
        'Sep 2021 - Present',
        '5th year student with 11.7/12 CGPA',
        getDay('9/1/2021')
    ),
    song(
        'Teaching Assistant',
        'McMaster University',
        'Sep 2025 - Dec 2025',
        'Leading labs for operating systems',
        getDay('9/1/2024')
    ),
    song(
        'Web Applications Developer - Intern',
        'Evertz',
        'May 2024 - Aug 2025',
        'TS/JS, GraphQL, MongoDB, Jest, Git, Less, Jira',
        getDay('5/7/2024')
    ),
    song(
        'Varsity Rower',
        'Leander Boat Club (Westdale and McMaster)',
        'Nov 2017 - Present',
        "Open Mens' 4+ and 2x",
        getDay('11/1/2017')
    ),
    song(
        'Peaked #1798 Global',
        'osu!',
        'Jun 2017 - Present',
        '',
        getDay('7/18/2017')
    ),
    song(
        'Support Main',
        'Lost Ark',
        'Feb 2022 - Present',
        'Pump deeps!',
        getDay('2/11/2022')
    )
];

const skills = [
    song(
        'Front-end Development',
        'The Odin Project, McMaster, and Co-op',
        'Dec 2022 - Present',
        'HTML, CSS, React, Next.js, Tailwind CSS, Less CSS, Webpack, RMWC',
        getDay('12/1/2022')
    ),
    song(
        'Back-end Development',
        'The Odin Project, McMaster, and Co-op',
        'Sep 2022 - Present',
        'Node.js, Express.js, SQL, MongoDB, Mongoose, GraphQL, Redux/Ducks',
        getDay('9/1/2022')
    ),
    song(
        'Mobile Development',
        'Hackathons',
        'Jan 2024 - Present',
        'Expo, React Native',
        getDay('1/1/2024')
    ),
    song(
        'Highly Proficient PLs',
        'The Odin Project, Hackathons, Co-op',
        'Dec 2022 - Present',
        'JavaScript, TypeScript',
        getDay('12/1/2022')
    ),
    song(
        'Familiar PLs',
        'Westdale, McMaster, and The Odin Project',
        'Sep 2017 - Present',
        'C/C++, Java, Python, Haskell, Elm, Prolog',
        getDay('9/1/2017')
    )
];

const projects = [
    song(
        'EcoDex',
        'GDSC McMasterU Solution Challenge Hackathon 2024',
        'Feb 2024',
        'Learn about your local biodiversity! Won the Protection of Nature challenge!!',
        getDay('2/4/2024'),
        'https://devpost.com/software/ecodex-0wngoj'
    ),
    song(
        'DinoMind',
        'DeltaHacks X',
        'Jan 2024',
        'Audio journal to help you destress! Won Best Health Hack!!',
        getDay('1/1/2024'),
        'https://devpost.com/software/dinomind'
    ),
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
        'Jan 2023',
        'Built a tool to discover insights into the Ontario education system',
        getDay('1/1/2023'),
        'https://github.com/owengretzinger/education-data-for-change'
    ),
    song(
        'Blog API',
        'The Odin Project',
        'Sep 2023',
        'Built a RESTful API for blogs using Express',
        getDay('9/1/2023'),
        'https://github.com/geon-youn/blog-api'
    ),
    song(
        'Deep Learning Blog',
        'fast.ai',
        'Feb 2022 - May 2022',
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
    )
];

// List of songs for each mode (0 = geon!), (1 = geon!skills), (2 = geon!projects)
export const modesData = [about, skills, projects];
