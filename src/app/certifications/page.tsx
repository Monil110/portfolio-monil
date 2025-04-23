"use client";

import { useEffect, useRef } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { motion, useAnimation, useInView } from "framer-motion";
import Link from "next/link";

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const CERTIFICATIONS = [
    {
      title: "Data Science for Engineers",
      provider: "NPTEL",
      date: "Mar 2025",
      description: "A course on R Programming, Statistics and its applications, and Linear Algebra. Earned Silver certification with Top 5%ile.",
      details: "This course provided foundational knowledge of statistical methods, data analysis, and R programming for engineering applications.",
      link: "https://internalapp.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS20S63640365301321614",
      skills: "R Programming, Statistical Methods, Linear Algebra, Data Analysis"
    },
    {
      title: "AI for Everyone",
      provider: "Coursera (DeepLearning.AI)",
      date: "",
      description: "A non-technical course designed to help understand AI technologies and their potential business applications.",
      details: "Feb 2024",
      link: "https://www.coursera.org/account/accomplishments/verify/PH5MQRSSK23M",
      skills: "Deep Learning, Machine Learning, Data Science Workflows, AI Strategy"
    },
    {
      title: "Introduction to Generative AI",
      provider: "Coursera (Google Cloud)",
      date: "Jan 2024",
      description: "An introductory course that covers the fundamentals of generative AI and its various applications.",
      details: "",
      link: "https://www.coursera.org/account/accomplishments/verify/6FTCALHG5RTW",
      skills: "Generative AI Fundamentals, AI Model Types, Applications of Generative AI"
    },
    {
      title: "Big Data, Artificial Intelligence, and Ethics",
      provider: "Coursera",
      date: "Mar 2024",
      description: "This course covers the intersection of big data, AI technologies, and the ethical considerations surrounding their use in real-world applications.",
      details: "",
      link: "https://www.coursera.org/account/accomplishments/verify/QHKXQ9FE5RF3",
      skills: "Big Data Analysis, AI Ethics, Data Management"
    },
    {
      title: "Data Analysis with Python",
      provider: "Coursera",
      date: "Feb 2024",
      description: "This course teaches how to analyze data using Python, including techniques such as data cleaning, exploration, and visualization, using popular libraries.",
      details: "",
      link: "https://www.coursera.org/account/accomplishments/verify/92567EMUWKAQ",
      skills: "Python Programming, Data Visualization, Statistical Analysis"
    }
  ];

  return (
    <div ref={ref} className="w-[1200px] max-w-[90%] mx-auto my-16">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
      >
        <h1 className="text-2xl md:text-4xl font-bold mb-8">Certifications</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-opacity-10 bg-white backdrop-blur-md rounded-lg p-6 shadow-lg border border-gray-700 relative"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-semibold">{cert.title}</h3>
                <div className="flex items-center gap-2">
                  <IoMdCheckmarkCircleOutline className="text-green-400" size="1.2rem" />
                  <span className="text-sm text-gray-300">{cert.date}</span>
                </div>
              </div>
              
              <div className="mt-2">
                <span className="text-sm bg-blue-900 bg-opacity-30 px-3 py-1 rounded-full">
                  {cert.provider}
                </span>
              </div>
              
              <p className="mt-4 text-sm md:text-base text-gray-300">
                {cert.description}
              </p>
              
              {cert.details && (
                <p className="mt-2 text-sm italic text-gray-400">
                  {cert.details}
                </p>
              )}
              
              <div className="mt-3">
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-1">Skills Gained</p>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.split(", ").map((skill, idx) => (
                    <span key={idx} className="text-xs bg-gray-800 px-2 py-1 rounded-full text-gray-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-4">
                <Link 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1 transition-colors"
                >
                  View Certificate
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Certifications;
