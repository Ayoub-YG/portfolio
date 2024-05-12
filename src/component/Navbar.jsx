import React,{useState} from "react";
import iconSidebar from "../assets/sidebaricon.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [toggle, setToggle] = useState(false)

  const handelToggle = () => {
      setToggle(!toggle)
  }
  
  return (
    <div>
      <div className={`bg-gray-900 fixed ${toggle ? "flex" :"hidden"} sm:hidden justify-center items-center flex-col  top-0 w-[90%] left-[5%] text-center transition-all duration-300  py-6 z-50`}>
        <h1 className="absolute right-5 top-2  text-white cursor-pointer" onClick={() => setToggle(false)} >X</h1>
        <a href="https://www.linkedin.com/in/ayoub-yagoubi-79198b233/" className="my-4 hover:text-gray-400 cursor-pointer" >Contact</a>
        <a href="https://github.com/Ayoub-YG" className="hover:text-gray-400 cursor-pointer">Project</a>
      </div>
    <div className="Nav w-full flex sm:justify-between ">
      <div className="flex justify-center items-center">
        <img
          src={iconSidebar}
          alt="sidebar"
          className="w-15 px-2 h-8 cursor-pointer flex pl-9 sm:hidden"
          onClick={() => setToggle(true)}
        />
        <h1 className="bg-red-400 cursor-pointer text-white mx-9 px-2 rounded font-semibold ">
          A.YAGOUBI
        </h1>
      </div>
      <a href="https://www.linkedin.com/in/ayoub-yagoubi-79198b233/" ><h1 className="text-white hidden sm:flex sm:mr-8 font-semibold cursor-pointer"> Contact</h1></a>
    </div>
    </div>
  );
}
