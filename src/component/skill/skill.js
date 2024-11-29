import React from "react";
import './skill.css';
import { frontEnd } from "../data/data";
import { backEnd } from "../data/data";
function Skill(){
    return(
        <>
        <section className="skill-display" id="skills">
                <section className="skill-side">
                <center>
                    <h1 className="skill-topic">Skills</h1>
                </center>
                <center>
                <span className="skill-title">Here are some of my skills on which I have learnt</span>
                </center>
                </section>
                <div className="skill-bottom">
                <div className="skill-style">
                    <h3><span className="style-font">FrontEnd</span></h3>
                    <div className="skill-b">
                {frontEnd.map((front)=>(
                    <div className="skill-a">
                        <img src={front.img} alt="type"  className="card-image"/>
                        <p className="card-title">{front.title}</p>
                    </div>
                ))}
                </div>
                </div>
                <div className="skill-style">
                    <h3><span className="style-font">BackEnd</span></h3>
                    <div className="skill-b">
                {backEnd.map((back,index)=>(
                    <div className="skill-a" key={index}>
                        <img src={back.img} alt="type"  className="card-image"/>
                        <p className="card-title">{back.title}</p>
                    </div>
                ))}
                </div>
                </div>
                </div>
        </section>
        </>
    )
}
export default Skill;