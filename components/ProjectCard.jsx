import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const ProjectCard = ({ project }) => (
  <motion.div
    className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden m-2"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    viewport={{ once: true, amount: 0.4 }}
    onClick={() => window.open(project.link, '_blank')}
  >
    <div className="bg-black">
      <Image
      width={1000}
      height={1000}
        src={project.img}
        alt={project.name}
        className="object-cover w-full h-40"
      />
    </div>
    <div className="p-4">
      <h3 className="text-lg font-bold text-white">{project.name}</h3>
      <div className="mb-3">
        <strong className="text-white block text-sm">Description:</strong>
        <p className="text-gray-300 text-sm overflow-ellipsis overflow-hidden h-16">
          {project.description}
        </p>
      </div>
      <div className="flex items-center">
        <div className="flex-1">
          <strong className="text-white block text-sm">Stack:</strong>
          <p className="text-gray-300 text-sm">{project.stack}</p>
        </div>
        <div className="ml-auto">
          <Link href={project.link} target="_blank">
            <FaGithub className="text-white text-2xl" />
          </Link>
        </div>
      </div>
    </div>
  </motion.div>
);

export default ProjectCard;