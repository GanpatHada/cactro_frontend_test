import React from "react";
import "./Navbar.css";
import {IoIosNotificationsOutline } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
const Navbar = () => {
  return (
    <nav id="main-nav">
      <section id="logo">
        <h1>HOURS</h1>
      </section>
      <section id="navs">
        <ul>
          <li className="all-centered">Dashboard</li>
          <li className="all-centered">Project</li>
          <li className="all-centered">Team</li>
          <li className="all-centered">Clients</li>
          <li className="all-centered">Time</li>
          <li className="all-centered">Reports</li>
        </ul>
      </section>
      <section id="secondary-navs">
        <ul>
        <li className="all-centered" id="notification"><IoIosNotificationsOutline /></li>
        <li className="all-centered" id="profile">
            <img src="https://eclat-media.s3.ap-south-1.amazonaws.com/wp-content/uploads/2021/04/18184841/man3.jpg" alt="" />
        </li>
        <li className="all-centered" id="name">Mario</li>
        <li className="all-centered" id="arrow"><IoIosArrowDown /></li>
        </ul>
       
      </section>
    </nav>
  );
};

export default Navbar;
