import { IProject } from "./types"
import quarks from "@/assets/projectImages/quarks.png"
import bytebuddy from "@/assets/projectImages/bytebuddy.png"
import ems from "@/assets/projectImages/ems.png"
import shuddh from "@/assets/projectImages/shuddh.png"
import clubverse from "@/assets/projectImages/clubverse.png"

const projects: Array<IProject> = [
  {
    title: "Quarks Finance",
    description: "A finance platform for stock market simulations, strategy building, AI investment suggestions, and dashboards. React, TypeScript, Tailwind, Next.js, Python, SQLite.",
    thumbnail: quarks,
    githubLink: "https://github.com/carpeadiam/quarksFinanceFE"
  },
  {
    title: "Byte Buddy",
    description: "An AI assistant for RVCE students using RAG with LangChain, FAISS, Google Generative AI, and Streamlit. Helps answer college-related queries using PDF knowledge base.",
    thumbnail: bytebuddy,
    githubLink: "https://github.com/Monil110/Byte-Buddy"
  },
  {
    title: "University Exam Management & Scheduling System",
    description: "Role-based web app for managing courses, enrollments, and exam timetables. Uses Graph Coloring, Genetic Algorithm, Flask, MongoDB, Next.js.",
    thumbnail: ems,
    githubLink: "https://github.com/Joseph25Rejo/EMS"
  },
  {
    title: "Shuddh – Arduino Based Milk Purity Tester",
    description: "AI-powered Arduino project for milk purity testing using sensors and kNN ML model. Built with Python, Arduino, ML, IoT.",
    thumbnail: shuddh,
    githubLink: "https://github.com/Monil110/Shuddh"
  },
  {
    title: "ClubVerse - College Club Management System",
    description: "Flutter app to manage college clubs with event planning, messaging, announcements, and analytics. Backend - Firebase.",
    thumbnail: clubverse,
    githubLink: "https://github.com/Monil110/ClubVerse-College-Club-Management-app"
  }
]

export default projects
