import Switch from '../switch/switch'
import './index.css'

const Header = () => {
  return (
    <header id='headerPrincipal'>
       <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 8L3 12L7 16" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M17 8L21 12L17 16" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14 4L9.8589 19.4548" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> 
        <h5>Home</h5>
        <h5>Profile</h5>
        <h5>About</h5>
        <Switch/>
    </header>
  )
}

export default Header
