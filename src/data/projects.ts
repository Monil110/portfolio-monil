import { IProject } from "./types"
import cfstress from "@/assets/projectImages/cfstress.png"
import codegeass from "@/assets/projectImages/codegeass.png"
import smartskill_studio from "@/assets/projectImages/smartskill_studio.png"
import bookstation from "@/assets/projectImages/bookstation.png"
import blog from "@/assets/projectImages/blog.png"
import chatbot from "@/assets/projectImages/chatbot.png"
import key_value_cache from "@/assets/projectImages/key_value_cache.png";

const projects: Array<IProject> = [
  {
    title: "CF Stress",
    description: "Community driven, highly customizable, no-code tool to stress test Codeforces problems. Frontend - React, Backend - Golang, Database - MongoDB",
    thumbnail: cfstress,
    githubLink: ""
  },
  {
    title: "Code Geass",
    description: "Developed a high-performing coding website, enabling users to improve algorithmic problem-solving skills. Frontend - React, Backend - Nodejs, Database - MongoDB",
    thumbnail: codegeass,
    githubLink: ""
  },
  {
    title: "Realtime Chatbot",
    description: "Developed Realtime Chatbot that performs client queries and integrated Socket-io in chat server. Frontend - HTML, CSS, JS. Backend - Nodejs. Database - MongoDB",
    thumbnail: chatbot,
    githubLink: ""
  },
]

export default projects
