import { IconBrandGithub, IconBrandLinkedin, IconBrandX } from '@tabler/icons-react';
import { Mail } from 'lucide-react';

export const menuItems = [
  {
    id: 1,
    name: 'About',
    href: '#about',
  },
  {
    id: 2,
    name: 'Skills',
    href: '#skills',
  },
  {
    id: 3,
    name: 'Projects',
    href: '#projects',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];
export const socialLinks = [
  {
    id: 1,
    icon: <IconBrandGithub />,
    href: 'https://github.com/arkryonia/',
  },
  {
    id: 2,
    icon: <IconBrandX />,
    href: 'https://x.com/alololagba',
  },
  {
    id: 3,
    icon: <IconBrandLinkedin />,
    href: 'https://www.linkedin.com/in/sounton-hodonou/',
  },
  {
    id: 4,
    icon: <Mail />,
    href: 'mailto:arkryonia@gmail.com',
  },
];
