import React,{useState}from 'react'
import NavContext from '../NavContext'

const NavState = (props) => {
    const [nav,setNav] = useState("home");
    const changeNav = (e)=>{
        if(e.target.id === "Home"){
            setNav("home");
        }else if(e.target.id === "Skill"){
            setNav("skill");
        }else if(e.target.id === "Project"){
            setNav("project");
        }else if(e.target.id === "Contact"){
            setNav("contact");
        }
    }
  return (
    <NavContext.Provider value ={{nav,changeNav}}>
        {props.children}
    </NavContext.Provider>
  )
}

export default NavState