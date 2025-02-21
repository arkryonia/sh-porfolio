import { Button } from '@/components/ui/button';
import { LinkedinIcon, Mail, Twitter } from 'lucide-react';
import Link from 'next/link';

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
          <Link target="_blank" rel="noopener noreferrer" href="https://x.com/alololagba">
            <Button size="icon">
              <Twitter />
            </Button>
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/sounton-hodonou/"
          >
            <Button size="icon">
              <LinkedinIcon />
            </Button>
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/sounton-hodonou/"
          >
            <Button size="icon">
              <Mail />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
