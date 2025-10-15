import React from 'react';
import { Github, Linkedin, ExternalLink, Facebook } from 'lucide-react';

const Footer = () => {
  
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Kalhara187',
      icon: Github,
      label: 'View my GitHub profile'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/yashoda-kalhara-bb4594306',
      icon: Linkedin,
      label: 'Connect with me on LinkedIn'
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/yashoda.kalhara.92',
      icon: Facebook,
      label: 'Send me an email'
    }
  ];

  return (
    <footer className="bg-neutral-900 text-white py-12" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary-400">Portfolio</h3>
            <p className="text-neutral-300 leading-relaxed">
              Passionate about creating user-centered digital experiences through 
              thoughtful design and clean code. Always learning, always growing.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <nav className="flex flex-col space-y-2" aria-label="Footer navigation">
              <a 
                href="#home" 
                className="text-neutral-300 hover:text-primary-400 transition-colors duration-200"
              >
                Home
              </a>
              <a 
                href="#about" 
                className="text-neutral-300 hover:text-primary-400 transition-colors duration-200"
              >
                About Me
              </a>
              <a 
                href="#projects" 
                className="text-neutral-300 hover:text-primary-400 transition-colors duration-200"
              >
                Projects
              </a>
              <a 
                href="#contact" 
                className="text-neutral-300 hover:text-primary-400 transition-colors duration-200"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-300 hover:text-primary-400 transition-colors duration-200 p-2 rounded-full hover:bg-neutral-800"
                    aria-label={link.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-neutral-700">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4 text-sm text-neutral-400">
              <span>Built with React & JavaScript</span>
              <ExternalLink size={16} className="text-primary-400" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;