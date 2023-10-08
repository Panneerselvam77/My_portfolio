import React from "react";
import "./Work.css";
import HTML from "../../assets/Logos/HTML.png";
import CSS from "../../assets/Logos/CSS.png";
import JAVASCRIPT from "../../assets/Logos/JAVASCRIPT.png";
import REACT from "../../assets/Logos/REACT.png";
import NODEJS from "../../assets/Logos/NODEJS.png";
import MONGODB from "../../assets/Logos/MONGODB.png";
import BOOTSTRAP from "../../assets/Logos/BOOTSTRAP.png";
import MYSQL from "../../assets/Logos/MYSQL.png";
import POSTMAN from "../../assets/Logos/POSTMAN.png";
import NPM from "../../assets/Logos/NPM.png";
import XD from "../../assets/Logos/XD.png";
import AWS from "../../assets/Logos/AWS.png";

export default function Work() {
  return (
    <div>
      <section id="works">
        <h2 className="worksTitle">My Skills</h2>
        {/* <span className="worksDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          exercitationem nemo odit consequuntur repudiandae consectetur
          temporibus similique aliquid tempore incidunt blanditiis cumque,
          dolores quaerat soluta? Obcaecati laboriosam laborum quia iusto.
        </span> */}
        {/* <h2>Front End </h2> */}
        <div className="worksImg">
          <img src={HTML} alt="porfolio" className="workImg" />
          <img src={CSS} alt="porfolio" className="workImg" />
          <img src={JAVASCRIPT} alt="porfolio" className="workImg" />
          <img src={REACT} alt="porfolio" className="workImg" />
          <img src={BOOTSTRAP} alt="porfolio" className="workImg" />
          <img src={NODEJS} alt="porfolio" className="workImg" />
          <img src={NPM} alt="porfolio" className="workImg" />
          <img src={MONGODB} alt="porfolio" className="workImg" />
          <img src={MYSQL} alt="porfolio" className="workImg" />
          <img src={POSTMAN} alt="porfolio" className="workImg" />
          <img src={AWS} alt="porfolio" className="workImg" />
          <img src={XD} alt="porfolio" className="workImg" />
        </div>

        {/* <button className="workbtn">See more..</button>  */}
      </section>
    </div>
  );
}
