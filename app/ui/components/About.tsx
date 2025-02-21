import { motion } from 'motion/react';

const About = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <motion.div
      id="about"
      className="flex flex-col items-center justify-center w-full min-h-screen px-4 py-8"
      animate={{ opacity: isVisible ? 1 : 0 }}
    >
      <h2 className="text-3xl font-bold mb-8">About</h2>
      <div className="w-full max-w-3xl space-y-8">
        <p className="text-lg md:text-xl text-justify">
          As an Information Systems Engineer and a passionate advocate for open-source technologies,
          I thrive at the intersection of technology and culture. With a strong background in
          developing applications using Java, Flutter and React, I lead a digital services company
          dedicated to creating impactful solutions that cater to diverse user needs. My commitment
          to the Debian project reflects my belief in the power of community-driven software, and I
          am currently focused on developing a localized version of Debian for West Africa.
        </p>
        <p className="text-lg md:text-xl text-justify">
          In addition to my technical expertise, I am pursuing a degree in Sociology and
          Anthropology, where I explore the intricate relationship between traditional spiritual
          practices and societal dynamics. This unique blend of skills allows me to approach
          challenges with a data-driven mindset while incorporating cultural perspectives that drive
          sustainable development.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
