import React, { useState } from 'react'

const ItemCount = (props) => {

    const [ count, setCount ] = useState(props.item.count)

    function sumar() {
        setCount(count + 1)
    }

    function restar() {
        if(count > 0) setCount(count - 1)
    }
    
    return (
        <div className="d-flex bg-info p-2">
            <button className="btn btn-dark m-1 m-auto" onClick={restar}>-</button>
            <p>{count}</p>
            <button className="btn btn-dark m-1 m-auto" onClick={sumar}>+</button>
        </div>
    )
}

export default ItemCount
