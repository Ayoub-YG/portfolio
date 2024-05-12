import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import {Autoplay, EffectCube, Pagination } from "swiper/modules";

import me from "../assets/Me.png";
import Frontend from "../assets/Frontend.svg";
import responsive from "../assets/responsive.svg";
import ReactJs from "../assets/React.svg";
import vue from "../assets/Vue.svg"
import vite from "../assets/vite.svg"
import html from "../assets/html.svg"
import css from "../assets/icons8-css.svg"
import Tailwind from "../assets/css.svg"
import bootstrap from "../assets/bootstarp.svg"
import js from "../assets/JS.svg"
import github from "../assets/github.svg"
import graphql from "../assets/graphql.svg"

export default function Skills() {
  const usersArray = [
    {
      id: 0,
      img: Frontend,
      content: "Frontend Dev",
    },
    {
      id: 1,
      img: Frontend,
      content: "Web dev",
    },
    {
      id: 2,
      img: responsive,
      content: "Responsive",
    },
    {
      id: 3,
      img: ReactJs,
      content: "ReactJS",
    },
    {
      id: 4,
      img: vue,
      content: "VueJS",
    },
    {
      id: 5,
      img: vite,
      content: "ViteJS",
    },
    {
      id: 6,
      img: Tailwind,
      content: "Tailwind css",
    },
    {
      id: 7,
      img: bootstrap,
      content: "BootStrap css",
    },
    {
      id: 8,
      img: html,
      content: "HTML",
    },
    {
      id: 9,
      img: css,
      content: "CSS",
    },
    {
      id: 10,
      img: js,
      content: "JavaScript",
    },
    {
      id: 11,
      img: github,
      content: "Git, Github",
    },
    {
      id: 12,
      img: graphql,
      content: "GraphQL",
    },
  ];

  return (
    <div>
      <div className="pt-[85px] gap-4 flex flex-col justify-center items-center text-white md:pt-32">
        <div>
          <h1 className="font-bold  text-4xl md:text-5xl">SKILLS SUMMARY</h1>
          <p className="text-center  tracking-[0.5em] text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl">
            EXPLORE NOW
          </p>
        </div>

        <div className="skills">
          <Swiper
            effect={"cube"}
            grabCursor={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            autoplay={{
              delay: 6000, 
              disableOnInteraction: false, 
            }}
            pagination={true}
            modules={[EffectCube, Pagination,Autoplay]}
            className="mySwiper"
          >
            {usersArray.map((slide) => (
              <SwiperSlide key={slide.id} id={slide.id}>
                <div className="flex gap-1 justify-center items-center flex-col">
                  <img className="w-80%" src={slide.img} />
                  <h1 className="text-black font-bold text-3xl border-b-2 border-b-white   ">{slide.content}</h1>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
