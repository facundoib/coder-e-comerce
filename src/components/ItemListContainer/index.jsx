import React from 'react'
import './style.css'

const ItemListContainer = (props) => {
    return (
        <div className="col-12 bg-dark d-flex item-list-container" >
            <p className="m-auto text-light" >{props.default}</p>
        </div>
    )
}

export default ItemListContainer
