import  React from 'react';
import './visionary.css';
import { visionary } from '../data/visionary';
function Visionary(){
    return(
        <>
        <div className='visionary-display' id='visionary'>
            <center className='visionary-topic'>
                <p className='visionary-a'>Visionary</p>
                <p className='visionary-b'>Launching My Career: A Fresh Perspective on Full-Stack Developer</p>
            </center>
            {visionary.map((vision,index)=>(
                <div className='visionay-card' key={index}>
                    <p className='visionary-title'>{vision.topic}</p>
                    <p className='visionary-paragraph'>{vision.title}</p>
                </div>
            ))}
        </div>
        </>
    )
}
export default Visionary;