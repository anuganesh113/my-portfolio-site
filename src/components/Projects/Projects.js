import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import podamibe from "../../Assets/Projects/1.png";
import acrsc from "../../Assets/Projects/2.png";
import ytClone from "../../Assets/Projects/3.png";
import cms from "../../Assets/Projects/4.png";
import realEstate from "../../Assets/Projects/5.png";
import consultancy from "../../Assets/Projects/6.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={podamibe}
              isBlog={false}
              title="Podamibe Nepal Pvt. Ltd."
              description="Software Company web app built with html, css, scss, bootstrap and javascript. Includes different pages for blogs, projects, team members,contact, etc."
              demoLink="http://podamibe.com.au/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={acrsc}
              isBlog={false}
              title="ACRSC - Online Electronics Store"
              description="Ecommerce web app built with html, css, bootstrap and javascript Includes features of adding product to card, login, viewing purchases and so on."
              demoLink="https://acrsc-ecommerce-store.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ytClone}
              isBlog={false}
              title="Youtube Clone"
              description="Youtube Clone built with react js and tailwind css. Used public youtube API for the content. Has features of watching videos, searching videos, filtering videos, and so on. This was built as a side project."
              demoLink="https://youtube-clone-anu.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cms}
              isBlog={false}
              title="Case Management System"
              description="Case Management System built with html, css, bootstrap and javascript. This project was done for Kathmandu Metropolitan City. It has options for filing cases, viewing registered cases according to date, filtering the cases, deleting solved cases, and so on.This was a major project of mine from which I gained a lot of experience and learned so many things."
              demoLink="https://ijalas.kathmandu.gov.np/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={realEstate}
              isBlog={false}
              title="Real Estate Management System"
              description="Real Estate Website built with html, css and Javascript. It has features of adding houses, viewing different houses on sale or for rent, viewing various properties according to price and location, and so on."
              demoLink="https://real-estate-ekhin.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={consultancy}
              isBlog={false}
              title="Consultancy Website"
              description="Educational Consultancy Website built with html, css, bootstrap and javascript. It has different pages including study abroad,preparation classes, universities, services and so on."
              demoLink="https://wieducation.edu.np/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
