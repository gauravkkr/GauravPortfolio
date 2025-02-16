import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";

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
              imgPath={chatify}
              isBlog={false}
              title="CalculatorApp"
              description="CalculatorApp is an Android Application using Android Studio. It is written using Java and Xml . User can able to do basic Calculation using this apps. It will be helpful to user who needs help in Calculation."
              ghLink="https://github.com/gauravkkr/CAlculatorApp"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="My Portfolio"
              description="CalculatorApp is an Android Application using Android Studio. It is written using Java and Xml . User can able to do basic Calculation using this apps. It will be helpful to user who needs help in Calculation."
              ghLink="https://github.com/gauravkkr/GauravPortfolio"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
