
import "./CSS/projects.css"
import Card from "./Card"
const Projects = ()=>{
    return(
        <section className="projects">
            <div className="projects-container">
            <Card
            heading ="Portfolio site"
            img="./images/pf.PNG"
            link="https://codesshuv.github.io/Portfolio-site/"
            />
            <Card
            heading ="Tic Tac Toe"
                img = "./images/tictactoe.png"
                link ="https://codesshuv.github.io/tic-tac-toe/"
            />
            <Card
             heading ="Anonymous Confession"
             img = "./images/bhawana.PNG"
             link ="https://anonymousconfession.netlify.app/"/>
           
            </div>
        </section>
    )
}
export default Projects