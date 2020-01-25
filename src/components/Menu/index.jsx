import React, { useState } from 'react'
import './index.css'
import ItemMenu from './ItemMenu'
function Menu({ isSelected, selected }) {
    return (
        <div className="menu">
            <ItemMenu idValue={0} value="Apresentação" refer="#presentation" selected={selected} isSelected={isSelected} />
            <ItemMenu idValue={1} value="Formação" refer="#formation" selected={selected} isSelected={isSelected} />{/* 
            <ItemMenu idValue={2} value="Projetos" refer="#projects" selected={selected} isSelected={isSelected} /> */}
        </div>
    )
}

export default Menu