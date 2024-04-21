import {
  mobile,
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  cpp,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  fullstack,
  huawei,
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
    title: "React Native Developer",
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
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "cpp",
    icon: cpp,
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

const certificates = [
  {
    name: "IBM Full stack Developer",
    description:
      "an IBM Course that focuses on different technologies and end with a project that utilizes boostrap and react for frontend ,django for backend,docker, IBM cloud and a mongodb database",
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
        name: "django",
        color: "pink-text-gradient",
      },
      {
        name:"docker",
        color: "blue-text-gradient",
      },
    ],
    image: fullstack,
    source_code_link: "https://github.com/",
  },
  {
    name: "HCIA-AI V3.5 Course",
    description:
      "an IBM Course that focuses on different technologies and end with a project that utilizes boostrap and react for frontend ,django for backend,docker, IBM cloud and a mongodb database",
    tags: [
      {
        name: "modelArts",
        color: "blue-text-gradient",
      },
    ],
    image: huawei,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, certificates };
