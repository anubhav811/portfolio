import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
// eslint-disable-next-line quotes
import { motion } from "framer-motion";
import { fadeIn } from '../utils/motion';

const ExperienceCard = ({ company, position, duration, description, link }) => (
  <motion.div className="bg-gray-800 rounded-lg shadow-md p-6 mb-6"
    variants={fadeIn('up', 'tween', 0.2, 0.5)}
    whileInView="show"
    initial="hidden"
    viewport={{ once: true, amount: 0.4 }}
    whileHover={{ scale: 1.04 }}
    onClick={() => window.open(link, '_blank')}
    transition={{ duration: 0.5 }}
  >
    <div className="flex items-center mb-4">
      <h3 className="text-xl font-bold text-white">{company}</h3>
      {link && (
      <a href={link} target="_blank" rel="noopener noreferrer" className="ml-2">
        <FaExternalLinkAlt className="text-gray-400 hover:text-gray-300" />
      </a>
      )}
    </div>
    <p className="text-gray-400 mb-2">{position}</p>
    <p className="text-gray-400 mb-2">{duration}</p>
    <p className="text-gray-300">{description}</p>
  </motion.div>
);

export default ExperienceCard;
