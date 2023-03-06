import React from "react";
// images
import Image from "../assets/avatar.jpg";
// icons
import {
  FaGithub,
  FaYoutube,
  FaInstagram,
  FaTwitch,
  FaLinkedin,
} from "react-icons/fa";
// type animation
import { TypeAnimation } from "react-type-animation";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
const Banner = () => {
  return (
    <div className="flex min-h-[85vh] items-center lg:min-h-[78vh]" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between gap-y-8 lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-center font-secondary lg:text-left"
          >
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-5xl font-bold uppercase"
            >
              Ben <span>AIDEN</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 font-secondary text-3xl font-semibold uppercase lg:text-6xl"
            >
              <span className="mr-4 text-white">I am a</span>
              <TypeAnimation
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
                sequence={["Developer", 2000, "Youtuber", 2000, "Gamer", 2000]}
              />
            </motion.div>
            <p className="mx-auto mb-8 max-w-lg lg:mx-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              debitis illum quia suscipit tenetur!
            </p>
            <div className="mx-auto mb-12 flex max-w-max items-center gap-x-6 lg:mx-0">
              <a
                className="btn btn-lg flex items-center"
                href="mailto:raximovshaxzodbek2002@gmail.com"
              >
                Contact me
              </a>
              <a
                href="https://resume.io/r/t7zghmdz5"
                target={"_blank"}
                className="text-gradient btn-link"
              >
                My Resume
              </a>
            </div>
            {/* socials */}
            <div className="mx-auto flex max-w-max gap-x-6 text-2xl lg:mx-0">
              <motion.a
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                target={"_blank"}
                href="https://www.youtube.com/@webshohdev"
              >
                <FaYoutube />
              </motion.a>
              <motion.a
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                target={"_blank"}
                href="https://github.com/Shaxzod2002"
              >
                <FaGithub />
              </motion.a>
              <motion.a
                variants={fadeIn("up", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                target={"_blank"}
                href="https://www.instagram.com/webshohdev_uz/"
              >
                <FaInstagram />
              </motion.a>
              <motion.a
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                target={"_blank"}
                href="https://twitter.com/WebShohDev"
              >
                <FaTwitch />
              </motion.a>
              <motion.a
                variants={fadeIn("up", 0.7)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                target={"_blank"}
                href="https://www.linkedin.com/in/webshohdev"
              >
                <FaLinkedin />
              </motion.a>
            </div>
          </motion.div>
          {/* images */}
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex lg:justify-end"
          >
            <img
              src={Image}
              alt="WebShohDev Image"
              className="w-[300px] max-w-full rounded-lg lg:w-[400px]"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
