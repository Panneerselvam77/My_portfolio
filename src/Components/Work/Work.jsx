import React from "react";
import "./Work.css";
import fcpx from "../../assets/Logos/FCPX.png";
import Premiere from "../../assets/Logos/Premiere.png";
import AE from "../../assets/Logos/After_Effects.png";
import Illustrator from "../../assets/Logos/Illustrator.png";
import images from "../../assets/Logos/images.png";
import XD2 from "../../assets/Logos/XD2.png";
import InDesign from "../../assets/Logos/InDesign.png";

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
          <img src={fcpx} alt="final-cut-pro" className="workImg" />
          <img src={Premiere} alt="adobe-primerepro" className="workImg" />
          <img src={AE} alt="adobe-after-effects" className="workImg" />
          <img src={Illustrator} alt="adobe-primerepro" className="workImg" />
          <img src={images} alt="adobe-primerepro" className="workImg" />
          <img src={XD2} alt="xd" className="workImg" />
          <img src={InDesign} alt="xd" className="workImg" />
        </div>

        {/* <button className="workbtn">See more..</button>  */}
      </section>
    </div>
  );
}
