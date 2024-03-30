import React, { useContext } from 'react';
import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// ----------css
import "./App.css"
// -------------Component
import SideNavbar from './Components/SideNavbar'
import Home from './Components/Home'
import Skills from './Components/Skills'
// -------------states
import NavState from "./Contexts/States/NavState"
import NavContext from './Contexts/NavContext'
import Projects from './Components/Projects'
import Contact from './Components/Contact';

const App = () => {
  const navOption = useContext(NavContext);
  

    return (
      <Router basename={window.location.pathname || ''} >
      <NavState>
        <div className="m-nav">
          <button onClick={navOption.toggleCanvas}>=</button>
        </div>
      <div className='mainContainer'>
        <SideNavbar/>
        <div className="pages">
         
        <Routes>
          <Route path="/" key={"home"} element={<Home/>}/>
          <Route path="/skills" key={"skills"} element={<Skills/>}/>
          <Route path="/projects" key={"projects"} element={<Projects/>}/>
          <Route path="/contact" key={"projects"} element={<Contact/>}/>
        </Routes>

        </div>
      </div>
      </NavState>
      </Router>
    )
  
}

export default App