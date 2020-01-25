import React from 'react'

function ItemMenu({ refer, selected, value, idValue, isSelected }) {
    return (
        <a href={refer}>
            <span className={selected[idValue]} onClick={() => isSelected(idValue)}>{value}</span>
        </a>
    )
}

export default ItemMenu