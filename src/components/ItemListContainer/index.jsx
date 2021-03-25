import { prettyDOM } from '@testing-library/react'
import React, { useState, useEffect} from 'react'
import ItemList from '../ItemList'
import './style.css'

const ItemListContainer = () => {

    const [ items, setItems ] = useState(null)

    const productArray = [
        { "id":1,"name":"celular 1", "stock":10 },
        { "id":2, "name":"celular 2", "stock":15 },
        { "id":3, "name":"celular 3", "stock":5 }]

    const products = new Promise((res) => {setTimeout(() => res(productArray), 5000)})

    useEffect(() => products.then( products => setItems(products)), []);

    return (
        <div className="col-12 bg-dark d-flex item-list-container" >
            <ItemList items={items}/>
        </div>
    )
}

export default ItemListContainer
