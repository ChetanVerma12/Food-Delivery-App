import { assets } from '../../assets/frontend_assets/assets';
import './Footer.css';

function Footer() {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="image" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur facere minus ullam deserunt, blanditiis tempora saepe delectus at? Architecto hic ratione nobis, doloribus totam beatae molestias, maxime nam est, dolore temporibus id in fuga.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="img" />
                    <img src={assets.twitter_icon} alt="img" />
                    <img src={assets.linkedin_icon} alt="img" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-212-456-7890</li>
                    <li>contact@totato.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2025 ©️ Tomato.com - All Right Reserved</p>
    </div>
  )
}

export default Footer