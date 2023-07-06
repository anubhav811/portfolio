'use client';

import React from 'react';
import motion from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import fadeIn from '../utils/motion';

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: 'Babble',
      description: 'An instant messaging and audio-video calling app. Just sign up using your phone number and talk to anyone who uses Babble.',
      stack: 'Kotlin ,Firebase, Retrofit , JitsiMeet SDK , Coroutines , Navigation Components',
      link: 'https://github.com/anubhav811/Babble',
      img: '/pf_babble.png',
    }, {
      id: 2,
      name: 'Go-News',
      description: 'A news app that lets you check out all the latest headlines and also lets you save your favorited headlines for later.',
      stack: 'Kotlin , MVVM , Room , Coroutines , Navigation Components , Glide , Lottie',
      link: 'https://github.com/anubhav811/Go-News',
      img: '/pf_goNews.png',
    }, {
      id: 3,
      name: 'FloraCure',
      description: 'FloraCure is an app that uses CNN to classify plant disease.Users can upload a picture of a plant leaf from their gallery or capture the same from their device`s camera . The CNN model classifies the disease and it is shown to the user .',
      stack: 'Kotlin , Navigation Components , Glide , Lottie , Tensorflow Lite , CNN',
      link: 'https://github.com/anubhav811/floracure',
      img: '/floracure.png',
    }, {
      id: 4,
      name: 'Prompto',
      description: 'A platform to share your favourite prompts that can be used upon various Large Language Models (LLMs) like ChatGPT , Bard.',
      stack: 'NextJS,TailWindCSS,MongoDB',
      link: 'https://github.com/anubhav811/Prompto',
      img: '/prompto.png',
    },
    {
      id: 5,
      name: 'Old Portfolio Website',
      description: 'This is my old portfolio website that I had built ',
      stack: 'HTML,CSS,JS,Bootstrap',
      link: 'https://github.com/anubhav811/anubhav811.github.io',
      img: '/pf_portfolio.png',
    },
    {
      id: 6,
      name: 'DSA Practice',
      description: 'A collection of all the DSA problems that I have solved till now on LeetCode and GeeksForGeeks. ',
      stack: 'C++',
      link: 'https://github.com/anubhav811/DSA-Practice',
      img: '/dsa.png',
    },

  ];
  return (
    <section className="p-8">
      <motion.h2 className="text-4xl font-bold text-center text-secondary-white mb-8 my-10"
        initial="hidden"
        variants={fadeIn('down', 'tween', 0.2, 0.5)}
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        My Projects
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 md:mt-0 mx-auto max-w-6xl"
        variants={fadeIn('up', 'tween', 0.2, 0.5)}
        initial="visible"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial="hidden"
            variants={fadeIn('up', 'tween', 0.2, 0.5)}
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
