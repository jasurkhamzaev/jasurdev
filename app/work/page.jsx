"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import Footer from "@/components/Footer";

const projects = [
    {
        num: "01",
        category: "Fresh Fruit",
        title: "project 1",
        description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta quod est, rerum eius consectetur, voluptatum eaque iure laboriosam ut minus corporis ad praesentium blanditiis fugiat minima debitis, vero ipsum. Mollitia quis nisi ducimus cum asperiores. Atque culpa autem exercitationem impedit, et nulla eos ut repellendus corrupti voluptatum error velit iure!",
        stack: [
            { name: "HTML 5" }, { name: "CSS 3" }, { name: "JAVASCRIPT" }
        ],
        image: "/assets/1.png",
        live: "https://freshfruitecom.netlify.app/",
        github: "#",
    },
    {
        num: "02",
        category: "Full Stack",
        title: "project 2",
        description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta quod est, rerum eius consectetur, voluptatum eaque iure laboriosam ut minus corporis ad praesentium blanditiis fugiat minima debitis, vero ipsum. Mollitia quis nisi ducimus cum asperiores. Atque culpa autem exercitationem impedit, et nulla eos ut repellendus corrupti voluptatum error velit iure!",
        stack: [
            { name: "HTML 5" }, { name: "CSS 3" }, { name: "BOOTSTRAP" }, { name: "JAVASCRIPT" }
        ],
        image: "/assets/2.jpg",
        live: "#",
        github: "#",
    },
    {
        num: "03",
        category: "Frontend",
        title: "project 3",
        description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta quod est, rerum eius consectetur, voluptatum eaque iure laboriosam ut minus corporis ad praesentium blanditiis fugiat minima debitis, vero ipsum. Mollitia quis nisi ducimus cum asperiores. Atque culpa autem exercitationem impedit, et nulla eos ut repellendus corrupti voluptatum error velit iure!",
        stack: [
            { name: "NEXT.JS" }, { name: "TAILWIND.CSS" }, { name: "NODE.JS" }, { name: "REACT.JS" }
        ],
        image: "/assets/3.jpg",
        live: "#",
        github: "#",
    },
];

const Work = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex]);
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {
                    delay: 2.4,
                    duration: 0.3,
                    ease: "easeIn"
                },
            }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            {/* outline num */}
                            <div className="text-8xl leading-none font-extrabold text-accent text-outline">
                                {project.num}
                            </div>
                            {/* project category */}
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                                {project.category} Website
                            </h2>
                            {/* project description */}
                            <p className="text-white/60">
                                {project.description}
                            </p>
                            {/* stack */}
                            <ul className="flex gap-4">
                                {project.stack.map((item, index) => (
                                    <li key={index} className="text-xl text-accent">
                                        {item.name}
                                        {index !== project.stack.length - 1 && ","}
                                    </li>
                                ))}
                            </ul>
                            {/* border */}
                            <div className="border border-white/20"></div>
                            {/* buttons */}
                            <div className="flex items-center gap-4">
                                {/* live project */}
                                <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live Project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                {/* github project */}
                                <Link href={project.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github Repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper
                            spaceBetween={30}
                            className="xl:h-[600px] mb-12"
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map((project, index) => (
                                <SwiperSlide key={index} className="w-full">
                                    <div className="h-[500px] relative group flex justify-center items-center bg-pink-50/20">
                                        {/* overlay */}
                                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                        {/* Img */}
                                        <div className="relative w-full h-full">
                                            <Image src={project.image} fill className="object-cover" alt={project.title} />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                            <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 
                            z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover
                            text-primary text-[25px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
                        </Swiper>
                    </div>
                </div>
                <Footer/>
            </div>
        </motion.section>
    );
}

export default Work;
