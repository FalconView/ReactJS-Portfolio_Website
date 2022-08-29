import React from "react";
import "./about.css";
import Image from "../../assests/avatar-2.svg";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              I'm a Full stack developer with 3 years of experience in digital
              marketing and content creation. I have creativity skills, love to
              solve critical problems and a keen to always improve and learn
              more. HTML, CSS, MySQL (sqlite2), JavaScript (Node.js, Express.js,
              Sequelize, Heroku, Sessions, Handlebars, working with API (POST,
              GET, DELETE & PUT), jQuery, React.js, Bootstrap, localStorage &
              Tailwind/DaisyUi) & experienced in different development
              structures such as TDD, OOP, ORM & MVC. Lastly, an expert in Adobe
              Premiere Rush, and Adobe Photoshop.
            </p>
            <a href="" className="btn">
              Download Resume
            </a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Development</h3>
                <span className="skills__number development">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">UI/UX Design</h3>
                <span className="skills__number">80%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage ui__design"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Photography</h3>
                <span className="skills__number">70%</span>
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
