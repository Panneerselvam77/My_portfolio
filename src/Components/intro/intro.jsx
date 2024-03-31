import React from "react";
import "./Intro.css";
import btnImg from "../../assets/hireme.png";
import videoAnimation from "../../assets/video-animation.json";
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
            Video editor & Motion graphics
          </span>
          <p className="introPara">
            Highly skilled and creative video editor with 5+ years of experience
            in crafting compelling video content using industry-standard
            software like Final Cut Pro X (FCPX) and Adobe Premiere Pro. I am
            proficient in motion graphics creation using Adobe After Effects and
            possess additional skills in Adobe Photoshop and Illustrator for
            design elements. Proven ability to collaborate effectively with
            teams, meet deadlines, and deliver high-quality productions that
            resonate with target audiences. I am seeking a challenging
            opportunity to utilize my expertise and passion for storytelling to
            elevate your brand's visual identity.
          </p>

          <a
            style={{ color: "white" }}
            href={require("../../assets/video_Panneer.pdf")}
            download={"Panneer_Resume.pdf"}
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
            animationData={videoAnimation}
          />
        </div>
      </section>
    </div>
  );
}
