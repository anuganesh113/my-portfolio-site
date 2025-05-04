import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> ABOUT </span> MYSELF
            </h1>
            <p className="home-about-body">
              <ul>
                <li style={{ listStyle: "none" }}>
                  🚀 Front-End Enthusiast with over 3 years of hands-on
                  experience
                </li>
                <li style={{ listStyle: "none" }}>
                  💻 Proficient in HTML, CSS, and JavaScript
                </li>
                <li style={{ listStyle: "none" }}>
                  ⚛️ Specialized in crafting dynamic user interfaces with React
                </li>
                <li style={{ listStyle: "none" }}>
                  🎨 Keen eye for design and aesthetics
                </li>
                <li style={{ listStyle: "none" }}>
                  🌐 Committed to creating seamless and user-friendly digital
                  experiences
                </li>
                <li style={{ listStyle: "none" }}>
                  🔧 Detail-oriented coder with a focus on clean and efficient
                  code
                </li>
                <li style={{ listStyle: "none" }}>
                  🤝 Collaborative team player with excellent problem-solving
                  skills
                </li>
                <li style={{ listStyle: "none" }}>
                  📈 Passionate about staying updated on the latest web
                  development trends
                </li>
                <li style={{ listStyle: "none" }}>
                  🚀 Let's turn ideas into exceptional web solutions together!
                </li>
              </ul>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="avatar"
                style={{ marginTop: "-50px" }}
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/anuganesh113"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/anu_113_"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/anu-ganesh-1aa351326/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/anu__here/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
