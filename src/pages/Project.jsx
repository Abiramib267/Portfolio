import React from "react";
import food from "../assets/food.jpg";
import hospital from "../assets/hospital.jpg";
import Showcase from "../assets/Showcase.jpg";
import Agency from "../assets/Agency.png";
import resume from "../assets/resume.png";
import ecommerce from "../assets/e-commerce.jpg";
import "../App.css";

const projects = [
  {
    title: "Food Ordering Webpage",
    tech: "HTML & CSS",
    description:
      "Designed and developed a responsive food ordering web page showcasing popular food items, discounts, and restaurant listings.",
    link: "https://abiramib267.github.io/Food/", 
    img: food,
  },
  {
    title:"Hospital landing page",
    tech: "HTML & CSS",
    description: "A modern, patient-first hospital landing page that showcases services, doctors, and testimonials, with a simple flow to book appointments.", 
    link: "https://abiramib267.github.io/Hospital-Website/",
    img: hospital ,
  },
  {
    title: "Product Showcase",
    tech: "HTML, CSS, JavaScript",
    description:
      "An interactive web app that beautifully displays products with images, descriptions, and smooth navigation.",
    link: "https://abiramib267.github.io/shop-card/",
    img: Showcase ,
  },
  {
    title: "Agency Webpage",
    tech: "HTML, CSS, JavaScript, React.js",
    description:
      "A modern agency website showcasing services, and contact details with a clean, responsive design.",
    link: "https://abiramib267.github.io/Agency-Website/",
    img: Agency ,
  },
  {
    title: "Resume Builder Web App",
    tech: "HTML, CSS, JavaScript, React.js",
    description:
      "Developed a responsive Resume Builder application allowing users to create, preview, and customize resumes online.",
    link: "https://abiramib267.github.io/resume-creater/",
    img: resume ,
  },
  {
    title: "E-commerce Website with API",
    tech: "HTML, CSS, JavaScript, React.js",
    description:
      "A responsive e-commerce website integrated with APIs for dynamic product listings, cart management, and seamless user experience.",
    link: "https://abiramib267.github.io/E-commerce-Website/",
    img: ecommerce
  },
];

export default function Project() {  
  return (
    <div className="project-grid">
    {projects.map((project, index) => (
      <div key={index} className="project-card">
        
        {/* Project Image */}
        {project.img && (
          <img src={project.img} alt={project.title} className="project-img" />
        )}
  
        {/* Content */}
        <h2 className="project-title">{project.title}</h2>
        <p className="project-tech">{project.tech}</p>
        <p className="project-desc">{project.description}</p>
  
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="project-btn"
        >
          View Project
        </a>
      </div>
    ))}
  </div>
  )}  