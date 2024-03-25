import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import "./CSS/sidenavbar.css"
import NavContext from '../Contexts/NavContext'
const SideNavbar = () => {
  const navOption = useContext(NavContext);
  return (
    <nav className='side-nav-bar'>
        <div className="sidebar-items-container">
        <div className='profile-pic-container'>
            <img src="" alt="" />
        </div>
        <div className="navigations">
            <ul>
                <li><Link id="Home" className={`navbtn${navOption.nav === "home"?" active":""}`} onClick={navOption.changeNav} to='/' >Home</Link></li>
                <li>
                  <Link className={`navbtn${navOption.nav === "skill"?" active":""}`} id="Skill" onClick={navOption.changeNav} to='/skills'>Skills
                  </Link>
                  </li>
                <li>
                  <Link id="Project" 
                  className={`navbtn${navOption.nav === "project"?" active":""}`}
                  onClick={navOption.changeNav}to='/projects'>Projects
                  </Link>
                  </li>
                <li>
                  <Link id="Contact" 
                  className={`navbtn${navOption.nav === "contact"?" active":""}`}
                  onClick={navOption.changeNav}to='/contact'>Contact
                  </Link>
                  </li>
            </ul>
        </div>
        </div>
       
    </nav>
  )
}

export default SideNavbar