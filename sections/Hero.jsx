'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section id="hero-section" className={`${styles.yPaddings} sm:pl-16 pl-10 h-screen flex items-center relative`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <div>
          <motion.h2 variants={textVariant(1.1)} className={styles.heroHeading}>
            Hi, I'm
          </motion.h2>
          <motion.div
            variants={textVariant(1.1)}
            className="flex flex-row justify-center items-center"
          >
            <h2 className={styles.heroHeading}>Anubhav</h2>
          </motion.div>
        </div>
      </div>
    </motion.div>

    {/* <Sidebar /> */}

  </section>
);

export default Hero;
