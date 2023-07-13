import React from 'react';
import {
  About,
  Projects,
  Experience,
  Hero,
  Education
} from '../sections';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Hero />
    <About />
    {/* <Skills /> */}
    <Projects />
    <Experience />
    <Education />
  </div>
);

export default Page;
