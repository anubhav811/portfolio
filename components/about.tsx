"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      Since childhood, I have been the person everyone would call in for some{' '}
            <span className="font-extrabold text-white">tech</span> related stuff, be it in school
            or my own neighborhood. My passion for technology has driven me to become a passionate{' '}
            <span className="font-extrabold text-white">Full Stack Software Developer</span> having
            experience in building <span className="font-extrabold text-white">Native Android</span>{' '}
            and <span className="font-extrabold text-white">Web applications</span> with Kotlin,
            Java, JavaScript, React.js, Node.js, and other cool libraries and frameworks.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies. I also enjoy{" "}
        <span className="font-medium">learning new things</span>.      </p>
    </motion.section>
  );
}
