import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Jenny Moon | Portfolio',
  lang: 'en',
  description: 'Welcome to my website',
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Jenny Moon',
  subtitle: '- Full Stack Engineer',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    "The way the tech industry transforms people's lives is fascinating, and I am passionate about being a part of this exciting industry. With over ten years of experience working in the infrastructure industry for both leading global engineering consultancies and the public sector, my previous career involved data analysis and building transport simulation models, which required a coding process - it was this work that initially sparked my interest in programming. ",
  paragraphTwo:
    "After discovering my passion for programming. I couldn't get enough. I completely immersed myself in a self-learning journey - this led me to join the highly selective Full Stack developer program at Makers Academy, where I learned how to write quality, fully tested and extensible code.",
  paragraphThree:
    "Now, my goal is to use my programming skills to create products and services that make a positive impact on people's lives, just as technology has had a positive impact on my own.",
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'shopnature.jpg',
    title: 'ShopNature',
    info: 'An e-commerce app built with React, Redux and tested with Cypress',
    info2: 'Tech/tools: React, Redux, JavaScript, JSON-server, Bootstrap, Axios, Testing (Cypress)',
    url: 'https://shopnature.netlify.app/',
    repo: 'https://github.com/jen0828/ShopNature',
  },
  {
    id: nanoid(),
    img: 'blog.jpg',
    title: 'MyTIL',
    info: 'Personal tech-blog built with Next.js',
    info2: 'Tech/tools: TypeScript, Next.js, Tailwind CSS, Vercel',
    url: 'https://my-til.vercel.app/',
    repo: 'https://github.com/jen0828/my-til',
  },
  {
    id: nanoid(),
    img: 'game.jpg',
    title: 'DiceGame',
    info: 'An interative dice game built with React and tested with Cypress',
    info2: 'Tech/tools: React, React Hooks, JavaScript, Netlify, Testing (Cypress)',
    url: 'https://dicegamefun.netlify.app/',
    repo: 'https://github.com/jen0828/diceGame',
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Tutoroom',
    info: 'A full-stack tutoring web application built with Rails API and React frontend',
    info2:
      'Tech/ tools: Ruby, Rails, Javascript, React, Insomnia, Axios, Amazon S3, Bootstrap, Testing (Jest, React testing library, RSpec)',
    url: 'https://user-images.githubusercontent.com/79845719/134815371-7cc97143-2de0-4526-bdbe-3addb105f008.gif',
    repo: 'https://github.com/jen0828/tutoroom_fe',
  },
  {
    id: nanoid(),
    img: 'project-2.jpg',
    title: 'Catbook',
    info: 'A full-stack social media application built with Ruby on Rails',
    info2: 'Tech/tools: Ruby, Rails, Heroku, HTML, CSS, Testing (RSpec, Capybara)',
    url: 'https://gentle-wave-85477.herokuapp.com/',
    repo: 'https://github.com/jen0828/acebook-StringMeAlong',
  },
  {
    id: nanoid(),
    img: 'todos.jpg',
    title: 'Todos',
    info: 'A simple productivity app using Test-Driven Development (TDD) with Jest & React testing library',
    info2:
      'Tech/tools: React, TypeScript, Bootstrap, Netlify, Responsive design, Testing (Jest, React testing library)',
    url: 'https://jens-todo.netlify.app/',
    repo: 'https://github.com/jen0828/Todos-react',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'jenny0moon@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/jenny-moon-/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/jen0828',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false,
};
