import React from "react";
import ServiceImage from "../assets/service.jpg";
// icons
import { BsArrowUpRight } from "react-icons/bs";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
const Services = () => {
  return (
    <div className="section" id="services">
      <div className="container mx-auto flex flex-col items-center justify-between lg:flex-row">
        <div className="flex w-full flex-col items-start gap-4 font-normal lg:w-[500px]">
          <motion.h1
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="font-secondary text-4xl font-semibold uppercase text-accent"
          >
            What i do
          </motion.h1>
          <motion.h1
            variants={fadeIn("up", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="font-secondary text-4xl font-semibold"
          >
            I'm a Freelance Front-end Developer with over 3 years of experience.
          </motion.h1>
          <motion.a
            href="https://github.com/Shaxzod2002"
            target={"_blank"}
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="btn btn-lg flex items-center"
          >
            See my work
          </motion.a>
          <motion.img
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            src={ServiceImage}
            alt="service"
            className="mb-4 rounded-xl shadow-lg shadow-black"
          />
        </div>
        <div className="flex w-full flex-col gap-6 lg:w-1/2">
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex justify-between gap-1 border-b pb-5"
          >
            <div className="flex w-[80%] flex-col gap-3">
              <h2 className="text-4xl">Mentor</h2>
              <p className="leading-5">
                I am active in providing information about learning to young
                people in a language they can understand...
              </p>
            </div>
            <div className="flex flex-col items-end justify-around">
              <a
                href="https://zedacademy.uz/"
                target={"_blank"}
                className="btn flex rounded-full p-2"
              >
                <BsArrowUpRight />
              </a>
              <a
                href="https://zedacademy.uz/"
                target={"_blank"}
                className="text-gradient text-sm"
              >
                Learn more
              </a>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex justify-between gap-1 border-b pb-5"
          >
            <div className="flex w-[80%] flex-col gap-3">
              <h2 className="text-4xl">Freelance</h2>
              <p className="leading-5">
                During these years, many freelancers work in web networks. He is
                a job specialist in these networks - upwork.com...
              </p>
            </div>
            <div className="flex flex-col items-end justify-around">
              <a
                href="https://www.upwork.com/freelancers/~01749c8bfd1a9bd141"
                target={"_blank"}
                className="btn flex rounded-full p-2"
              >
                <BsArrowUpRight />
              </a>
              <a
                href="https://www.upwork.com/freelancers/~01749c8bfd1a9bd141"
                target={"_blank"}
                className="text-gradient text-sm"
              >
                Learn more
              </a>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex justify-between gap-1 border-b pb-5"
          >
            <div className="flex w-[80%] flex-col gap-3">
              <h2 className="text-4xl">Events and Intellect:</h2>
              <p className="leading-5">
                I am an active participant in many events and competitions in my
                field. I am also very passionate about...
              </p>
            </div>
            <div className="flex flex-col items-end justify-around">
              <a
                href="https://freecodecamp.org/certification/WebShohDev/front-end-development-libraries"
                target={"_blank"}
                className="btn flex rounded-full p-2"
              >
                <BsArrowUpRight />
              </a>
              <a
                href="https://freecodecamp.org/certification/WebShohDev/front-end-development-libraries"
                target={"_blank"}
                className="text-gradient text-sm"
              >
                Learn more
              </a>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex justify-between gap-1 border-b pb-5"
          >
            <div className="flex w-[80%] flex-col gap-3">
              <h2 className="text-4xl">Teamwork:</h2>
              <p className="leading-5">
                I can get along quickly in teamwork. I have leadership potential
                in team projects.
              </p>
            </div>
            <div className="flex flex-col items-end justify-around">
              <a
                href="https://github.com/Shaxzod2002/Ozbegim-Ayollari"
                target={"_blank"}
                className="btn flex rounded-full p-2"
              >
                <BsArrowUpRight />
              </a>
              <a
                href="https://github.com/Shaxzod2002/Ozbegim-Ayollari"
                target={"_blank"}
                className="text-gradient text-sm"
              >
                Learn more
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
