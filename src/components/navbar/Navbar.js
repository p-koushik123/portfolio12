import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import { AiOutlineLinkedin ,AiOutlineGithub} from 'react-icons/ai';
import { navLinksdata } from '../../constants';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const handleSetActive = (to) => {
    setActiveLink(to);
  };
  const iconSize = '2.6em'; 
  return (
    <div className="w-full h-24 sticky top-0 z-50 inline-flex absolute left-12  bg-bodyColor bottom-50 mx-auto flex justify-center items-center font-titleFont border-b-[1px] border-b-blue-700 ">
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-20 lg:gap-34">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className={`text-base font-normal tracking-wide cursor-pointer hover:text-designColor duration-300 relative bottom-43 left-23 ${
                activeLink === link ? 'underline-animation' : ''
              }`}
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onSetActive={() => handleSetActive(link)}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer "
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[20%] h-screen overflow-scroll absolute top-0 left-0 bg-bodyColor p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className={`text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300 ${
                      activeLink === item.link ? 'underline-animation' : ''
                    }`}
                  >
                    <Link
                      onClick={() => {
                        setShowMenu(false);
                        handleSetActive(item.link);
                      }}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4">
                  Find me in
                </h2>
                <div className="flex gap-4">
                <a href="https://github.com/p-koushik123" target="_blank" rel="noopener noreferrer" className="bannerIcon" style={{ color: '#24292e', fontSize: iconSize }}>
          <AiOutlineGithub />
        </a>
                  
    <a href="https://www.linkedin.com/in/pavani-koushik-1b4838272/" target="_blank" rel="noopener noreferrer" className="bannerIcon" style={{ color: '#0077b5', fontSize: iconSize }}>
          <AiOutlineLinkedin />
        </a>
                </div>
              </div>
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer "
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
