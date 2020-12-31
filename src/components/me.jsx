import React from 'react';
import '../components/css/me.css';
import Me from '../components/public/images/me.jpeg'
import Me2 from '../components/public/images/me2.jpeg'
const My = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-4 mx-lg-auto me-container">
                    <div className="flip-card-container">
                        <div className="flip-card">
                            <div className="flip-card-front">
                                <img src={Me} alt="Ariel Elazarov" className="w-100 ariel"/>
                            </div>
                            <div className="flip-card-back">
                                <img src={Me2} alt="Ariel Elazarov" className="w-100 ariel"/>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
                
                <div className="col-lg-6 my-lg-auto">
                    <h1 className="font-weight-bold mt-3">My Philosophy</h1>
                    <p className="">"First solve the problem, then start coding."</p>
                </div>

                

                
            </div>
        </div>
    );
};

export default My;