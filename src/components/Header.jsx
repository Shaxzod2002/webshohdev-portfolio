import React from "react";
import { Link } from "react-scroll";
const Header = () => {
  return (
    <div className="py-8">
      <div className="mx-auto container">
        <div className="flex items-center lg:justify-between justify-center gap-x-4 flex-wrap">
          <a href="/">
            <h1 className="text-4xl text-gradient btn-link">WebShohDev</h1>
          </a>
          <Link to="work" className="cursor-pointer font-secondary">Work with me</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
