import React from 'react';
import Back from '../components/public/images/imac.png'
import '../components/css/fixed.css';

const FixedBack = () => {
    return (
        <div className="figure">
            <div className="fixed-wrap">
                <img className="fixed" src={Back} alt="fixed"/>
            </div>
        </div>
    );
};

export default FixedBack;