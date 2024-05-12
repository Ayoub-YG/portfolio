import React from "react";
import profile from "../assets/moi.jpg";
import pdf from "../assets/my-resume.pdf"

export default function about() {


  const downloadFile = () => {
    // Replace 'example.pdf' with the path to your file
    const fileUrl = pdf;
  
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', 'my-resume.pdf'); // Set the filename for the download
  
    // Append the link to the document body
    document.body.appendChild(link);
  
    // Click the link programmatically to trigger the download
    link.click();
  
    // Clean up: remove the link from the DOM
    document.body.removeChild(link);
  };

  return (
    <div className="px-[6%] pt-[85px] gap-4 flex flex-col justify-center items-center text-white md:pt-32">
      <div className="h-[200px] w-[200px] rounded-full overflow-hidden">
        <img
          src={profile}
          alt="image profile"
          className="w-full h-full object-cover   "
        />
      </div>
      <h1 className="text-4xl font-bold z-[1]   animate-bounce mt-6 md:text-5xl ">
        AYOUB YAGOUBI !
      </h1>
      <p className="text-xl md:text-2xl md:font-medium ">
        I do code &{" "}
        <span className="text-transparent font-semibold  bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400">
          Problem solving
        </span>
      </p>
      <p className="  text-gray-300 max-w-[400px] text-center md:max-w-[550px] ">
        Passionate Software Engineer with a focus on web development and network
        Engineering, dedicated to crafting elegant and user-friendly web
        applications.
      </p>
      <div className="flex justify-center text-md">
        <button onClick={downloadFile}  className=" py-3 px-10 border-white border-[1px] font-semibold text-center rounded-full hover:bg-white hover:text-black ">
          My Resume
        </button>
      </div>
      <div className="mt-16 flex flex-col text-center justify-center">
        <h1 className="font-bold text-4xl md:text-5xl  ">ABOUT ME</h1>
        <p className="  tracking-[0.5em] text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl">
          EXPLORE NOW
        </p>
        <p className="max-w-[700px] text-left px-3 ">
          Hi, I'm Ayoub Yagoubi, a passionate web developer with a love for
          creating beautiful and functional websites and applications.I'm
          Currently studying at the Higher School of Computer Science(ESI SBA)
          with a focus on web development and network Engineering. I enjoy
          learning new technologies and exploring creative ways to solve
          problems.
          <br />
          <br />
          With a fervor for crafting elegant solutions, I navigate the
          ever-evolving landscape of software development.
        </p>
      </div>
    </div>
  );
}
