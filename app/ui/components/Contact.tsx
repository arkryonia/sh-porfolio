import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { socialLinks } from '../../constants/constants';

const Contact = () => {
  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-center w-full min-h-screen px-4 py-8"
    >
      <h2 className="text-3xl font-bold mb-8">Contact</h2>
      <div className="w-full max-w-3xl space-y-8">
        {/* Social media buttons + email */}
        <div className="flex items-center justify-center space-x-4">
          {socialLinks.map(link => (
            <Link key={link.id} target="_blank" rel="noopener noreferrer" href={link.href}>
              <Button size="icon">{link.icon}</Button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
