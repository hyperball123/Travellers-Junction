import logo from '../assets/travellers-junction-high-resolution-logo-white-transparent.png';
import { NavLink } from 'react-router-dom';

function Title() {
  return (
    <div className="">

      <NavLink to='/'><img src={logo} alt="travellers-junction" className="max-h-32 sm:max-h-44 w-auto p-4" /></NavLink>
      
    </div>
  )
}

export default Title
  // <main className='h-screen w-full bg-gradient-image bg-cover bg-no-repeat bg-center overflow-x-hidden' >

      {/* <div className='flex flex-col sm:flex-row items-center justify-between sm:items-start min-h-screen p-4 max-w-screen-2xl m-auto'>
           <Title />
        <HomeNav />
        <Slogan/>
      </div> */}


    // </main>