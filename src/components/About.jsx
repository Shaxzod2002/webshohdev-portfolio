import React from "react";
import AboutMe from "../assets/about-me.jpg";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
// react-scroll link
import { Link } from "react-scroll";
const About = () => {
  return (
    <div className="section" id="about">
      <div className="container mx-auto flex items-center justify-center">
        <div className="w-full lg:w-1/2">
          <motion.img
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            src={AboutMe}
            alt="about-me"
            className="h-[400px] w-[400px] max-w-full rounded-full object-cover shadow-lg shadow-black"
          />
        </div>
        <div className="flex w-full flex-col gap-4 lg:w-1/2">
          <motion.h1
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="font-secondary text-4xl font-semibold text-accent"
          >
            About Me
          </motion.h1>
          <motion.h2
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-2xl font-semibold"
          >
            I'm a Freelance and Mentor Front-end Developer with over 3 years of
            experience.
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-sm"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            architecto debitis fugiat a odio ut tempora voluptatum,
            reprehenderit nisi consectetur? Adipisci sequi quis nesciunt
            veritatis, quisquam quos odit amet et?
          </motion.p>
          <div className="flex items-center gap-2">
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="w-[100px]"
            >
              <h2 className="text-gradient btn-link font-secondary text-5xl">
                3
              </h2>
              <p className="font-secondary leading-5">Years of Experience</p>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="w-[100px]"
            >
              <h2 className="text-gradient btn-link font-secondary text-5xl">
                10+
              </h2>
              <p className="font-secondary leading-5">Projects Completed</p>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="w-[100px]"
            >
              <h2 className="text-gradient btn-link font-secondary text-4xl">
                6+
              </h2>
              <p className="font-secondary leading-5">Satisfied Clients</p>
            </motion.div>
          </div>
          <div className="flex items-center gap-5">
            <motion.button
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="btn btn-lg font-secondary"
            >
              Contact me
            </motion.button>
            <Link to="work" className="cursor-pointer text-gradient font-secondary text-lg">
              My Portfolio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
