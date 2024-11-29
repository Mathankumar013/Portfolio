import React, { useState } from 'react';
import { Button, Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { TiThMenuOutline } from "react-icons/ti";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Navigation(){
    const[show,setShow]=useState(false)

    const handleShow = ()=>{
        setShow(true)
    }
    const handleHide = ()=>{
        setShow(false)
    }
    return(
        <>
        <Navbar className='navbar-style'>
            <Container>
            <Navbar.Brand><span className='navbar-brand'>Portfolio</span></Navbar.Brand>
            <Nav className='navbar-menu'>
                <Nav.Item>
                <Nav.Link  href='#home'>Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link href='#skills'>Skills</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link href='#project'>Project</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link href='#visionary'>Visionary</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link href='#education'>Education</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link href='#contact'>Contact</Nav.Link>
                </Nav.Item>
            </Nav>
            <Nav>
            <Nav.Item>
                <Nav.Link className='navbar-icon' href="https://www.facebook.com/profile.php?id=100052431398349"><FaFacebook /></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link className='navbar-icon' href="https://www.instagram.com/__mr.frenky__/"><FaInstagram /></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link className='navbar-icon' href="https://www.linkedin.com/in/mathan-kumar-980517261/?lipi=urn%3Ali%3Apage%3Ad_flagship3_resumebuilder%3BXsY%2FLEkqR2mV44WEOGbEXg%3D%3D"><CiLinkedin /></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link className='navbar-icon' href="https://github.com/Mathankumar013"><FaGithub /></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link className='navbar-icon' href="https://x.com/mathankuma9516"><FaXTwitter /></Nav.Link>
                </Nav.Item>
            </Nav>
            <div className='btn-hide'>
            <Button onClick={handleShow}><TiThMenuOutline /></Button>
            <Offcanvas show={show} onHide={handleHide}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Portfolio</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                <ul type='none' className='canvas-icon'>
                        <li> <a className='canvas-menu' href="https://www.facebook.com/profile.php?id=100052431398349"><FaFacebook /></a></li>
                        <li><a className='canvas-menu' href="https://www.instagram.com/__mr.frenky__/"><FaInstagram /></a></li>
                        <li><a className='canvas-menu' href="https://www.linkedin.com/in/mathan-kumar-980517261/?lipi=urn%3Ali%3Apage%3Ad_flagship3_resumebuilder%3BXsY%2FLEkqR2mV44WEOGbEXg%3D%3D"><CiLinkedin /></a></li>
                        <li><a className='canvas-menu' href='https://github.com/Mathankumar013'><FaGithub /></a></li>
                        <li><a className='canvas-menu' href='https://x.com/mathankuma9516'><FaXTwitter /></a></li>
                </ul>
                <hr></hr>
                <ul type='none'>
                <li>
                <a  href='#home' className='canvas-title'>Home</a>
                </li>
                <hr></hr>
                <li>
                <a href='#skills' className='canvas-title'>Skills</a>
                </li>
                <hr></hr>
                <li>
                <a href='#project' className='canvas-title'>Project</a>
                </li>
                <hr></hr>
                <li>
                <a href='#visionary' className='canvas-title'>Visionary</a>
                </li>
                <hr></hr>
                <li>
                <a href='#education' className='canvas-title'>Education</a>
                </li>
                <hr></hr>
                <li>
                <a href='#contact' className='canvas-title'>Contact</a>
                </li>
                <hr></hr>
            </ul>
                </Offcanvas.Body>
            </Offcanvas>
            </div>
            </Container>
        </Navbar>
        </>
    )
}
export default Navigation;