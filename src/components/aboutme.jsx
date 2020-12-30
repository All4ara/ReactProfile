import React from 'react';

const Aboutme = () => {
    return (
        <div className="container">
           <div className="text-left p-3">
                <h1 className="text-center ">About Me</h1>
                <hr className="bg-dark"/>
                <p>Full stack software engineer eager to leverage the applications of web and mobile technologies to solve real world problems.</p>
                <p>Hi I’m Ariel, but you can call me Ara. I’m a NYC based front-end developer. I love technology and my passion for building and creating recently led me into the world of code. JavaScript is my go to language but you can also find me typing up Python, C, HTML, CSS, and utilizing a variety of frameworks including MongoDB, React, React Native, jQuery, Node.js, just to name a few. I love learning and I’m always looking to expand my toolkit.</p>
                <p>Before entering the world of programming, I’ve always been in tune with tech whether it be IOS Games, Areospace engineering, Animation production, and basic website creation. Professionally, I’ve worked various jobs in restaurants, painted sneakers as lead artist in couple sneaker stores, and spent the last four years in sales with an business to business Credit Card/Merchant Cash Processor. </p>
                <p>I completed a full stack web development certification at Ironhack Miami. I love learning, trying new things and meeting new people so feel free to reach out, I’d love to <a href="#contact" style={{color: "rgb(3, 182, 158)"}}>connect</a>!</p>
           </div> 
        </div>
    );
};

export default Aboutme;