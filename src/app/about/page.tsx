"use client";

import { useEffect, useRef } from "react";
import { IoIosStar } from "react-icons/io";
import { motion, useAnimation, useInView } from "framer-motion";
import SkillSection from "@/app/about/SkillSection";
import AboutAvatarSVG from "@/app/about/AboutAvatarSVG";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const leftSlideControls = useAnimation();
  const rightSlideControls = useAnimation();
  const mainControls = useAnimation();

  useEffect(() => {
    leftSlideControls.start("visible");
    rightSlideControls.start("visible");
    mainControls.start("visible");
  }, [isInView]);

  const ACHIEVEMENTS = [
    {
      text: "Pupil on Codeforces",
      link: "https://codeforces.com/profile/daddymonil",
      logo: "/codeforces.svg"
    },
    {
      text: "Achieved Highest Rating of 1620 (3 Star) on CodeChef",
      link: "https://www.codechef.com/users/monill",
      logo: "/codechef.svg"
    },
    {
      text: "Rating 1500+ in leetcode",
      link: "https://leetcode.com/u/daddymonil/",
      logo: "/leetcode.svg"
    }
  ];

  const EDUCATION = [
    {
      institution: "RV College of Engineering",
      location: "Bangalore, IN",
      degree: "BE Artificial Intelligence and Machine Learning",
      performance: "GPA: 9.36",
      duration: "2023 - 2027"
    },
    {
      institution: "Sri Chaitanya PU College",
      location: "Bangalore",
      degree: "Pre University PCMC",
      performance: "Percentage: 95.5%",
      duration: "2021 - 2023"
    }
  ];

  return (
    <div ref={ref} className="w-[1200px] max-w-[90%] mx-auto md:mt-10">
      {/* About Me Section - Now First */}
      <div className="flex flex-col md:flex-row gap-4 mb-12">
        <motion.div
          className="md:w-[60%] flex flex-col justify-center px-8"
          variants={{
            hidden: { opacity: 0, x: "-80px" },
            visible: { opacity: 1, x: "0" },
          }}
          initial="hidden"
          animate={leftSlideControls}
          transition={{ duration: 0.5, ease: "easeIn" }}
        >
          <h1 className="text-2xl md:text-4xl font-bold">About Me</h1>
          <p className="mt-6 text-sm md:text-base">
            Hi Everyone, I am Monil Mehta from Bengaluru, India. I am pursuing
            my undergraduate degree from RVCE.
          </p>
          <div className="mt-8 text-sm md:text-base">
            <p>Some of my competitive programming achievements are:</p>
          </div>
          <ul>
            {ACHIEVEMENTS.map((achievement, key) => (
              <li key={key} className="flex gap-3 md:items-center mt-4">
                <div>
                  <IoIosStar size="1.3rem" />
                </div>
                <p className="text-sm md:text-base flex items-center gap-2">
                  {achievement.text}
                  <a 
                    href={achievement.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="ml-2 inline-flex items-center transition-transform hover:scale-110"
                  >
                    <img 
                      src={achievement.logo} 
                      alt="" 
                      className="w-6 h-6" 
                    />
                  </a>
                </p>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          className="md:w-[40%]"
          variants={{
            hidden: { opacity: 0, x: "80px" },
            visible: { opacity: 1, x: "0" },
          }}
          initial="hidden"
          animate={rightSlideControls}
          transition={{ duration: 0.5, ease: "easeIn" }}
        >
          <AboutAvatarSVG className="w-[100%]" />
        </motion.div>
      </div>

      {/* Education Section - Now Second */}
      <motion.div
        className="mb-12"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl md:text-4xl font-bold mb-6">Education</h1>
        <div className="space-y-6">
          {EDUCATION.map((edu, index) => (
            <div key={index} className="border-l-4 border-blue-600 pl-4">
              <div className="flex justify-between items-start flex-col md:flex-row">
                <div>
                  <h3 className="text-xl font-semibold">{edu.institution}</h3>
                  <p className="text-gray-300">{edu.degree}</p>
                  <p className="text-blue-400 font-medium">{edu.performance}</p>
                </div>
                <div className="text-right mt-2 md:mt-0">
                  <p className="font-medium">{edu.location}</p>
                  <p className="text-gray-400">{edu.duration}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      
      {/* Skills Section - Kept the same */}
      <motion.div
        className="my-10"
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <SkillSection />
      </motion.div>
    </div>
  );
};

export default About;