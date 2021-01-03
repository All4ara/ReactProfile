import React from 'react';
import Logo from '../components/public/images/logo.png'

import '../components/css/footer.css';

const Footer = () => {
    return (
        <div class="container footer">
			<div class="row justify-content-center text-center text-light">

				<div class="col-md-9">
                    <img className="a-logo" src={Logo} alt="logo"/>
                    <p><a className="text-dark" href="mailto:+ariel.elazarov@icloud.com">Ariel.elazarov@icloud.com</a></p>
				</div>

			</div>
		</div>
    );
};

export default Footer;