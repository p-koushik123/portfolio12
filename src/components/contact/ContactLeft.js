import React from 'react'
// import { FaFacebookF, FaTwitter } from "react-icons/fa";
// import { contactImg } from "../../assets/index";
import { AiOutlineGithub,AiOutlineLinkedin} from "react-icons/ai";





const ContactLeft = () => {
  const iconSize = '2.6em'; 
  return (
    <div className="w-full lgl:w-[30%] h-full  p-5 lgl:p-20 rounded-lg shadow-lg flex flex-col gap-6 justify-center ">
      {/* <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={}
        alt="contactImg"
      /> */}
      <div className="flex flex-col gap-1">
        <h3 className="text-3xl font-bold text-white">Pavani Koushik</h3>
        <p className="text-lg font-normal text-gray-400">
          Full Stack Developer
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
  Phone: 
  <a href="tel:+91810623024" className="text-lightText">
    +91 8106230214
  </a>
</p>
<p className="text-base text-gray-400 flex items-center gap-2">
  Email: 
  <a href="https://mail.google.com/mail/u/0/#inbox" className="text-lightText">
    koushikpavani6@gmail.com
  </a>
</p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/pavani-koushik-1b4838272/" target="_blank" rel="noopener noreferrer" className="bannerIcon" style={{ color: '#0077b5', fontSize: iconSize }}>
          <AiOutlineLinkedin />
         </a>  
         <a href="https://github.com/p-koushik123" target="_blank" rel="noopener noreferrer" className="bannerIcon" style={{ color: '#24292e', fontSize: iconSize }}>
          <AiOutlineGithub />
         </a>
        </div>
      </div>
    </div>
  );
}


export default ContactLeft