import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'MTS Fernando', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Thilina',
  subtitle: 'CS Undergraduate',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Hello there! It\'s nice to see you here. Let me introduce myself.',
  paragraphTwo: 'I\'m a Computer Science undergraduate at Deakin University, Melbourne. Graduating in T1 of 2021. As for my professional interests, I have a propensity towards IT Project Management. This was influenced by my internship, but more on that later.',
  paragraphThree: 'In my spare time, I play video games with my friends. Mainly, Valorant. Throughout the lockdowns imposed due to COVID, it was an easy and fun way to keep in touch with all my friends.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'agilepm.png',
    title: 'Intern Project Manager',
    info: 'Deakin eSolutions',
    info2: 'During this internship, I had the chance to manage an IT software enhancement project. SCRUM and Waterfall based hybrid framework. Project discovery, continuous iterations, delivery and project implementation reviews. Servant leader to all stakeholders of the project.',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'react.png',
    title: 'Senior Developer',
    info: 'Project AREA - University Capstone Project',
    info2: 'External capstone project in cooperation with HEIQ and Deakin University. MERN stack was used for development. I was responsible for developing the front end of the information worker software using ReactJS. Git version control was used throughout development.',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'react.png',
    title: 'Junior Developer',
    info: 'She\'s a Crowd - University Capstone Project',
    info2: 'External capstone project in cooperate with She\'s a Crowd. As a Junior Developer of the team I was exposed to ReactJS, ChartJS, NodeJS, and ExpressJS during this internship. I developed auxiliary features such as data filters for the visualizations of the project. Git version control was used in this project.',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Get in touch',
  btn: 'Say Hello',
  email: 'thilina.fernando9@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/mtsfernando',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://www.github.com/mtfernando',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
