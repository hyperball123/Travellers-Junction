import { NavLink } from "react-router-dom"
import Button from "./Button"

function HomeNav() {
  return (
    <nav className="">
      <ul className="flex flex-row items-center justify-evenly p-8 gap-7 font-medium uppercase text-sm">
        <NavLink to='/'>
          <li className="text-white sm:text-lg shrink">Home</li>
        </NavLink>
        <NavLink to='/'>
          <li className="text-white sm:text-lg shrink">Blog</li>
        </NavLink>
        <NavLink to='/'>
          <li className="text-white sm:text-lg shrink">Contact</li>
        </NavLink>
        <NavLink to='/'>
          <Button size='small'>
            <li className="text-white sm:text-lg shrink">Login</li>
            </Button>
        </NavLink>
      </ul>
    </nav>
  )
}

export default HomeNav
