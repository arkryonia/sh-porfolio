'use client';

import About from './ui/components/About';
import Hero from './ui/components/Hero';
import Skills from './ui/components/Skills';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Hero />
      <About />
      <Skills />

      <div id="projects" className="flex flex-col items-center justify-center w-full h-screen">
        {/* Projects section */}
        <h2 className="text-3xl font-bold">Projects</h2>
      </div>
      {/* Testimonial section */}
      {/* Contact section */}
    </div>
  );
};

export default HomePage;
