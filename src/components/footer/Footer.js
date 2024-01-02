import React from 'react';
import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai';

const Footer = () => {
  const iconSize = '2.6em';

  return (
    <div className="flex flex-col items-center justify-center bodyColor text-lg py-10">
      <div className="container mx-auto grid grid-cols- md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/pavani-koushik-1b4838272/" target="_blank" rel="noopener noreferrer" className="bannerIcon" style={{ color: '#0077b5', fontSize: iconSize }}>
              <AiOutlineLinkedin />
            </a>  
            <a href="https://github.com/p-koushik123" target="_blank" rel="noopener noreferrer" className="bannerIcon" style={{ color: '#24292e', fontSize: iconSize }}>
              <AiOutlineGithub />
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-xl uppercase text-designColor tracking-wider mb-4">
            Quick Links
          </h3>
          <ul className="flex flex-row gap-4">
            <li>
              <a href="#home" className="hover:text-blue-500 transition duration-300">
                Home
              </a>
            </li>

            <li>
              <a href="#about me" className="hover:text-blue-500 transition duration-300">
                AboutMe
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-500 transition duration-300">
                Projects
              </a>
            </li>
            <li>
              <a href="#resume" className="hover:text-blue-500 transition duration-300">
                Resume
              </a>
            </li>
            
            <li>
              <a href="#contact" className="hover:text-blue-500 transition duration-300">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
