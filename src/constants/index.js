import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

import content from '../assets/content.png';
import library from '../assets/library.png';
import blog from '../assets/blog.png';
import shirt from '../assets/shirt.png';
import income from '../assets/income.png';

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "project",
    title: "projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const about = "I'm a College student, who is currently pursing final year of Computer Science engineering in Sona College of technology with overall CGPA of 8.7, along with my degree I've been working hard to fine tune my skills in Java, MERN stack and problem solving. By learning this technologies I've built some project to assess my skills, at the beginning it seems like I can't do but once I put mind into it then nothing can stop me from learning. I'm a quick learner and been collaborating closely with my college mates to solve user-friendly problems. Let's work together to bring your ideas to life!"

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Java Andriod Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  }, 
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const   projects = [
  {
    name: "Content Generator",
    description:
      "Web-based platform that allows users to generate content based on prompts and user subscription. Used geminiAi to generate content and Stripe API to make payments.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "blue-text-gradient"
      },
      {
        name: "stripe",
        color: "green-text-gradient"
      },
      {
        name: "gemini",
        color: "pink-text-gradient"
      }
    ],
    image: content,
    source_code_link: "https://github.com/",
  },
  {
    name: "3D Shop",
    description:
      "Web application that enables users to interact with the 3D shirt model and make use of it to change color and texture of the shirt.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindCSS",
        color: "blue-text-gradient",
      },
      {
        name: "threeJS",
        color: "green-text-gradient",
      },
    ],
    image: shirt,
    source_code_link: "https://github.com/",
  },
  {
    name: "Income and Expense tracker",
    description:
      "A comprehensive tracker that helps user to keep track of ones income and expenses. This webapp allows to create user account and can track income and expenses by creating account based on their usage.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwindCSS",
        color: "pink-text-gradient",
      },
      {
        name: "Express.js",
        color: "blue-text-gradient"
      },
      {
        name: "mongodb",
        color: "green-text-gradient"
      }
    ],
    image: income,
    source_code_link: "https://github.com/",
  },
  {
    name: "Blog App",
    description:
      "A comprehensive blog application that allows user to create, read and comment on the blog.",
    tags: [
      {
        name: "Ejs",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient"
      },
      {
        name: "mongodb",
        color: "green-text-gradient"
      },
      {
        name: "expressjs",
        color: "blue-text-gradient"
      }
    ],
    image: blog,
    source_code_link: "https://github.com/",
  },

];

export { services, technologies, experiences, testimonials, projects, about };