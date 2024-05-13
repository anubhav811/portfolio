import React from "react";
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
    company: 'Rivi Ventures Pvt. Ltd.',
    title: 'SDE Intern (Android)',
    location : 'Remote',
    date: 'Dec 2022 - March 2023',
    description:
      '• Improved front-end experience for Home, Flights, and Booking Modules by reducing task clicks by 50 %.\n• Collaborated with the back-end team, optimizing REST APIs to reduce overhead by 33 %.',
    link: 'https://drive.google.com/file/d/1Q3QH5eh1WjE53bHu7IXA_PAdAVdBM8zH/view?usp=sharing',
  },
  {
    company: 'Samsung R&D Institute India',
    title: 'RnD Intern',
    date: 'Nov 2022 - Present',
    location : 'Remote',
    description: '• Created a tool to generate multiple warped document images with mainly 6 fine-tuned presets using Blender.\n• Provides a more abstract and user-friendly experience than open-source alternatives like Doc3D with more than 10 presets.',
    link: 'https://drive.google.com/file/d/1Q3QH5eh1WjE53bHu7IXA_PAdAVdBM8zH/view?usp=sharing',
  },
  {
    company: 'The Sparks Foundation',
    title: 'App Development Intern',
    location : 'Remote',
    date: 'Dec 2021 - Jan 2021',
    description: 'Worked on making a basic banking app with features like transfer of money between users, transaction history, etc. which were simulated using a local database.',
    link: 'https://drive.google.com/file/d/1SyBx5oH3kq80nWgozGoKt-ssWUBbTki0/view?usp=sharing',
  },
] as const;

export const projectsData = [
  {
    title:"AI Driven Advisor",
    description:"Engage with an AI-powered chatbot to get personalized advice and recommendations based on Ayurvedic principles",
    tags: ["Python", "Langchain", "Chainlit", "FAISS DB", "Mistral LLM"],
    link: 'https://github.com/anubhav811/AyurvedaGPT',
    imageUrl: '/ayurveda.png',
  },
  {
    id: 2,
    title: 'Babble',
    description: 'An instant messaging and audio-video calling app. Just sign up using your phone number and talk to anyone who uses Babble.',
    tags: ["Kotlin", "Firebase", "Retrofit", "JitsiMeet SDK", "Coroutines", "Navigation Components"],
    link: 'https://github.com/anubhav811/Babble',
    imageUrl: '/pf_babble.png',
  },
  {
    id: 2,
    title: 'Go-News',
    description: 'A news app that lets you check out all the latest headlines and also lets you save your favorited headlines for later.',
    tags: ["Kotlin", "MVVM", "Room", "Coroutines", "Navigation Components", "Glide", "Lottie"],
    link: 'https://github.com/anubhav811/Go-News',
    imageUrl: '/pf_goNews.png',
  },
  {
    id: 3,
    title: 'FloraCure',
    description: 'FloraCure is an app that uses CNN to classify plant disease. Users can upload a picture of a plant leaf from their gallery or capture the same from their device`s camera. The CNN model classifies the disease and it is shown to the user.',
    tags: ["Kotlin", "Navigation Components", "Glide", "Lottie", "Tensorflow Lite", "CNN"],
    link: 'https://github.com/anubhav811/floracure',
    imageUrl: '/floracure.png',
  },
  {
    id: 4,
    title: 'CircleUp',
    description: 'A social media app that lets you share your posts with the world. You can make friends as well as like and comment on their posts.',
    tags: ["MongoDB", "ExpressJS", "ReactJS", 'NodeJS', "Redux Toolkit", "Axios", "JWT"],
    link: 'https://github.com/anubhav811/CircleUp',
    imageUrl: '/circleup.png',
  },
  {
    id: 5,
    title: 'Prompto',
    description: 'A platform to share your favorite prompts that can be used upon various Large Language Models (LLMs) like ChatGPT, Bard.',
    tags: ["NextJS", "TailWindCSS", "MongoDB"],
    link: 'https://github.com/anubhav811/Prompto',
    imageUrl: '/prompto.png',
  },
  {
    id: 6,
    title: 'Old Portfolio Website',
    description: 'This is my old portfolio website that I had built.',
    tags: ["HTML", "CSS", "JS", "Bootstrap"],
    link: 'https://github.com/anubhav811/anubhav811.github.io',
    imageUrl: '/pf_portfolio.png',
  },
  {
    id: 7,
    title: 'DSA Practice',
    description: 'A collection of all the DSA problems that I have solved till now on LeetCode and GeeksForGeeks.',
    tags: ["C++"],
    link: 'https://github.com/anubhav811/DSA-Practice',
    imageUrl: '/dsa.png',
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
