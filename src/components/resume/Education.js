import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
    
      <div>
        <div className="py-4 lgl:py-10 font-titleFont flex flex-col gap-4">
          <br />
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-12 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BTech, Computer Science"
            subTitle=" KL University, Vijayawada "
            result="CGPA:9"
          />
          
          <ResumeCard
            title="Secondary School Education"
            subTitle="Sri Chaitanya College,Vijayawada"
            result="93%"
          />
        </div>
      </div>
    

     
    </motion.div>
  );
}

export default Education