import React from "react";
import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello there! I'm <span className="purple">Anu Ganesh</span>, a
            passionate front-end web developer with over 3 years of hands-on
            experience in crafting dynamic and visually stunning digital
            experiences. My toolkit includes a mastery of HTML, CSS, and
            JavaScript, where I thrive in turning ideas into seamless,
            user-friendly interfaces. With a keen eye for design and a love for
            clean, efficient code, I specialize in bringing websites to life and
            ensuring they not only meet but exceed user expectations. My
            expertise extends to React, where I leverage its power to build
            responsive, interactive web applications. I'm not just a coder; I'm
            a problem solver, a creative thinker, and a dedicated professional
            committed to delivering top-notch web solutions. Let's build
            something extraordinary together!
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
