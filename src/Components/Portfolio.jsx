/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "AGrowTech 🌿",
    description:
      "Developed a web application for recognizing plant diseases using advanced image recognition algorithms. Collaborated on creating beginner-friendly articles to explain the technology behind Azure Static Web Apps and the tooling required to kickstart the project.",
    url: "https://github.com/DemonCyborg007/AGrowTech",
  },
  {
    title: "Portfolio Showcase 📂",
    description:
      "Crafted a comprehensive web portfolio showcasing a variety of projects, each accompanied by sketch note imagery to visually represent the concepts taught. Hosted on GitHub, it serves as a testament to my experience and design abilities.",
    url: "https://demoncyborg007.github.io/Portfolio/",
  },
  {
    title: "QR Bar Menu 🍹",
    description:
      "Freelance project involving the development of a QR scanner web application for a hotel's bar menu. Implemented user-friendly features to enhance the customer experience and streamline menu access.",
    url: "https://demoncyborg007.github.io/Residency_Bar_Menu/",
  },
  {
    title: "Digit Recognizer WebApp 🔢",
    description:
      "Designed and implemented a web application capable of recognizing handwritten digits. Utilized advanced algorithms to accurately identify and classify numerical inputs.",
    url: "https://demoncyborg007.github.io/Recog_Digit/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
