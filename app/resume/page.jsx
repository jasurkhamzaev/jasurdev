"use client";

import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaNodeJs,
    FaReact,
    FaBootstrap,
    FaPython,
    
} from 'react-icons/fa';

import {
    SiTailwindcss, SiNextdotjs, SiTypescript, SiMongodb, SiMysql
} from "react-icons/si"


const about = {
    title: 'About Me',
    description: "loremdahgdajdadad",
    info: [
        {
            fieldName: "Name :",
            fieldValue: "Jasur Khamzayev"
        },
        {
            fieldName: "Phone :",
            fieldValue: "(+998) 88 146 46 48"
        },
        {
            fieldName: "Experience :",
            fieldValue: "2+ Years"
        },
        {
            fieldName: "Linkedin :",
            fieldValue: "Jasur Khamzayev"
        },
        {
            fieldName: "Email :",
            fieldValue: "info@jasurdev.com"
        },
        {
            fieldName: "Xobby :",
            fieldValue: "Computer Science"
        },
        {
            fieldName: "Languages :",
            fieldValue: "Uzbek, English"
        },
    ]
}

const experience = {
    icon: '/assets/resume/badge.svg',
    title: 'My Experience',
    description: "Loremsjdfjksdfskj",
    items: [
        {
            company: "Jasur Dev LLC",
            position: "Full Stack Developer",
            duration: "2024 - Present",
        },
        {
            company: "Jasur Dev LLC",
            position: "Full Stack Developer",
            duration: "2024 - Present",
        },
        {
            company: "Jasur Dev LLC",
            position: "Full Stack Developer",
            duration: "2024 - Present",
        },
        {
            company: "Jasur Dev LLC",
            position: "Full Stack Developer",
            duration: "2024 - Present",
        },
        {
            company: "Jasur Dev LLC",
            position: "Full Stack Developer",
            duration: "2024 - Present",
        },
        {
            company: "Jasur Dev LLC",
            position: "Full Stack Developer",
            duration: "2024 - Present",
        },
        {
            company: "Jasur Dev LLC",
            position: "Full Stack Developer",
            duration: "2024 - Present",
        },
        {
            company: "Jasur Dev LLC",
            position: "Full Stack Developer",
            duration: "2024 - Present",
        }
    ]
};

const education = {
    icon: '/assets/resume/badge.svg',
    title: 'My Education',
    description: "Loremsjdfjksdfskj",
    items: [
        {
            institution: "346-school Tashkent, Uzbekitan",
            degree: "Student",
            duration: "2011 - 2022 ",
        },
        {
            institution: "Tashkent International University Of Education",
            degree: "Full Stack and Mobile Developer",
            duration: "2023 - To the present day",
        },
        {
            institution: "Udemy Online Course Platform",
            degree: "Web Developer",
            duration: "In April 2023",
        },
        {
            institution: "One Million Uzbekcoders Platform",
            degree: "Frontend Developer",
            duration: "In June 2023",
        },
    ]
}

const skills = {
    title: "My Skills",
    description: "loremasdbasd",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "HTML 5",
        },
        {
            icon: <FaCss3 />,
            name: "CSS 3",
        },
        {
            icon: <FaJs />,
            name: "JAVASCRIPT",
        },
        {
            icon: <FaNodeJs />,
            name: "NODE.JS",
        },
        {
            icon: <FaReact />,
            name: "REACT.JS",
        },
        {
            icon: <FaBootstrap />,
            name: "BOOTSTRAP 5",
        },
        {
            icon: <FaPython />,
            name: "PYTHON",
        },
        {
            icon: <SiTailwindcss />,
            name: "TAILWIND.CSS",
        },
        {
            icon: <SiNextdotjs />,
            name: "TAILWIND.CSS",
        },
        {
            icon: <SiTypescript />,
            name: "TYPESCRIPT.JS",
        },
        {
            icon: <SiMongodb />,
            name: "MONGODB",
        },
        {
            icon: <SiMysql />,
            name: "MySQL",
        },

    ]
}

import { Tabs, TabsTrigger, TabsList, TabsContent } from '@/components/ui/tabs';

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';

import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {
                    delay: 2.4,
                    duration: 0.4,
                    ease: "easeIn"
                },
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs
                    defaultValue="experience"
                    className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="about">About Me</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                    </TabsList>


                    {/* Content */}
                    <div className="min-h-[70vh] w-full">
                        {/* experinece */}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {experience.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => (
                                            <li
                                                key={index}
                                                className="bg-[#232329] h-[184px] py-6
                                            px-10 rounded-xl flex flex-col justify-center items-center lg:items-start
                                            gap-1">
                                                <span className="text-accent">
                                                    {item.duration}
                                                </span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                    {item.position}
                                                </h3>
                                                <div className="flex items-center gap-3">
                                                    {/* dot */}
                                                    <span className="w-[6px] h-[6px] rounded-full
                                                    bg-accent"></span>
                                                    <p className="text-white/60">{item.company}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>

                            </div>
                        </TabsContent>
                        {/* education */}
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {education.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => (
                                            <li
                                                key={index}
                                                className="bg-[#232329] h-[184px] py-6
                                            px-10 rounded-xl flex flex-col justify-center items-center lg:items-start
                                            gap-1">
                                                <span className="text-accent">{item.duration}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                    {item.degree}
                                                </h3>
                                                <div className="flex items-center gap-3">
                                                    {/* dot */}
                                                    <span className="w-[6px] h-[6px] rounded-full
                                                    bg-accent"></span>
                                                    <p className="text-white/60">{item.institution}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/* skills */}
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                                    {skills.skillList.map((skill, index) => {
                                        return <li key={index}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                        <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                            {skill.icon}
                                                        </div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p className="capitalize">{skill.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>
                                    })}
                                </ul>
                           </div>
                        </TabsContent>
                        {/* about */}
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item, index) => {
                                        return <li key={index} className="flex items-center justify-center
                                        xl:justify-start gap-4">
                                            <span className="text-white/60">{item.fieldName}</span>
                                            <span className="text-xl">{item.fieldValue}</span>
                                        </li>
                                    })}
                                </ul>
                           </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}

export default Resume;
