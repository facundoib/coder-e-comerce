import React from 'react'
import { Spinner } from 'react-bootstrap'
import Item from '../Item'
import './style.css'

const ItemList = (props) => {
    
    return (
        <div className="col-12 bg-dark d-flex item-list-container" >
            {props.items !== null ? 
                props.items.map(item => <Item item={item}/>) 
                : <Spinner animation="border" variant="light" className="m-auto" />}
        </div>
    )
}

export default ItemList
