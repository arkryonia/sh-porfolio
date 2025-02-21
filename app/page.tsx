'use client';

import { Button } from '@/components/ui/button';
import { CircleArrowUp } from 'lucide-react';
import About from './ui/components/About';
import Contact from './ui/components/Contact';
import Hero from './ui/components/Hero';
import Skills from './ui/components/Skills';

const HomePage = () => {
  return (
    <>
      <Button
        className="rounded-50 fixed bottom-4 right-4"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <CircleArrowUp />
      </Button>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Hero />
        <About />
        <Skills />
        <Projects />
        {/* Contact section */}
        <Contact />
      </div>
    </>
  );
};

export default HomePage;

function Projects() {
  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center w-full min-h-screen px-4 py-8"
    >
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="w-full max-w-3xl space-y-8">
        <h3 className="text-2xl font-bold">Tolome OS</h3>
        <p className="text-lg md:text-xl text-justify">
          Tolome OS is a project that aims to create a localized version of the Debian operating
          system for West Africa. By translating the Debian installer and packages into local
          languages, we hope to make Debian more accessible to users in the region. This project is
          a collaboration between the Debian Localization team and the West African Free Software
          Foundation.
        </p>
        <h3 className="text-2xl font-bold">Flutter Chat App</h3>
        <p className="text-lg md:text-xl text-justify">
          The Flutter Chat App is a real-time messaging application built using the Flutter
          framework and Firebase. It allows users to send text messages, images, and videos to their
          friends and family. The app features end-to-end encryption, push notifications, and a
          user-friendly interface.
        </p>
        <h3 className="text-2xl font-bold">React E-Commerce Site</h3>
        <p className="text-lg md:text-xl text-justify">
          The React E-Commerce Site is an online store built using React and Redux. It allows
          customers to browse products, add them to their cart, and checkout securely. The site
          features a responsive design, product search, and user authentication.
        </p>
      </div>
    </div>
  );
}
