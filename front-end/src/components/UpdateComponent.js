import React, { useEffect } from 'react'
import { useParams, useNavigate  } from 'react-router-dom';

const UpdateProduct  = () => {

    const [name,setName] = React.useState("");
    const [price,setPrice] = React.useState("");
    const [category,setCategory] = React.useState("");
    const [company,setCompany] = React.useState("");

    const navigate = useNavigate();
    const params = useParams();

    useEffect(()=>{
        getProductDetail();
    })


    const getProductDetail = async () => {
        let result = await fetch(`http://localhost:5000/product/${params.id}`,{
            headers:{
                authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`
            }
        });
        result = await result.json();
        setName(result.name)
        setPrice(result.price)
        setCategory(result.category)
        setCompany(result.company)
    }
   

    const updateProduct  = async () =>{
        let result  = await fetch(`http://localhost:5000/product/${params.id}`,{
            method:"put",
            body: JSON.stringify({name, price, category, company}),
            headers:{
                'Content-Type': 'application/json',
                authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`
            }
        });
        result  = await result.json()
        if (result) {
            navigate('/')
        }

    }

  return (
    <div className='product'>
        <h1>UpDate Product</h1>

        <input type='text' placeholder='Enter product Name' className='inputBox'
         value={name}  onChange={(e)=>{ setName(e.target.value) }}
        />

        <input type='text' placeholder='Enter product price' className='inputBox'
        value={price} onChange={(e)=>{ setPrice(e.target.value) }}
        />

        <input type='text' placeholder='Enter product category' className='inputBox'
        value={category} onChange={(e)=>{ setCategory(e.target.value) }}
        />

        <input type='text' placeholder='Enter product company' className='inputBox'
        value={company} onChange={(e)=>{ setCompany(e.target.value) }}
        />


        <button onClick={updateProduct } className='appButton'>UpDate Product</button>
    </div>
  )
}

export default UpdateProduct ;


