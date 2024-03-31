import React from "react";
import "./skills.css";
import UiDesign from "../../assets/ui-design.png";
import WebDesigin from "../../assets/website-design.png";

export default function Skills() {
  return (
    <div>
      <section id="skills">
        <span className="skillTitle">What I do</span> <br />
        <div className="skillBars">
          {/* Front End */}
          <div className="skillBar">
            <img src={WebDesigin} alt="webdesign" className="skillBarImg" />
            <div className="skillBarText">
              <h2 style={{ marginBottom: 10 }}>Video edtiting</h2>
              <p>
                Video editing involves the meticulous process of assembling,
                manipulating, and refining raw footage to create cohesive and
                impactful visual narratives. Utilizing advanced tools like Final
                Cut Pro and Adobe Premiere Pro, editors navigate through a
                plethora of footage across various genres, including explainer
                videos, brand promos, production reels, fashion showcases, and
                modeling portfolios. Their expertise lies in crafting seamless
                transitions, applying effects, adjusting color grading, and
                integrating audio elements to enhance storytelling. From
                organizing raw footage into a structured timeline to creating
                engaging montages and incorporating special effects, video
                editors play a pivotal role in bringing ideas to life while
                ensuring the final product resonates with the intended audience.
                Their skillful execution transforms disparate clips into
                polished masterpieces, capturing the essence of the subject
                matter and delivering compelling visual experiences.
              </p>
            </div>
          </div>

          <div className="skillBar">
            <img src={UiDesign} alt="uidesign" className="skillBarImg" />
            <div className="skillBarText">
              <h2 style={{ marginBottom: 10 }}>Motion graphics</h2>
              <p>
                Adobe After Effects serves as a versatile tool for enhancing
                video content with graphics, text overlays, and color
                correction. With its array of features, After Effects enables
                users to seamlessly integrate necessary graphics elements,
                including visual effects and motion graphics, to elevate the
                visual storytelling of the video. Moreover, the software
                facilitates the addition of text overlays such as lower thirds
                and titles, allowing for customization of appearance, animation,
                and timing to suit the video's style and tone. Additionally,
                After Effects provides robust tools for color correction and
                grading, enabling editors to adjust colors, tones, brightness,
                contrast, and apply filters to achieve the desired look and
                maintain visual consistency across different shots. Through
                these capabilities, After Effects empowers video editors to
                create compelling and visually engaging content that effectively
                communicates their message to the audience.
              </p>
            </div>
          </div>
        </div>
        {/* <Lottie animationData={BgAni} /> */}
      </section>
    </div>
  );
}
