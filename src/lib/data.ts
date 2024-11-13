
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp - Front-End Developer",
    location: "Ukraine, Kyiv",
    description: "I graduated after 4 months of studying. ",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - 2024",
  },
  {
    title: "Graduated bootcamp - Full Stack Developer",
    location: "Ukraine, Kyiv",
    description:
      "I studied as a front-end developer for 6 month. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2024",
  },
  {
    title: "Graduated bootcamp Full-Stack Developer",
    location: "",
    description:
      "I'm now a full-stack developer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I started as a full-stack developer on my own projects for 6 month. ",
    tags: ["React",  "MongoDB", "Tailwind", "Prisma" "Next.js", "Node.js" "Redux", "SQL", "Framer"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      " It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "",
    description:
      ".",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: ,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
