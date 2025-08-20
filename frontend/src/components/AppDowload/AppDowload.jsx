import { assets } from '../../assets/frontend_assets/assets';
import './AppDowload.css';

function AppDowload() {
  return (
    <div className='app-dowload' id='app-dowload'>
     <p>For Better Experience Dowload <br />Tomato App</p>
     <div className="app-dowload-platforms">
        <img src={assets.play_store} alt="image" />
        <img src={assets.app_store} alt="image" />
     </div>
    </div>
  )
}

export default AppDowload