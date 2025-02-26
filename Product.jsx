import React, { useEffect, useState } from 'react'
import Axios from "axios";
import "./Style.css"


let api = "https://dummyjson.com/products";

function Product() {

    const [products, setProduct] = useState([]);
    useEffect(() => {
        const fetchProductDeteils = async () => {
            try {
                const response = await Axios.get(api)
                console.log(response.data.products);
                setProduct(response.data.products)


            } catch (error) {
                console.log(error);

            }
        };
        fetchProductDeteils()

    }, [])
    return (
        <div>
            <h1>Product List</h1>
            <ul className='product-list'>
                {products.map((item) => (
                    <li key={item.id} className='product-item'>
                        <img src={item.thumbnail} alt={item.title} />
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <p>${item.price}</p>
                    </li>

                ))}
            </ul>



        </div>
    )
}

export default Product



