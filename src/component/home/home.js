import React from "react";
import Profile from '../image/image.png';
import  './home.css';
import Mathan from '../image/Mathan.pdf';
function Home(){
    return(
        <>
        <div className="home-style" id="home">
            <div className="home-display">
                <section className="home-c">
                    <section className="home-a">Hello! I Am <br/><span className="home-topic">MathanKumar R</span></section>
                    <section className="home-b">
                    <strong>A passionate full-stack developer</strong> with a strong foundation in HTML, CSS, JavaScript, and frameworks like React and Node.js, aims to contribute to innovative projects by building scalable and efficient web applications. They are dedicated to continuous learning, problem-solving, and working collaboratively to enhance user experience and deliver high-quality results.
                    </section>
                    <button className="btn-resume">
                    <a href={Mathan} style={{textDecoration:'none',color:'black'}}>View Resume</a></button>
                </section>
                <section>
                    <img src={Profile} alt="type" height={500} width={500} style={{borderRadius:"50%",objectFit:"cover"}}  className="image-style"/>
                </section>
            </div>
        </div>
        </>
    )
}
export default Home;