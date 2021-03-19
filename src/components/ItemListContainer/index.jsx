import React, { useState } from 'react'
import './style.css'

const ItemListContainer = (props) => {

    const [itemCount, setItemCount] = useState(props.items);

    function sumar(itemSuma) {
        var newItemCount = []
        itemCount.map(item => item.id == itemSuma.id ? newItemCount.push(
            {"id":item.id, "name":item.name, "count": ++item.count}
            ) : newItemCount.push({"id":item.id, "name":item.name, "count": item.count}) )
        setItemCount(newItemCount)
    }

    function restar(itemSuma) {
        var newItemCount = []
        itemCount.map(item => item.id == itemSuma.id && itemSuma.count > 0 ? newItemCount.push(
            {"id":item.id, "name":item.name, "count": --item.count}
            ) : newItemCount.push({"id":item.id, "name":item.name, "count": item.count}) )
        setItemCount(newItemCount)
    }
    
    return (
        <div className="col-12 bg-dark d-flex item-list-container" >
            {itemCount ? 
                itemCount.map(item => 
                <div className="col-4 cardItem p-1">
                    <div className="bg-light">
                        <p className="text-center">{item.name}</p>
                        <div className="d-flex">
                            <button className="btn btn-dark m-1 m-auto" onClick={() => restar(item)}>-</button>
                            <p>{item.count}</p>
                            <button className="btn btn-dark m-1 m-auto" onClick={() => sumar(item)}>+</button>
                        </div>
                    </div>
                </div>) 
                : <p className="text-light m-auto " >{props.default}</p>}
        </div>
    )
}

export default ItemListContainer
