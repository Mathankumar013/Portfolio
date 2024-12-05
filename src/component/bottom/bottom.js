import React from "react";
import './bottom.css';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdCastForEducation } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { SiHyperskill } from "react-icons/si";
import { GoProject } from "react-icons/go";
import { FaInvision } from "react-icons/fa";

function Bottom(){
    return(
        <>
        <div className="bottom-display">
                <ul type='none' className='bottom-icon'>
                        <li> <a className='bottom-menu' href="https://www.facebook.com/profile.php?id=100052431398349"><FaFacebook /></a></li>
                        <li><a className='bottom-menu' href="https://www.instagram.com/__mr.frenky__/"><FaInstagram /></a></li>
                        <li><a className='bottom-menu' href="https://www.linkedin.com/in/mathan-kumar-980517261/?lipi=urn%3Ali%3Apage%3Ad_flagship3_resumebuilder%3BXsY%2FLEkqR2mV44WEOGbEXg%3D%3D"><CiLinkedin /></a></li>
                        <li><a className='bottom-menu' href='https://github.com/Mathankumar013'><FaGithub /></a></li>
                        <li><a className='bottom-menu' href='https://x.com/mathankuma9516'><FaXTwitter /></a></li>
                </ul>
                <hr></hr>
                <ul className='ulbar-menu' type="none">
                <li>
                <a  href='#home'className="bttom-conatct"><FaHome /> Home</a>
                </li>
                <li>
                <a href='#skills' className="bttom-conatct"><SiHyperskill /> Skills</a>
                </li>
                <li>
                <a href='#project' className="bttom-conatct"><GoProject/> Project</a>
                </li>
                <li>
                <a href='#visionary' className="bttom-conatct"><FaInvision/> Visionary</a>
                </li>
                <li>
                <a href='#education' className="bttom-conatct"><MdCastForEducation /> Education</a>
                </li>
                <li>
                <a href='#contact' className="bttom-conatct"><IoIosContact /> Contact</a>
                </li>
            </ul>
        </div>
        </>
    )
}
export default Bottom;