import React from "react";
import './project.css';
import { project } from "../data/project";

function Project() {
    return (
        <div className="project-container" id="project">
            <section className="project-side">
                <center>
                    <span className="project-topic">Creative Work</span>
                </center>
                <center>
                <span className="project-title">Check My Projects</span>
                </center>
            </section>
                <div className="project-flex">
                {project.map((project,index)=>(
                <div className="project-slide" key={index}>
                    <p className="project-tit">{project.title}</p>
                    <p className="project-font">{project.paragraph}</p>
                    <iframe src={project.video} className="iframe-style" title={project.title} ></iframe>
                </div>
                ))}
                </div>
        </div>
    );
}

export default Project;
