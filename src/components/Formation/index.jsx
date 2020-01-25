import React from 'react'
import highSchool from '../../assets/img/high-school.png'
import university from '../../assets/img/university.png'
import './index.css'
import Course from './Course'

function Formation({ isHere }) {
    const courses = [
        {
            img: highSchool,
            title: 'Técnico Automação Industrial',
            intitute: 'Institudo Federal de Minas Gerais - IFMG',
            description: 'Profissionais dessa área são capazes de entender, instalar, adaptar e dar manutenção em processos industriais, transferindo conhecimentos e habilidades para acompanhar a constante evolução tecnológica.'
        },{
            img: university,
            title: 'Engenharia da Computação',
            intitute: 'Universidade Federal de Ouro Preto - UFOP',
            description: 'Profissionais dessa área podem atuar como gerentes de projetos, gerentes de telecomunicações, analistas de sistemas, projetistas de hardware, consultores de tecnologias ou mesmo empreender um negócio próprio.'
        }
    ]

    return (
        <div className="formation" id="formation" onMouseOver={() => isHere(1)}>
            <h1>Minha formação...</h1>
            <div className="courses">
                {
                    courses.map(course => <Course data={course}/>)
                }                
            </div>
        </div>
    )
}

export default Formation