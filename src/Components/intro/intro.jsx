import React from "react";
import "./Intro.css";
// import bg from "../../assets/image.png";
import btnImg from "../../assets/hireme.png";
import studnetAnime from "../../assets/Dev.json";
// import { Link } from "react-scroll";
import { Button } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import Lottie from "lottie-react";
export default function Intro() {
  return (
    <div>
      <section id="intro">
        <div className="introContent">
          <span className="hello">Hi</span>
          <span className="introText">
            I'am <span className="introName">Panneer Selvam</span> <br />
            Full-stack Web Developer
          </span>
          <p className="introPara">
            I am a passionate full-stack web developer with proficiency in
            front-end and server-side languages. I am self-taught, and I have
            improved my skills through reading documentation, watching YouTube
            videos, and taking Udemy courses.I have strong knowledge in
            JavaScript, HTML, CSS, React, Node.js, and MongoDB. able to write
            code that is easy to read, reusable, and maintainable. I am looking
            for a full-stack web developer position at a fast-paced tech
            company.
          </p>

          <a
            style={{ color: "white" }}
            href={require("../../assets/Panneer resume_2.0.pdf")}
            download={"Panneer resume_2.0.pdf"}
          >
            <Button
              variant="contained"
              style={{
                borderRadius: "2rem",
                padding: "1rem 2rem",
                margin: "1rem 0",
              }}
              className="btn"
            >
              <WorkIcon src={btnImg} alt="hireme" className="btnImg" />
              Hire Me
            </Button>
          </a>
        </div>
        <div>
          <Lottie
            style={{
              width: 700,
              height: 600,
              marginTop: 100,
              paddingLeft: 250,
            }}
            loop={true}
            className="bg"
            animationData={studnetAnime}
          />
        </div>
      </section>
    </div>
  );
}
