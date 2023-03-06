import React from "react";
// motion
import { motion } from "framer-motion";
// fide
import { fadeIn } from "../variants";
const Contact = () => {
  return (
    <div className="section" id="contact">
      <div className="container mx-auto flex flex-col gap-y-4 pb-14 lg:flex-row lg:items-center lg:justify-center">
        <motion.div
          variants={fadeIn("right", 0.7)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="w-full lg:w-[40%]"
        >
          <p className="text-accent">Contact Me</p>
          <h1 className="font-secondary text-6xl">Lest's work together!</h1>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.7)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="w-full lg:w-[40%]"
        >
          <form
            action="https://formsubmit.co/raximovshaxzodbek2002@gmail.com"
            method="POST"
            className="flex min-h-[450px] flex-col items-start gap-5 rounded-xl border-[2px] py-3 px-5"
          >
            <input
              type="text"
              placeholder="Your name"
              name="fullName"
              className="w-full border-b-[2px] bg-transparent py-1 outline-none focus:border-accent"
            />
            <input
              type="email"
              placeholder="Your email"
              name="email"
              className="w-full border-b-[2px] bg-transparent py-1 outline-none focus:border-accent"
            />
            <textarea
              name="comment"
              placeholder="Your message"
              className="mt-5 h-[150px] w-full resize-none border-b-[2px] bg-transparent py-1 outline-none focus:border-accent"
            ></textarea>
            <input
              type="submit"
              value="Send message"
              className="btn btn-lg mt-5"
            />
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
