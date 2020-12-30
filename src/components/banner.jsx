import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel'
import '../components/css/banner.css';
import Back1 from '../components/public/images/background1.jpg'
import Back2 from '../components/public/images/background2.jpg'
import Back3 from '../components/public/images/background3.jpg'


const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            <Carousel activeIndex={index} onSelect={handleSelect} pause='hover'>
                <Carousel.Item>
                    <img
                    className="d-block w-100 Banner"
                    src={Back1}
                    alt="First slide"
                    />
                    <Carousel.Caption className="car-caption">
                    <p>“Exploration is in our nature. We began as wanderers, and we are wanderers still. We have lingered long enough on the shores of the cosmic ocean. We are ready at last to set sail for the stars.”</p>
                    <h3>-Carl Sagan</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 Banner"
                    src={Back2}
                    alt="Second slide"
                    />

                    <Carousel.Caption className="car-caption">
                    <p>"One thing stronger than all the armies in the world and that is an idea who’s time has come."</p>
                    <h3>-Victor Hugo</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 Banner"
                    src={Back3}
                    alt="Third slide"
                    />

                    <Carousel.Caption className="car-caption">
                    <p>“Questions you cannot answer are usually far better for you than answers you cannot question.”</p>
                    <h3>-Yuval Harari</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
    
    
};

export default Banner;