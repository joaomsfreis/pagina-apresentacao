import React from 'react'
import './index.css'

function Projects({ isHere }) {
    return (
        <div className="projects" id="projects"  onMouseOver={() => isHere(1)}>
            <h1>Olá Projetos!</h1>
        </div>
    )
}

export default Projects