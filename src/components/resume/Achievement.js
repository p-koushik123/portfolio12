import React from "react";
import Title from '../layouts/Title';
import RedHat from '../../assets/images/certificate4.PNG'; 
import SimpleProjectsCard from "../projects/SimpleProjectCard";  
import Oracle from '../../assets/images/certificate2.png';
import AWS from '../../assets/images/certificate3.png';

const Achievement = () => {
  return (
    <section id="projects" className="w-full py-40">
      <div className="flex justify-center items-center text-center">
        <Title des="My Certificates" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <SimpleProjectsCard title="Oracle Certified" src={Oracle} />
        <SimpleProjectsCard title="RedHat Certified Enterprise Application Developer" src={RedHat} />
        <SimpleProjectsCard title="AWS Cloud Practitioner Certified" src={AWS} />
      </div>
    </section>
  );
};

export default Achievement;
