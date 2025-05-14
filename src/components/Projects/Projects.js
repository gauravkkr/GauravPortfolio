import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Portfolio from "../../Assets/Projects/Portfolio.png";
import chatify from "../../Assets/Projects/chatify.png";
import Calculator from "../../Assets/Projects/Calculator.png";



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
              imgPath={Calculator}
              isBlog={false}
              title="CalculatorApp"
              description="CalculatorApp is an Android AppliI developed a Basic Calculator App that performs essential arithmetic operations such as addition, subtraction, multiplication, and division. The app features a clean and user-friendly interface, allowing users to input numbers and view results with ease. Built using Java and XML for Android , it handles input validation and displays real-time results, making everyday calculations quick and efficient. This project helped me strengthen my foundational programming skills and understand UI/UX design principlescation using Android Studio. It is written using Java and Xml . User can able to do basic Calculation using this apps. It will be helpful to user who needs help in Calculation."
              ghLink="https://github.com/gauravkkr/CAlculatorApp"
            />
          </Col> 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              isBlog={false}
              title="My Portfolio"
              description="My portfolio website is built using React, showcasing my skills, projects, and experience in an interactive and responsive designs and added clickable  links to my socials like Linkedin,Facebook and github etc."
              ghLink="https://github.com/gauravkkr/GauravPortfolio"
              demoLink="https://gauravtiuportfolio.netlify.app/"
            />
          </Col>
        </Row>
      </Container>n
    </Container>
  );
}

export default Projects;
