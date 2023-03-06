import React from "react";
import { BiClipboard, BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquare } from "react-icons/bs";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="fixed bottom-2 z-50 w-full overflow-hidden lg:bottom-8">
      <div className="container mx-auto">
        <div className="mx-auto flex h-[96px] w-full max-w-[460px] items-center justify-between rounded-full bg-black/20 px-5 text-2xl backdrop-blur-2xl">
          <Link
            to="home"
            activeClass="active"
            offset={-200}
            spy={true}
            className="flex h-[60px] w-[60px] cursor-pointer items-center justify-center"
          >
            <BiHomeAlt />
          </Link>
          <Link
            to="about"
            activeClass="active"
            spy={true}
            className="flex h-[60px] w-[60px] cursor-pointer items-center justify-center"
          >
            <BiUser />
          </Link>
          <Link
            to="services"
            activeClass="active"
            spy={true}
            className="flex h-[60px] w-[60px] cursor-pointer items-center justify-center"
          >
            <BsClipboardData />
          </Link>
          <Link
            to="work"
            activeClass="active"
            spy={true}
            className="flex h-[60px] w-[60px] cursor-pointer items-center justify-center"
          >
            <BsBriefcase />
          </Link>
          <Link
            to="contact"
            activeClass="active"
            spy={true}
            className="flex h-[60px] w-[60px] cursor-pointer items-center justify-center"
          >
            <BsChatSquare />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
