import { NavLink } from "react-router-dom"
import Button from "./Button"

function Slogan() {
  return (
    <div className="flex flex-col sm:text-[3.4rem] md:text-[3.8rem] text-slate-100 font-bold mb-2 w-[25%] ">
        <p className="-mb-4">Connect</p>
  <p className="-mb-4">Share</p>
  <p className="mb-2">Explore</p>
       {/* <NavLink to='/register' className='p-0 -m-0 inline'> <Button size='medium' customStyle={{ fontSize: "1.4rem" , width: "100%" , }}>Connect</Button></NavLink> */}
       <Button size='medium' customStyle={{ fontSize: "1.4rem"}}><NavLink to='/register' className='w-full'>Connect</NavLink> </Button>
    </div>  
  )
}

export default Slogan
