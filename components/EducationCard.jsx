import React from 'react';
// eslint-disable-next-line quotes
import { motion } from "framer-motion";
import { fadeIn } from '../utils/motion';

const EducationCard = ({ institution, degree, duration, description }) => (
  <motion.div
    className="bg-gray-800 rounded-2xl shadow-lg p-6 mb-8"
    variants={fadeIn('up', 'tween', 0.2, 0.5)}
    initial="visible"
    whileInView="show"
    whileHover={{ scale: 1.04 }}
    viewport={{ once: true, amount: 0.4 }}
  >
    <h3 className="text-lg font-bold text-white">{institution}</h3>
    <p className="text-gray-300 mb-2">{degree}</p>
    <p className="text-gray-400 text-sm mb-4">{duration}</p>
    <p className="text-gray-300">{description}</p>
  </motion.div>
);

export default EducationCard;
