import React from 'react';
import { AiOutlineGithub,AiOutlineLinkedin} from "react-icons/ai";


const ProjectsCard = ({ title, src,githubLink,linkedInLink}) => {
  const iconSize = '2.6em';
  return (
    <div className="bg-bodyColor p-6 rounded-md shadow-md">
      <img src={src} alt={title} className="w-full h-80 object-cover rounded-md mb-4" />
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <div className="flex justify-between">
      <a href={githubLink} target="_blank" rel="noopener noreferrer" className="bannerIcon" style={{ color: '#24292e', fontSize: iconSize }}>
          <AiOutlineGithub />
        </a>
        <a href={linkedInLink} target="_blank" rel="noopener noreferrer" className="bannerIcon" style={{ color: '#0077b5', fontSize: iconSize }}>
          <AiOutlineLinkedin />
        </a>
      </div>
    </div>
  );
};

export default ProjectsCard;
