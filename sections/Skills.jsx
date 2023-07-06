'use client';

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion/dist/framer-motion';
import styles from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const Skills = () => {
  const icons = [
    'android',
    'kotlin',
    'java',
    'c++',
    'firebase',
    'mongodb',
    'html5',
    'css',
    'js',
    'reactjs',
    'nextjs',
    'docker',
    'postman',
    'figma',
    'netlify',
    'github',
    'gitlab',
    'vs',
  ];

  const fadeInControls = icons.map(() => useAnimation());

  useEffect(() => {
    fadeInControls.forEach((control, index) => control.start({ opacity: 1, transition: { delay: index * 0.1 } }));

    return () => fadeInControls.forEach((control) => control.stop());
  }, []);

  return (
    <section
      id="skills-section"
      className={`${styles.paddings} relative z-10 flex flex-col justify-center min-h-screen`}
    >
      <motion.h2 className="text-4xl font-bold text-center text-secondary-white mb-8 my-10"
        initial="hidden"
        variants={fadeIn('down', 'tween', 0.2, 0.5)}
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        My Tech Stack
      </motion.h2>
      <div className={`${styles.innerWidth} mx-auto ${styles.flexCenter}`}>
        <div className="flex flex-col md:flex-row md:items-center md:space-x-8 gap-14">
          <motion.img
            src="/skills.png"
            className="max-w-full md:w-1/2 mx-auto md:mx-0"
            initial="hidden"
            variants={fadeIn('right', 'tween', 0.2, 0.5)}
            whileInView="show"
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.4 }}
          />
          {/* Show icons in grid */}
          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 md:mt-0"
            variants={fadeIn('left', 'tween', 0.2, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            {icons.map((icon, index) => (
              <motion.div
                key={index}
                variants={textVariant(0.75)}
                className="flex flex-col items-center justify-center"
                initial={{ opacity: 0 }}
                animate={fadeInControls[index]}
                viewport={{ once: true, amount: 0.4 }}
              >
                <motion.img
                  src={`/${icon}.svg`}
                  alt={icon}
                  className="w-20 h-20 object-contain"
                  whileHover={{ scale: 1.4 }}
                  viewport={{ once: true, amount: 0.4 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
