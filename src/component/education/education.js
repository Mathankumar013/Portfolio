import React from "react";
import './education.css';
import { eduction } from "../data/education";

function Education(){
    return(
        <>
        <section className="education-display" id="education">
            <div className="education-title">
                <p className="education-a">Education</p>
                <p className="education-b">Learning is about growing beyond who you were yesterday, not comparing to others.</p>
            </div>
            <div className="education-c">
            {eduction.map((edu,index)=>(
                <div className="eduction-details" key={index}>
                    <p className="edu-name">{edu.name}</p>
                    <p className="edu-std">{edu.std}</p>
                    <p className="edu">{edu.year}</p>
                    <p className="edu-grade">Grade:{edu.Grade}</p>
                    <p className="edu-des">{edu.des}</p>
                </div>
            ))}
            </div>
        </section>
        </>
    )
}
export default Education;