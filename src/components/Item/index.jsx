import React, { useState } from 'react'
import ItemCount from '../ItemCount'

const Item = (props) => {

    const [ item ] = useState(props.item);
    
    return (
        <div className="col-4 cardItem p-1">
            <div className="bg-light">
                <p className="text-center">{item.name}</p>
                <ItemCount item={item} initial={0} />
            </div>
        </div>
    )
}

export default Item
