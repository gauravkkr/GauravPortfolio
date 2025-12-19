import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Portfolio from "../../Assets/Projects/Portfolio.png";



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
              isBlog={false}
              title="Library_Management_System"
              description="Developed a Library Management System to manage book inventory, issue and return records, and user data efficiently. The system supports core operations such as adding, updating, searching, and tracking books while ensuring data consistency. Designed with a focus on simplicity, usability, and maintainable code to streamline day-to-day library operations."
              ghLink="https://github.com/gauravkkr/Library_Management_System"
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
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="RxVision"
              description="RxVision is an intelligent application designed to recognize and interpret doctors' handwritten prescriptions from uploaded medical reports. The system processes scanned or photographed prescriptions to extract readable text, improving accuracy and accessibility of medical information. It aims to reduce prescription errors and simplify the understanding of handwritten medical notes using automated text recognition techniques."
              ghLink="https://github.com/gauravkkr/RxVision"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="College Connect"
              description="Developed a web-based College Marketplace platform that enables students to buy and sell items within their campus community. The application focuses on secure listings, easy navigation, and a user-friendly interface to simplify peer-to-peer transactions."
              ghLink="https://github.com/gauravkkr/CollegeConnect"
            />
          </Col>
        </Row>
      </Container>n
    </Container>
  );
}

export default Projects;
