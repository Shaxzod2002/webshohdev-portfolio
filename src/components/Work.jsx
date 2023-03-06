import React, { useEffect, useState } from "react";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
import axios from "axios";
const Work = () => {
  const [projects, setProjects] = useState([]);
  const [isProjects, setIsProjects] = useState(false);
  useEffect(() => {
    const getProjects = async (url) => {
      const res = await axios.get(url);
      setProjects(res.data);
    };
    getProjects("projects.json");
  }, []);

  const filterProjects = projects.filter((item) => {
    if (!isProjects) {
      if (item.id <= 3) {
        return item;
      }
    } else {
      return item;
    }
  });

  return (
    <div className="section" id="work">
      <div className="container mx-auto flex flex-col flex-wrap justify-center gap-8 lg:flex-row">
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="flex w-full flex-col items-start gap-4 lg:w-[40%]"
        >
          <h1 className="font-secondary text-4xl">My Latest Work</h1>
          <p className="leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            velit eaque aperiam iure voluptates fuga? Libero repudiandae quam
            architecto voluptate, qui adipisci enim eius odio facere! Quas
            officia non quidem!
          </p>
          {!isProjects && (
            <button
              className="btn py-2 px-6"
              onClick={() =>
                isProjects ? setIsProjects(false) : setIsProjects(true)
              }
            >
              View all projects
            </button>
          )}
        </motion.div>
        {filterProjects.map((item) => {
          return (
            <motion.div
              className="relative flex w-full items-center justify-center overflow-hidden rounded-xl lg:w-[40%] shadow-md shadow-gray-400"
              variants={fadeIn("up", Number(`0.${item.id * 0.6}`))}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              key={item.id}
            >
              <a href={item.link} target={"_blank"}>
                <img src={item.image} className="w-full" alt={item.id} />
                <div className="group group absolute top-0 flex h-full w-full flex-col items-start justify-end bg-black/60 pl-5">
                  <h2 className="text-gradient absolute bottom-[-50px] text-3xl duration-300 group-hover:bottom-10">
                    {item.service}
                  </h2>
                  <p className="absolute bottom-[-50px] duration-300 group-hover:bottom-2">
                    {item.title}
                  </p>
                </div>
              </a>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Work;
