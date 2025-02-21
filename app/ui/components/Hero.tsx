import { Separator } from '@radix-ui/react-separator';
import Image from 'next/image';
import Link from 'next/link';
import { ThemeSwitcher } from './theme-switcher';

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full px-4 py-8">
      <Image
        src="/me.jpg"
        alt="Sounton Hodonou"
        width={200}
        height={200}
        className="rounded-full mb-8 md:mb-14 grayscale hover:grayscale-0 transition duration-300 ease-in-out"
      />
      <nav className="flex flex-wrap justify-center gap-4 md:space-x-4">
        <Link href="#about" className="hover:underline">
          About
        </Link>
        <Link href="#skills" className="hover:underline">
          Skills
        </Link>
        <Link href="#projects" className="hover:underline">
          Projects
        </Link>
        <Link href="#testimonials" className="hover:underline">
          Testimonials
        </Link>
        <Link href="#contact" className="hover:underline">
          Contact
        </Link>
      </nav>
      <Separator className="my-4" />
      <h1 className="text-4xl md:text-5xl lg:text-8xl font-black text-center">SOUNTON HODONOU</h1>
      <p className="w-full md:w-3/4 lg:w-1/2 text-center text-lg md:text-xl mt-4 md:mt-8 lg:mt-16">
        Empowering Digital Solutions with Innovative Technology and Cultural Insights.
      </p>
      <ThemeSwitcher />
    </div>
  );
};

export default Hero;
