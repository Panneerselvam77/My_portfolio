import React, { useState } from "react";
import "./Navbar.css";
// import logo from "../../assets/logo.png";
// import contactImg from "../../assets/contact.png";
import mobmenu from "../../assets/menu.png";
import { Link } from "react-scroll";
import Button from "@mui/material/Button";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const name = "Panneer Selvam";
  return (
    <div>
      <nav className="navbar">
        <h4>{name}</h4>
        {/* <img src={logo} alt="logo-1" className="logo" /> */}
        <div className="desktopMenu">
          <Link
            activeClass="active"
            to="intro"
            spy={true}
            offset={-50}
            smooth={true}
            duration={500}
            className="desktopMenuListItem"
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            offset={20}
            smooth={true}
            duration={500}
            className="desktopMenuListItem"
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="works"
            spy={true}
            offset={-50}
            smooth={true}
            duration={500}
            className="desktopMenuListItem"
          >
            Skills
          </Link>
          {/* <Link
            activeClass="active"
            to="skills"
            spy={true}
            offset={-50}
            smooth={true}
            duration={500}
            className="desktopMenuListItem"
          >
            Skills
          </Link> */}
        </div>
        {/* Contact */}
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          offset={200}
          smooth={true}
          duration={500}
        >
          <Button
            variant="contained"
            style={{
              borderRadius: "2rem",
              padding: "0 1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="desktopMenuButton"
            // onClick={() => {
            //   document
            //     .getElementById("contact")
            //     .scrollIntoView({ behavior: "smooth" });
            // }}
          >
            <ChatBubbleIcon
              /*src={contactImg}*/ alt="contactImg"
              className="desktopMenuImg"
            />
            Contact Me
          </Button>
        </Link>
        <img
          src={mobmenu}
          alt="menu"
          className="mobMenu"
          onClick={() => setShowMenu(!showMenu)}
        />
        <div
          className="navMenu"
          style={{ display: showMenu ? "flex" : "none" }}
        >
          <Link
            activeClass="active"
            to="intro"
            spy={true}
            offset={-50}
            smooth={true}
            duration={500}
            className="listItem"
            onClick={() => setShowMenu(false)}
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            offset={-50}
            smooth={true}
            duration={500}
            className="listItem"
            onClick={() => setShowMenu(false)}
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="works"
            spy={true}
            offset={-50}
            smooth={true}
            duration={500}
            className="listItem"
            onClick={() => setShowMenu(false)}
          >
            Portfolio
          </Link>
          <Link
            activeClass="active"
            to="clients"
            spy={true}
            offset={-50}
            smooth={true}
            duration={500}
            className="listItem"
            onClick={() => setShowMenu(false)}
          >
            Client
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            offset={-50}
            smooth={true}
            duration={500}
            className="listItem"
            onClick={() => setShowMenu(false)}
          >
            Conctat
          </Link>
        </div>
      </nav>
    </div>
  );
}
