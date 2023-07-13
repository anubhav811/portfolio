'use client';
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => {
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
    fadeInControls.forEach((control, index) =>
      control.start({ opacity: 1, transition: { delay: index * 0.1 } })
    );

    return () => fadeInControls.forEach((control) => control.stop());
  }, []);

  return (
    <motion.section
      id="about-section"
      className={`${styles.paddings} relative z-10 flex flex-col justify-center min-h-screen`}
      style={{ backdropFilter: 'blur(20px)' }}
    >
        <motion.h2
            className="text-5xl font-bold text-center text-white mb-4"
            variants={fadeIn('up', 'tween', 0.2, 0.5)}
          >
            About me
          </motion.h2>
      <motion.div
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col md:flex-row rounded-lg`}
      >
        
        <motion.div
          className="md:w-1/2 p-6"
          variants={fadeIn('left', 'tween', 0.2, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
        
          <motion.p
            className="mt-4 ml-2 font-normal text-[30px] text-center md:text-left text-white"
            variants={fadeIn('up', 'tween', 0.2, 0.5)}
          >
            Since childhood, I have been the person everyone would call in for some{' '}
            <span className="font-extrabold text-white">tech</span> related stuff, be it in school
            or my own neighborhood. My passion for technology has driven me to become a passionate{' '}
            <span className="font-extrabold text-white">Full Stack Software Developer</span> having
            experience in building <span className="font-extrabold text-white">Native Android</span>{' '}
            and <span className="font-extrabold text-white">Web applications</span> with Kotlin,
            Java, JavaScript, React.js, Node.js, and other cool libraries and frameworks.
          </motion.p>
      
        </motion.div>
        <motion.div
          className="md:w-2/5 p-6 grid grid-cols-4"
          variants={staggerContainer()}
          initial="hidden"
          animate="show"
          whileInView="show"
          transition={{ duration: 0.5 }}
        >
          {icons.map((icon, index) => (
            <motion.div
              key={index}
              variants={fadeIn('up', 'tween', 0.2, 0.5)}
              className="flex items-center justify-center rounded-lg"
              initial={{ opacity: 0 }}
              animate={fadeInControls[index]}
              whileHover={{ scale: 1.1 }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <img
                src={`/${icon}.svg`}
                alt={icon}
                className="w-20 h-20"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;
