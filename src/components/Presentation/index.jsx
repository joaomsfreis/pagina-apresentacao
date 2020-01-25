import React from 'react'
import { GoMarkGithub } from 'react-icons/go'
import { FaFacebookSquare, FaLinkedin } from 'react-icons/fa'
import './index.css'

function Presentation({ isHere }) {
    return (
        <div className="presentation" id="presentation" onMouseOver={() => isHere(0)}>
            <div className="avatar">
                <img src="https://avatars0.githubusercontent.com/u/40475388?s=460&v=4" alt="photo" />
                <div className="presentation-text">
                    <h2>Um <strong>desenvolvedor</strong> sonhador!</h2>
                    <h2>Apaixonadado por <strong>tecnologia</strong>!</h2>
                </div>
            </div>
            <div className="div-links">
                <a className="presentation-link" href="https://www.facebook.com/joaomarcos.soares.9"><FaFacebookSquare/></a>
                <a className="presentation-link" href="https://github.com/joaomsfreis"><GoMarkGithub/></a>
                <a className="presentation-link" href="https://www.linkedin.com/in/jo%C3%A3o-reis-675044a4/"><FaLinkedin/></a>
            </div>
        </div>
    )
}

export default Presentation