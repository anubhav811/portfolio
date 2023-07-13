'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from '../components/ExperienceCard';
import { fadeIn } from '../utils/motion';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: 'Rivi Ventures Pvt. Ltd.',
      position: 'SDE Intern (Android)',
      duration: 'Dec 2022 - March 2023',
      description:
        '• Improved front-end experience for Home, Flights, and Booking Modules by reducing task clicks by 50 %.\n• Collaborated with the back-end team, optimizing REST APIs to reduce overhead by 33 %.',
      link: 'https://drive.google.com/file/d/1Q3QH5eh1WjE53bHu7IXA_PAdAVdBM8zH/view?usp=sharing',
    },
    {
      id: 2,
      company: 'Samsung R&D Institute India',
      position: 'PRISM Intern',
      duration: 'Nov 2022 - Present',
      description: '• Created a tool to generate multiple warped document images with mainly 6 fine-tuned presets using Blender.\n• Provides a more abstract and user-friendly experience than open-source alternatives like Doc3D with more than 10 presets.',
      link: 'https://drive.google.com/file/d/1Q3QH5eh1WjE53bHu7IXA_PAdAVdBM8zH/view?usp=sharing',
    },
    {
      id: 3,
      company: 'The Sparks Foundation',
      position: 'App Development Intern',
      duration: 'Dec 2021 - Jan 2021',
      description: 'Worked on making a basic banking app with features like transfer of money between users, transaction history, etc. which were simulated using a local database.',
      link: 'https://drive.google.com/file/d/1SyBx5oH3kq80nWgozGoKt-ssWUBbTki0/view?usp=sharing',
    },
    // Add more experience objects as needed
  ];

  return (
    <section id="experience-section" className="p-8 flex justify-center items-center">
      <div className="max-w-3xl mx-auto">
      <motion.h2
            className="text-5xl my-5 font-bold text-center text-white mb-10"
            variants={fadeIn('up', 'tween', 0.2, 0.5)}
          >
            Experience
          </motion.h2>
        {experiences.map((experience) => (
          <ExperienceCard key={experience.id} {...experience} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
