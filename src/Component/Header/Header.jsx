import { SiHiltonhotelsandresorts } from "react-icons/si";
import { IoMdMenu } from "react-icons/io";
import './Header.css'
import { NavLink } from "react-router-dom";
import { Usedata } from "../../Context/ContextComponent";
// eslint-disable-next-line no-unused-vars
import {motion} from 'framer-motion'
const Header = () => {
    const{menu,setMenu,language,setLnaguage}=Usedata()
    // handler
    const handleMenu=()=>{
        setMenu(!menu)
    }
    const handleLanguage=(event)=>{
        setLnaguage(event.target.value)
    }
  return (
<header>
<div className="logo">
    <SiHiltonhotelsandresorts className="icon"/>
    <h1>HotelLify</h1>
</div>
 <ul className="full-screen">
    <NavLink to={'/'}><li>Home</li></NavLink>
    <NavLink to= {'/hotels'}><li>Hotels</li></NavLink>
    <NavLink to={'/about-us'}><li>About</li></NavLink>
    <NavLink to={'/contact-us'}><li>Contact</li></NavLink>
</ul>
<div className='buttons'>
    <select value={language} onChange={handleLanguage}>
        <option>English</option>
        <option>العربية</option>
    </select>
    < motion.button whileTap={{scale:0.8}}>Singin</motion.button>
<motion.button whileTap={{scale:0.8}}>Login</motion.button>
</div>

{/* Mobiles */}
<div className="Mobiles-header">
    <select>
        <option>English</option>
        <option>العربية</option>
    </select>
    <IoMdMenu onClick={handleMenu} className="menu"/>
   {menu&& <div className="list">
 <ul>
    <NavLink to={'/'}><li>Home</li></NavLink>
    <NavLink to= {'/hotels'}><li>Hotels</li></NavLink>
    <NavLink to={'/about-us'}><li>About</li></NavLink>
    <NavLink to={'/contact-us'}><li>Contact</li></NavLink>
</ul>
<div className="btns">
        <motion.button whileTap={{scale:0.8}}>Singin</motion.button>
<motion.button whileTap={{scale:0.8}}>Login</motion.button>
</div>
    </div>}

</div>


</header>
 )
}

export default Header