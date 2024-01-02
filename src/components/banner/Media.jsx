import React from 'react';
import { AiOutlineInstagram, AiOutlineGithub, AiOutlineWhatsApp ,AiOutlineLinkedin} from "react-icons/ai";

const Media = () => {
  const iconSize = '2.6em'; 

  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between  items-center">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4 text-center">
          Find me in
        </h2>
        <br />

        <div className="flex gap-4">
         <a href="https://www.instagram.com/koushik_567/"  target="_blank" rel="noopener noreferrer" className="bannerIcon" style={{ color: '#8a3ab9', fontSize: iconSize }}>
          <AiOutlineInstagram />
        </a>
        <a href="https://github.com/p-koushik123" target="_blank" rel="noopener noreferrer" className="bannerIcon" style={{ color: '#24292e', fontSize: iconSize }}>
          <AiOutlineGithub />
        </a>
    
    <a href="https://wa.me/8106230214" target="_blank" rel="noopener noreferrer" className="bannerIcon" style={{ color: '#25d366', fontSize: iconSize }}>
      <AiOutlineWhatsApp />
    </a>

    <a href="https://www.linkedin.com/in/pavani-koushik-1b4838272/" target="_blank" rel="noopener noreferrer" className="bannerIcon" style={{ color: '#0077b5', fontSize: iconSize }}>
          <AiOutlineLinkedin />
        </a>
        
        </div>
      </div>
      <div>
      </div>
    </div>
  );
}

export default Media;

























