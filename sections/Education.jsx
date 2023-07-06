'use client';

import React from 'react';
import { motion } from 'framer-motion/dist/framer-motion';
import { fadeIn } from '../utils/motion';
import EducationCard from '../components/EducationCard';

const Education = () => {
  const education = [
    {
      id: 1,
      institution: 'Vellore Institute of Technology (VIT), Vellore',
      degree: 'B.Tech in Information Technology',
      duration: '2020 - 2024',
      description: 'CGPA - 9.23/10.00',
    },
    {
      id: 2,
      institution: 'Ryan International School, Faridabad',
      degree: 'PCM with Computer Science (CBSE)',
      duration: '2018 - 2020',
      description: 'Percentage - 94.4%',
    },
    // Add more education objects as needed
  ];

  return (
    <section id="education-section" className="p-8">
      <motion.h2
        className="text-4xl font-bold text-center text-secondary-white mb-8 my-10"
        variants={fadeIn('up', 'tween', 0.2, 0.5)}
        whileInView="show"
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        Education
      </motion.h2>
      <motion.div
        className="max-w-3xl mx-auto flex items-center" // Set flexbox to align items center
        initial="hidden"
        animate="visible"
        variants={fadeIn('up', 'tween', 0.2, 0.5)}
        whileInView="show"
        transition={{ duration: 0.5 }}
      >
        <div className="w-1/4 mx-auto pr-8">
          <motion.img
            src="/education.png"
            alt="Education"
            className="object-contain mx-auto"
            initial="hidden"
            variants={fadeIn('right', 'tween', 0.2, 0.5)}
            whileInView="show"
            transition={{ duration: 0.5 }}
          />
        </div>
        <motion.div
          className="w-3/4"
          initial="hidden"
          variants={fadeIn('left', 'tween', 0.2, 0.5)}
          whileInView="show"
        >
          {education.map((edu) => (
            <EducationCard key={edu.id} {...edu} />
          ))}
        </motion.div>
      </motion.div>

    </section>
  );
};

export default Education;
