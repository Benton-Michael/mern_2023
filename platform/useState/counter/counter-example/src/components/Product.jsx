import React,  { useState } from 'react';

const Product = (props) => {
    const [ inStock, setInStock ] = useState(props.initialStock);
    return (
        <div>
            <h2> { props.title } </h2>
            <p>Description: { props.desc } </p>
            <p>Cost: { props.cost } </p>
            <p>In stock: {inStock} </p>
            {/* We want user to be able to increase/decrease in stock number */}
            {/* Method to update the getter aka/ set the setter */}
            <button onClick={(event) => setInStock(inStock - 1)}>
                Buy {props.title}
            </button>
        </div>
    )
}

export default Product;