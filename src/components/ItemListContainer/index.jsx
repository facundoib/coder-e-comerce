import React, { useState, useEffect} from 'react'
import ItemList from '../ItemList'
import './style.css'

const ItemListContainer = () => {

    const [ items, setItems ] = useState(null)

    const productArray = [
        {"id":1,"name":"celular 1", "count": 0},
        {"id":2, "name":"celular 2", "count": 0},
        {"id":3, "name":"celular 3", "count": 0}]

    const products = async () => {
        await new Promise((res) => setTimeout(res, 5000));
        return setItems(productArray);
    }

    useEffect(() => {
        products()
    });

    return (
        <div className="col-12 bg-dark d-flex item-list-container" >
            <ItemList items={items}/>
        </div>
    )
}

export default ItemListContainer
