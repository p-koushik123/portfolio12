import React from 'react';
import Title from '../layouts/Title';
import { AMS } from '../../assets/index';
import { ELM } from '../../assets/index';
import { PF } from '../../assets/index';
import ProjectsCard from './ProjectsCard';

const projectsData = [
  {
    title: 'MERN PROJECT',
    src: AMS,
    githubLink: 'https://github.com/sarathchandrareddygeeda/AMS',
    linkedInLink: 'https://www.linkedin.com/pulse/automobile-systemams-sdp-2-pavani-koushik%3FtrackingId=qgMmBvX2R9K8P727iXQJ9Q%253D%253D/?trackingId=qgMmBvX2R9K8P727iXQJ9Q%3D%3D',
  },
  {
    title: 'JAVA PROJECT',
    src: ELM,
    githubLink: 'https://github.com/saikishorechatla/SDP-3',
    linkedInLink: 'https://www.linkedin.com/pulse/employee-leave-management-system-pavani-koushik%3FtrackingId=XQN5pXEuSHOaWeYZ50xh7w%253D%253D/?trackingId=XQN5pXEuSHOaWeYZ50xh7w%3D%3D',
  },
  {
    title: 'Portfolio',
    src: PF,
    githubLink: '',
    linkedInLink: '',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="w-full py-10">
      <div className="flex justify-center items-center text-center">
        <Title des="My Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        {projectsData.map((project, index) => (
          <ProjectsCard
            key={index}
            title={project.title}
            src={project.src}
            githubLink={project.githubLink}
            linkedInLink={project.linkedInLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
