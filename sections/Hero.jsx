'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { staggerContainer, textVariant } from '../utils/motion';
import Link from 'next/link';

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const heroVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="hero-section" className="h-screen flex items-center relative bg-gray-900">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
        className="mx-auto max-w-2xl p-6 text-center"
      >
        <div className="flex flex-col items-center mb-8">
          <motion.img
            src="/profile.png"
            alt="Your Image"
            className="rounded-full w-32 h-32 object-cover"
            variants={textVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          />
          <motion.h2
            variants={textVariants}
            className="text-2xl font-bold text-white mt-4"
          >
            Anubhav Chachra
          </motion.h2>
        </div>

        <motion.h2 variants={textVariants} className="text-6xl font-bold text-white mb-4">
          An Android and
        </motion.h2>
        <motion.div
          variants={textVariants}
          className="flex justify-center items-center"
        >
          <p className="text-6xl font-bold text-white">Web Developer</p>
        </motion.div>
        {/* <motion.p variants={textVariants} className="text-xl text-white mt-4">
          Welcome to my portfolio website!
        </motion.p> */}
         <Link
          href="https://drive.google.com/file/d/1dY0XEB-I4fFRsKY2HnCr72bPChSBFtoR/view?usp=sharing"
          target="_blank"   
           >
        <motion.button
       
          variants={textVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-white text-blue-500 mx-5 hover:text-blue-600 hover:bg-blue-100 px-4 py-2 mt-8 rounded-full font-bold shadow-md"
        >
          Get my CV
        </motion.button>
        </Link>      
      </motion.div>
    </section>
  );
};

export default Hero;

