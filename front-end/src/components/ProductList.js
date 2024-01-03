import React, {useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const ProductList = () => {

    const [products, setProducts] = useState([]);

    useEffect( () => {
        getProducts();
    },[])

    const getProducts = async () => {
        let result = await fetch("http://localhost:5000/products",{
            headers:{
                authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`
            }
        });
        result = await result.json()
        setProducts(result);
    }

const deleteProduct = async (id) => {
    let result = await fetch(`http://localhost:5000/product/${id}`,{
        method:"delete",
        headers:{
            authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`
        }
    });
    result = await result.json();
    if(result){
        getProducts();
    }
};

const searchHendel = async (event) => {
    let key = event.target.value;
    if(key){
        let result = await fetch(`http://localhost:5000/search/${key}`,{
            headers:{
                authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`
            }
        });
        result = await result.json();
        if(result){
            setProducts(result)
        }
    }else{
        getProducts()
    }
    
}

  return (
    <div className='product-list'>
        <h1>Products List</h1>
        <input type='text' placeholder='Search text here' className='search-product-box'
        onChange={searchHendel} />
        <ul className='boldStmt'>
                <li>S. No.</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
                <li>Operation</li>
        </ul>
        
        {
            products.length >0 ? products.map((items,index) =>
            <ul key={items._id}>
            <li>{index+1}</li>
            <li>{items.name}</li>
            <li>$ {items.price}</li>
            <li>{items.category}</li>
            <li>
                <button onClick={()=>deleteProduct(items._id)}>Delete</button>
                <Link to={"/update/"+items._id}>Updtae</Link>
            </li>
        </ul>
        )
        : <h1>No Result Found</h1>
        }

    </div>
  )
}


export default ProductList;
