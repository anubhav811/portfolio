'use client';

import React from 'react';
import { motion } from 'framer-motion/dist/framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section
    id="about-section"
    className={`${styles.paddings} relative z-10 flex flex-col justify-center min-h-screen`}
  >
    <motion.h2
      className="text-4xl font-bold text-center text-secondary-white mb-8 my-10"
      initial="hidden"
      variants={fadeIn('down', 'tween', 0.2, 0.5)}
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
    >
      About me
    </motion.h2>

    <div className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        variants={staggerContainer()}
        initial="hidden"
        animate="show"
        whileInView="show"
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-center md:justify-start md:order-2">
          <motion.img
            src="/profile.png"
            alt="Profile"
            className="object-contain w-1/4 md:w-auto rounded-full"
            variants={fadeIn('right', 'tween', 0.2, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          />
        </div>

        <motion.div
          className="flex flex-col justify-center md:justify-start"
          variants={fadeIn('left', 'tween', 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <p className="mt-[8px] ml-[8px] font-normal sm:text-[30px] text-[20px] text-center md:text-left text-secondary-white">
            Since childhood, I have been the person everyone would call in for some{' '}
            <span className="font-extrabold text-white">tech</span> related stuff, be it in school
            or my own neighborhood. My passion for technology has driven me to become a passionate{' '}
            <span className="font-extrabold text-white">Full Stack Software Developer</span> having
            experience in building <span className="font-extrabold text-white">Native Android</span>{' '}
            and <span className="font-extrabold text-white">Web applications</span> with Kotlin,
            Java, JavaScript, React.js, Node.js, and other cool libraries and frameworks.
          </p>

          <div className="flex justify-center mt-8">
            <motion.a
              href="https://drive.google.com/file/d/1dY0XEB-I4fFRsKY2HnCr72bPChSBFtoR/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-6 py-3 rounded-lg font-bold shadow-md hover:bg-secondary-dark-blue"
              variants={fadeIn('up', 'tween', 0.2, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
            >
              Download Resume
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default About;
