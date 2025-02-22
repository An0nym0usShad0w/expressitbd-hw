'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link'
import OwnNav from '../../components/nav'
import Body from '../../components/body'

export default function Task2() {
  
  const [products, setProducts] = useState(null);
  const [loading ,setLoading] = useState(true)
  const [error, setError] = useState(false)

  

  useEffect(()=>{
     axios.get('https://glore-bd-backend-node-mongo.vercel.app/api/product')
     .then((response)=>{
          setProducts(response.data.data)
          setLoading(false)
     }).catch((e)=>{console.log('error when fetching data: ', e); setLoading(false); setError(true)})
  }, [])

  if(error){
     return <>
               <head>
                    <title>Rafi - Products Page</title>
               </head>
               <OwnNav />
               <Body>
                    <h1 className="text-3xl sm:text-5xl font-extrabold">Task 2</h1>
                    <h1>error when fetching products</h1>
               </Body>
          </>
  }

  return <>
     <head>
          <title>Rafi - Products Page</title>
     </head>
     <OwnNav />
     <Body>
          <h1 className="text-3xl sm:text-5xl font-extrabold">Rafi Task 2</h1>
          { !products ? (<p>Loading products...</p>) : (

               <div>
                    {products.map((product)=>
                              <div className="p-2 border-2 border-white h-[10vh] w-[15vw] bg-gray-700 text-center" key={product._id} >
                                   <Link href={"/task2/" + product._id}>
                                        <h2>{product.name}</h2>
                                        <p>{product.price} BDT</p>
                                   </Link>
                              </div>
                         )
                    }
               </div>) 
          }
     </Body>
    </>
}
