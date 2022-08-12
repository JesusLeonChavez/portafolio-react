import React from "react";
import "./about.css";
import Image from "../../assets/avatar-2.svg";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About me</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about_img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about_description">
              I'm Jesus León, better known as Leónidas, I'm a web developer and
              salesforce developer, I'm from Lima, Peru. I have experience in
              development and analysis
            </p>
            <a href="" className="btn">Download CV</a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Development web</h3>
                <span className="skills__number development">75%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Analysis</h3>
                <span className="skills__number">70%s</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage ui__desing"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Salesfoce Apex</h3>
                <span className="skills__number">55%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
