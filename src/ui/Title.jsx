import logo from '../assets/travellers-junction-high-resolution-logo-white-transparent.png';
import { NavLink } from 'react-router-dom';

function Title() {
  return (
    <div className="">

      <NavLink to='/'><img src={logo} alt="travellers-junction" className="max-h-32 w-auto p-4" /></NavLink>
      
    </div>
  )
}

export default Title
