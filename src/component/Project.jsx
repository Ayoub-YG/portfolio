import React from "react";
import Travel from "../assets/travelApp.png";
import management from "../assets/managerApp.png";
import Todo from "../assets/todoList.png";
import bankist from "../assets/bankist.png";
import passwordGe from "../assets/carshub.png";

export default function Project() {
  const projects = [
    {
      title: "Travel tourism",
      img: Travel,
      description:
        "application serves as a comprehensive travel companion, helping users research destinations, plan trips, make bookings, navigate unfamiliar places, and share their experiences",
      github: "https://github.com/Ayoub-YG/Travel",
      lien: "https://travel-tourism-six.vercel.app/",
      technologies: ["reactJS", "tailwindCss"],
    },
    {
      title: "management App",
      img: management,
      description:
        "A management app is a software application designed to assist individuals or organizations in managing various aspects of their operations, projects, tasks, or resources",
      github: "RR",
      lien: "https://management-app-peach.vercel.app/",
      technologies: ["reactJS", "tailwindCss"],
    },
    {
      title: "To-Do List",
      img: Todo,
      description:
        "The To-Do List application is a simple yet powerful tool designed to help users keep track of their tasks and stay organized",
      github: "https://github.com/Ayoub-YG/TodoListApp",
      lien: "https://todo-list-app-ay.vercel.app/",
      technologies: ["reactJS", "tailwindCss"],
    },
    {
      title: "Cars Hub",
      img: passwordGe,
      description:
        "A website that displays cars with full information is a specialized platform where users can browse and explore a wide range of vehicles, each accompanied by comprehensive details",
      github: "https://github.com/Ayoub-YG/carsHub",
      lien: "https://cars-hub-beta.vercel.app/",
      technologies: ["Next.js", "tailwindCss","Rapid API"],
    },
    {
      title: "Bankist",
      img: bankist,
      description:
        "Bankist is an innovative online banking application that provides users with convenient access to their accounts, financial transactions, and banking services from anywhere, at any time",
      github: "https://github.com/Ayoub-YG/bankist-project",
      lien: "https://bankist-sigma-sand.vercel.app/",
      technologies: ["html", "css", "advanced javaScript"],
      Note:"Note: no responsive, for testing {user1 :js, code Pin :1111 ; user2: jd, 2222 }"
    },
  ];

  return (
    <div>
      <div className="pt-[85px] gap-4 flex flex-col justify-center items-center text-white md:pt-32">
        <h1 className="font-bold text-4xl md:text-5xl mb-1">Projects</h1>
        <p className="text-center  tracking-[0.5em] text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl">
          EXPLORE NOW
        </p>
      </div>
      <div className="py-5 px-[6%]">
        <div className="box-container text-white ">
          {projects.map((project, index) => (
            <div className="px-3  py-2 gap-2 sm:gap-3   rounded-sm border-white flex flex-col" key={index}>
              <div className=" w-full  ">
                {" "}
                <img src={project.img} className=" w-full h-40 object-contain " />
              </div>
              <p className="font-bold ml-5 sm:ml-0">{project.title}</p>
              <h1 className="text-xs ml-5 sm:ml-0 ">{project.description}</h1>
              <h1 className="text-[9.4px] ml-5 text-red-300 " > {project.Note}</h1>
              <h1 className="text-sm ml-5 sm:ml-0"><span>technologies:  </span><span className="text-xs">{project.technologies.join(" - ")}</span></h1>
              <h2 className=" text-sm ml-5 sm:ml-0">
                <a href={project.github} className=" border mr-4 border-gray-500 rounded-3xl px-4 py-1" >github</a> <a className="border mr-4 border-gray-500 rounded-3xl px-4 py-1" href={project.lien} >link</a>{" "}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
