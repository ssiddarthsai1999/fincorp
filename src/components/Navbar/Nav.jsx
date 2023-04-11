import React from 'react'
import "./Navbar.css"
import Group from "../../assets/Group.svg";
function Nav() {
  return (
      <div className="mt-5 flex align-middle items-center  justify-between p-2 mr-10">
          <div className="">
              <img src={Group} alt='logo'></img>
          </div>
          <div className="right hidden sm:flex  font-bold text-2xl">
              <ul className="flex gap-10 leading-tight">
                  <a href="#features">
                      <li>Features</li>
                  </a>
                  <a href="#integrations">
                      <li>Integrations</li>
                  </a>
                  <a href="#testimonials">
                      <li>Testimonials</li>
                  </a>
                  <a href="#contact">
                      <li>Contact</li>
                  </a>
              </ul>
          </div>
      </div>
  );
}

export default Nav