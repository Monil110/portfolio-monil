"use client"

import { motion } from "framer-motion";
import { GithubIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from "@/components/Icons";

const Footer = () => {
  return (
    <div className="mt-auto py-10">
      <p className="text-center text-sm md:text-base">Designed and Developed by Monil Mehta</p>
      <div className="flex justify-center items-center flex-wrap gap-8 mt-4">
        <motion.a
          href="https://github.com/Monil110"
          target="_blank"
          whileHover={{ y: -6 }}
          whileTap={{ scale: 1 }}
        >
          <GithubIcon className="w-6" />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/monil-mehta-264498297/"
          target="_blank"
          whileHover={{ y: -6 }}
          whileTap={{ scale: 1 }}
        >
          <LinkedInIcon className="w-6" />
        </motion.a>
        <motion.a
          href="https://x.com/Monil0808"
          target="_blank"
          whileHover={{ y: -6 }}
          whileTap={{ scale: 1 }}
        >
          <TwitterIcon className="w-6" />
        </motion.a>
        <motion.a
          href="https://www.instagram.com/monilmehta__/"
          target="_blank"
          whileHover={{ y: -6 }}
          whileTap={{ scale: 1 }}
        >
          <InstagramIcon className="w-8" />
        </motion.a>
      </div>
    </div>
  );
};

export default Footer;
