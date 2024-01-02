import React from "react";
import Title from "../layouts/Title";
import { aboutmeData } from "../../data/data";
import Resume from '../../assets/resume.pdf';
import ProfileImage from '../../assets/images/pr1.png';  

const AboutMe = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = Resume;
    link.download = 'Pavani_Koushik_Resume.pdf';
    link.click();
  };

  return (
    <section
      id="about me"
      className="w-full py-20 flex flex-col items-center justify-center"
    >
      <Title des="About Me" />

      <div className="w-full py-20 border-l- border-r- font-sans-serif-light font-size-21 text-center">
        {aboutmeData.map((item) => (
          <div key={item.id} className="mb-28">
            <p className="base">
              {item.des.split('\n').map((paragraph, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <br />}
                  {paragraph}
                </React.Fragment>
              ))}
            </p>
          </div>
        ))}

        <img
          src={ProfileImage}  
          alt="Profile"
          className="rounded-full h-32 w-32 mb-4 object-cover"
          style={{ margin: "0 auto" }}  
        />

      
        <button
          onClick={handleDownloadResume}
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-full mt-4 cursor-pointer"
        >
          Download Resume
        </button>
      </div>
    </section>
  );
};

export default AboutMe;
