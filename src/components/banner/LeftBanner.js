

import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Media from './Media';


const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ['Full Stack Developer.', 'Data Analyst.'],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 15,
    delaySpeed: 3000,
  });

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full lgl:w-1/2 flex flex-col justify-center items-center gap-20">
        <div className="flex flex-col gap-5 text-center">
    
          <h1 className="text-6xl font-bold text-white">
            Hi, I'm <span className="text-lightText capitalize">Pavani Koushik</span>
          </h1>
          <h2 className="text-4xl font-bold text-white">
            a <span>{text}</span>
            <Cursor cursorBlinking="false" cursorStyle="|" cursorColor="#33ccff" />
          </h2>
          <br/>
          <p className="text-base font-bodyFont leading-6 tracking-wide">
          I utilize animation as a third dimension to help me simplify experiences and lead you through each contact. I'm not simply adding motion to spice things up, but I'm doing it in ways that.


          </p>
        </div>
        <Media />
      </div>
    </div>
  );
};

export default LeftBanner;
