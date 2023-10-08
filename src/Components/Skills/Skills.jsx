import React from "react";
import "./skills.css";
import UiDesign from "../../assets/ui-design.png";
import WebDesigin from "../../assets/website-design.png";
// import BgAni from "../../assets/Bg-animation.json";
// import Lottie from "lottie-react";

export default function Skills() {
  return (
    <div>
      <section id="skills">
        <span className="skillTitle">What I do</span> <br />
        {/* <span className="skillDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
          cumque! Ratione quae, ipsa rerum voluptatum laboriosam dicta, natus
          neque laborum delectus recusandae, culpa inventore eos earum cum?
          Incidunt, adipisci dolorum!
        </span> */}
        <div className="skillBars">
          {/* Front End */}
          <div className="skillBar">
            <img src={WebDesigin} alt="webdesign" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Front End</h2>
              <p>
                Front-end developer with a passion for creating innovative and
                user-friendly web applications. Proven ability to develop and
                implement complex front-end solutions using HTML, CSS,
                JavaScript, and React Js frameworks, Bootstrap etc... Expertise
                in responsive design, performance optimization, and
                accessibility. Seeking a role in a collaborative and supportive
                environment where I can continue to learn and grow as a
                front-end developer.
              </p>
            </div>
          </div>
          {/* Back End */}
          <div className="skillBar">
            <img src={WebDesigin} alt="webdesign" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Back End</h2>
              <p>
                Backend developer experience in building and maintaining
                scalable, performant, and real-time web applications and APIs
                using Node.js, Express.js, and MongoDB. Proven ability to design
                and implement complex data models and queries, optimize and
                troubleshoot performance, and deploy and manage applications in
                production. Strong understanding of RESTful APIs, web sockets,
                and cloud computing platforms. Seeking a challenging role where
                I can use my skills to help a company achieve its goals.
              </p>
            </div>
          </div>
          <div className="skillBar">
            <img src={UiDesign} alt="uidesign" className="skillBarImg" />
            <div className="skillBarText">
              <h2>UI/UX Design</h2>
              <p>
                UI/UX Designer with a passion for creating user-friendly and
                visually appealing interfaces. implemet Seeking a challenging
                role where I can use my skills to design and develop innovative
                products that meet the needs of users.
              </p>
            </div>
          </div>
        </div>
        {/* <Lottie animationData={BgAni} /> */}
      </section>
    </div>
  );
}
