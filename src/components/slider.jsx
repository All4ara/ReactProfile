import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Pro5 from '../components/public/images/project5.png'
import Pro6 from '../components/public/images/project6.png'
import Pro7 from '../components/public/images/project7.png'
import Pro8 from '../components/public/images/project8.png'

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
                        <img className="img" alt="Property Listing" src={Pro5} />
                    </div>
                    <ul className="social-icons">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-github"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>John Doe <span className="job-title">UI Developer</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card cardy">
                    <div className="card-image">
                        <img className="img" alt="Property Listing" src={Pro6} />
                    </div>
                    <ul className="social-icons">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-github"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>John Doe <span className="job-title">UI Developer</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card cardy">
                    <div className="card-image">
                        <img className="img" alt="Property Listing" src={Pro8} />
                    </div>
                    <ul className="social-icons">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-github"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>John Doe <span className="job-title">UI Developer</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card cardy">
                    <div className="card-image">
                        <img className="img" alt="Property Listing" src={Pro7} />
                    </div>
                    <ul className="social-icons">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-github"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>John Doe <span className="job-title">UI Developer</span></h2>
                    </div>
                </div>
            </div>
        </Slider>
    )
}

export default ImgSlider
