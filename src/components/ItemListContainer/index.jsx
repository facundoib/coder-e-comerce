import React, { useState } from 'react'
import ItemCount from '../ItemCount'
import './style.css'

const ItemListContainer = (props) => {

    const [ items ] = useState(props.items);
    
    return (
        <div className="col-12 bg-dark d-flex item-list-container" >
            {items ? 
                items.map(item => 
                <div className="col-4 cardItem p-1">
                    <div className="bg-light">
                        <p className="text-center">{item.name}</p>
                        <ItemCount item={item} />
                    </div>
                </div>) 
                : <p className="text-light m-auto " >{props.default}</p>}
        </div>
    )
}

export default ItemListContainer
