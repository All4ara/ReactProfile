import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Pro1 from '../components/public/images/project1.png'
import Pro2 from '../components/public/images/project2.png'
import Pro4 from '../components/public/images/project4.jpeg'
import Pro5 from '../components/public/images/project5.png'
import Pro6 from '../components/public/images/project6.png'
import Pro8 from '../components/public/images/project8.png'
import Pro9 from '../components/public/images/project9.png'
import Pro10 from '../components/public/images/project10.png'



import '../components/css/slider.css';

const ImgSlider = () => {

    let settings = {
        dot: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear",

        responsive: [{
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    }

    return (
        <Slider {...settings}>
            <div className="card-wrapper">
                <div className="card cardy">
                    <div className="card-image">
                        <img className="img" alt="Property Listing" src={Pro10} />
                    </div>
                    <div className="details">
                        <h5>Full Of Hits</h5>
                        <h6 className="m-3">Visit full of hits on Whatnot and watch the live breaks to get a chance at your favorit collectable cards.</h6>
                        <div className="d-flex justify-content-around mt-4">
                            <a href="https://www.instagram.com/fullofhits_cards/" target="_blank" className="btn btn-outline-dark btn-md">Instagram</a>
                            <a href="https://fullofhits.com/" target="_blank" className="btn btn-outline-dark btn-md">Visit Site</a>
                        </div>
                    </div>
                        
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card cardy">
                    <div className="card-image">
                        <img className="img" alt="Property Listing" src={Pro5} />
                    </div>
                    <div className="details">
                        <h5>Metropolitan Brokers NY</h5>
                        <h6 className="m-3">Top of the line real estate company in the metropolitan area.</h6>
                        <div className="d-flex justify-content-around mt-4">
                            <a href="https://github.com/All4ara/MetroFrontend" target="_blank" className="btn btn-outline-dark btn-md">GitHub</a>
                            <a href="https://www.metropolitanbrokersny.com/" target="_blank" className="btn btn-outline-dark btn-md">Visit Site</a>
                        </div>
                    </div>
                        
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card cardy">
                    <div className="card-image">
                        <img className="img" alt="Property Listing" src={Pro8} />
                    </div>
                    <div className="details">
                        <h5>Inside the Backlot</h5>
                        <h6 className="m-3">Reviews on the latest and greats content from the Tv and Film industry. Check out the podcast.</h6>
                        <div className="d-flex justify-content-around">
                            <a href="https://github.com/All4ara/BacklotMERNFrontend" target="_blank" className="btn btn-outline-dark btn-md">GitHub</a>
                            <a href="https://www.insidebacklot.com/" target="_blank" className="btn btn-outline-dark btn-md">Visit Site</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card cardy">
                    <div className="card-image">
                        <img className="img" alt="Property Listing" src={Pro9} />
                    </div>
                    <div className="details">
                        <h5>Kraftd</h5>
                        <h6 className="m-3">Social media platfrom for artist, creators, and all custom crafts.</h6>
                        <div className="d-flex justify-content-around">
                            <a href="https://github.com/All4ara/KRAFTDProject" target="_blank" className="btn btn-outline-dark btn-md">GitHub</a>
                            <a href="https://kraftd.netlify.app/posts" target="_blank" className="btn btn-outline-dark btn-md">Visit Site</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card cardy">
                    <div className="card-image">
                        <img className="img" alt="Property Listing" src={Pro6} />
                    </div>
                    <div className="details">
                        <h5>The Vault</h5>
                        <h6 className="m-3">Turn based anime inspired fighting game. Stay tuned for more characters comming soon...</h6>
                        <div className="d-flex justify-content-around">
                            <a href="https://github.com/All4ara/game-concept" target="_blank" className="btn btn-outline-dark btn-md">GitHub</a>
                            <a href="https://all4ara.github.io/game-concept/" target="_blank" className="btn btn-outline-dark btn-md">Visit Site</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card cardy">
                    <div className="card-image">
                        <img className="img" alt="Property Listing" src={Pro4} />
                    </div>
                    <div className="details">
                        <h5>Mission Earth</h5>
                        <h6 className="m-3">Greetings martian, out mission is clear get to Earth in one piece. Godspeed Soldier!</h6>
                        <div className="d-flex justify-content-around">
                            <a href="https://github.com/All4ara/MissionEarth" target="_blank" className="btn btn-outline-dark btn-md">GitHub</a>
                            <a href="https://mission-earth.herokuapp.com/index.html" target="_blank" className="btn btn-outline-dark btn-md">Visit Site</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card cardy">
                    <div className="card-image">
                        <img className="img" alt="Property Listing" src={Pro1} />
                    </div>
                    <div className="details">
                        <h5>The Green Path</h5>
                        <h6 className="m-3">An informational guide to a plant based diet and all the rewards of a healthy lifestyle.</h6>
                        <div className="d-flex justify-content-around">
                            <a href="https://github.com/All4ara/TheGreenPath" target="_blank" className="btn btn-outline-dark btn-md">GitHub</a>
                            <a href="https://n8l1hr.mimo.run/index.html" target="_blank" className="btn btn-outline-dark btn-md">Visit Site</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card cardy">
                    <div className="card-image">
                        <img className="img" alt="Property Listing" src={Pro2} />
                    </div>
                    <div className="details">
                        <h5>Premium Plants</h5>
                        <h6 className="m-3">A Medical Cannabis Dispensary providing patients with steps to get started.</h6>
                        <div className="d-flex justify-content-around">
                            <a href="https://github.com/All4ara/PremiumPlants" target="_blank" className="btn btn-outline-dark btn-md">GitHub</a>
                            <a href="http://premiplants.herokuapp.com/home.html" target="_blank" className="btn btn-outline-dark btn-md">Visit Site</a>
                        </div>
                    </div>
                </div>
            </div>
        </Slider>
    )
}

export default ImgSlider
