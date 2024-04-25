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
  citrusbits,
  meta,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "MERN/MEAN Stack Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: ".NET Developer",
    icon: creator,
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
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
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
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "MERN Stack Developer",
    company_name: "CitrusBits",
    icon: citrusbits,
    iconBg: "#383E56",
    date: "May 2023 - July 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Final Year Design & Project",
    company_name: "University of Engineering & Technology Lahore",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and enhancing web applications leveraging React.js and associated technologies to showcase real-time energy consumption data from prepaid meters.",
      "Collaborating seamlessly with interdisciplinary teams comprising designers, product managers, and fellow developers to ensure the creation of a high-quality, user-friendly platform for monitoring energy usage in real-time.",
      "Implementing responsive design principles to guarantee optimal user experience across various devices while ensuring compatibility across different web browsers to facilitate widespread accessibility of the energy monitoring platform.",
      "Actively engaging in code reviews and providing valuable feedback to team members, fostering a collaborative environment aimed at refining the project's codebase and ensuring its scalability and robustness in handling real-time data streams.",
    ],
  },

];



const projects = [
 
 
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "MernStack",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Php",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://energymanagement-prepaidmeter.onrender.com/",
  },
];

export { services, technologies, experiences,  projects };
