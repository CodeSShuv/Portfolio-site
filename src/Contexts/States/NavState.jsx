import React,{useEffect, useState}from 'react'
import NavContext from '../NavContext'

const NavState = (props) => {
    const [nav,setNav] = useState("home");
    const [offCanvas,setOffCanvas] = useState('unhide');
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
    const toggleCanvas = ()=>{
        if(offCanvas === 'hide'){
            console.log(offCanvas);
            setOffCanvas('unhide');
        }else if(offCanvas === "unhide"){
            console.log(offCanvas);
            setOffCanvas("hide");
        }
    }
    useEffect(()=>{
        
    },[offCanvas])
  return (
    <NavContext.Provider value ={{nav,changeNav,offCanvas,toggleCanvas}}>
        {props.children}
    </NavContext.Provider>
  )
}

export default NavState