import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineCloudDownload } from "react-icons/ai";

const links=[
    {
        id:1,
        child:(
            <>
            LinkedIn <FaLinkedin size={30} />
          </>
        ),
        href:"https://linkedin.com",
        style:'rounded-tr-md'
    },
    {
        id:2,
        child:(
            <>
            Github <FaGithub size={30} />
          </>
        ),
        href:"https://github.com/sunil-dhi",
    },
    {
        id:3,
        child:(
            <>
            Email <HiOutlineMail size={30} />
          </>
        ),
        href:"mailto:sunildhimanmatharu@gmail.com",
    },
    {
        id:4,
        child:(
            <>
            Resume <AiOutlineCloudDownload size={30} />
          </>
        ),
        href:"/sunilrr.pdf",
        style:'rounded-br-md',
        download:true
    },
]


const SocialLinks = () => {
  return (
    <div name="Experience" className="hidden lg:flex top-[35%] left-0 fixed">
      <ul>

        {
            links.map(({id,child,href,style,download})=>(
                <li key={id}  className={"flex justify-between w-40 h-14 px-4 items-center ml-[-100px] hover:rounded-md hover:ml-[-10px] duration-700 bg-gray-500" +" " + style}>
                <a href={href} 
                download={download}
                target="_blank"
                rel="noreferrer"
                className="w-full flex justify-between items-center text-white">
                  {child}
                </a>
              </li>
            ))
        }
        
      </ul>
    </div>
  );
};

export default SocialLinks;
