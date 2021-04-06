import React from 'react';
import Carousel from 'react-elastic-carousel';
import Project from '../components/project';

import '../components/css/projects.css';
import Pro1 from '../components/public/images/project1.png'
import Pro2 from '../components/public/images/project2.png'
import Pro3 from '../components/public/images/project3.png'
import Pro4 from '../components/public/images/project4.jpeg'
import Pro5 from '../components/public/images/project5.png'
import Pro6 from '../components/public/images/project6.png'
import Pro7 from '../components/public/images/project7.png'
import Pro8 from '../components/public/images/project8.png'



const breakPoints = [
    { width: 1, itemsToShow : 1},
    { width: 300, itemsToShow : 2},
    { width: 600, itemsToShow : 3},
    { width: 900, itemsToShow : 4},
    { width: 1200, itemsToShow : 5},
    { width: 1500, itemsToShow : 6},
    { width: 1800, itemsToShow : 7},
    { width: 2100, itemsToShow : 8},
]


const Projects = () => {
    return (
        <div id="Projects" className="projects mt-5 mb-5">
           <div className="text-right">
                <h1 className="text-center ">Projects</h1>
                
                <Carousel breakPoints={breakPoints}>
                    <Project>
                    <div className="">
                        <h4 className="text-left">Metro Brokers NY</h4>
                        <img src={Pro5} alt="Web 3" className="pro-pic"/>
                        <p className="text-left">Top of the line real estate company in the metropolitan area.</p>
                        <a href="https://www.metropolitanbrokersny.com/" target="_blank" className="btn btn-outline-dark btn-md">Visit Site</a>
                    </div>
                    </Project>
                    <Project>
                    <div className="">
                        <h4 className="text-left">Inside the Backlot</h4>
                        <img src={Pro8} alt="Web 3" className="pro-pic"/>
                        <p className="text-left">Reviews on the latest and greats content from the Tv and Film industry. Check out the podcast.</p>
                        <a href="https://www.insidebacklot.com/" target="_blank" className="btn btn-outline-dark btn-md">Visit Site</a>
                    </div>
                    </Project>
                    <Project>
                    <div className="">
                        <h4 className="text-left">The Vault</h4>
                        <img src={Pro6} alt="Web 3" className="pro-pic"/>
                        <p className="text-left">Turn based anime inspired fighting game. Stay tuned for more characters comming soon...</p>
                        <a href="https://all4ara.github.io/game-concept/" target="_blank" className="btn btn-outline-dark btn-md">Visit Site</a>
                    </div>
                    </Project>
                    <Project>
                    <div className="">
                        <h4 className="text-left">Mission Earth</h4>
                        <img src={Pro4} alt="Web 3" className="pro-pic"/>
                        <p className="text-left">Greetings martian, out mission is clear get to Earth in one piece. Godspeed Soldier!</p>
                        <a href="https://mission-earth.herokuapp.com/index.html" target="_blank" className="btn btn-outline-dark btn-md">Visit Site</a>
                    </div>
                    </Project>
                    <Project>
                    <div className="">
                        <h4 className="text-left">The Green Path</h4>
                        <img src={Pro1} alt="Web 1" className="pro-pic"/>
                        <p className="text-left">An informational guide to a plant based diet and all the rewards of a healthy lifestyle.</p>
                        <a href="https://n8l1hr.mimo.run/index.html" target="_blank" className="btn btn-outline-dark btn-md">Visit Site</a>
                    </div>
                    </Project>
                    <Project>
                    <div className="">
                        <h4 className="text-left">Premium Plants</h4>
                        <img src={Pro2} alt="Web 2" className="pro-pic"/>
                        <p className="text-left">A Medical Cannabis Dispensary providing patients with steps to get started.</p>
                        <a href="http://premiplants.herokuapp.com/home.html" target="_blank" className="btn btn-outline-dark btn-md">Visit Site</a>
                    </div>
                    </Project>
                    <Project>
                    <div className="">
                        <h4 className="text-left">So Succulents</h4>
                        <img src={Pro3} alt="Web 3" className="pro-pic"/>
                        <p className="text-left">A gallery of several speices of succulents and a guied to growing your own.</p>
                        <a href="https://sheepshead-succulents.herokuapp.com/index.html#page-top" target="_blank" className="btn btn-outline-dark btn-md">Visit Site</a>
                    </div>
                    </Project>
                    <Project>
                    <div className="">
                        <h4 className="text-left">FutureX</h4>
                        <img src={Pro7} alt="Web 3" className="pro-pic"/>
                        <p className="text-left">FutureX a SpaceX program that allows you to be part of the history of space exploration.</p>
                        <a href="https://future-space-x.netlify.app" target="_blank" className="btn btn-outline-dark btn-md">Visit Site</a>
                    </div>
                    </Project>
                </Carousel>
           </div> 
        </div>
    );
};

export default Projects;