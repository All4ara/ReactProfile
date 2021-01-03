import React from 'react';
import Logo from '../components/public/images/logo.png'

import '../components/css/footer.css';

const Footer = () => {
    return (
        <div className="container-fluid footer mb-5">
			<div className="row justify-content-center text-center text-light">

				<div className="">
                    <img className="a-logo" src={Logo} alt="logo"/>
                    <p className="mb-4"><a className="email" href="mailto:+ariel.elazarov@icloud.com">Ariel.elazarov@icloud.com</a></p>
				</div>

			</div>
		</div>
    );
};

export default Footer;