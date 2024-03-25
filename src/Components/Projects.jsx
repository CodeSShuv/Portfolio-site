
import "./CSS/projects.css"
import Card from "./Card"
const Projects = ()=>{
    return(
        <section className="projects">
            <div className="projects-container">

            <Card
            heading ="Portfolio site"
            img="./pf.png"
            link="https://codesshuv.github.io/Portfolio-site/"
            />
            <Card
            heading ="Tic Tac Toe"
                img = "./tictactoe.png"
                link ="https://codesshuv.github.io/tic-tac-toe/"
            />
            <Card
             heading ="Anonymous Confession"
             img = "./bhawana.png"
             link ="https://codesshuv.github.io/tic-tac-toe/"/>
           
            </div>
        </section>
    )
}
export default Projects