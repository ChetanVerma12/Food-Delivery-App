import './Navbar.css';
import {assets} from '../../asserts/assets';

function Navbar() {
  return (
    <div className='navbar'>
         <img className='logo' src={assets.logo} alt="image" />
         <img className='profile' src={assets.profile_image} alt="image" />
    </div>
  )
}

export default Navbar