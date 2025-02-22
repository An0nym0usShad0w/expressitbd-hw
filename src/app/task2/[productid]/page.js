"use client"
import {useParams} from 'next/navigation'
import { useEffect, useState } from 'react';
import axios from 'axios'
import OwnNav from '../../../components/nav'
import Body from '../../../components/body'
import { useRouter } from "next/navigation";

export default function ProductDetail(){
     const { productid } = useParams()
     const [productDetail, setProductDetail] = useState(null)
     const [error, setError] = useState(null)

     const router = useRouter();
     const goBack = () => {
          router.back();
     };
        

     useEffect(()=>{
          axios.get('https://glore-bd-backend-node-mongo.vercel.app/api/product')
          .then((response)=>{
               response.data.data.map(product => {
                    if(productid === product._id){
                         setProductDetail(product)
                    }
               });
          }).catch((e)=>{console.log('error when finding product detail: ', e); setError(true)})

     }, [productid])

     if(error){
          return <>
               <OwnNav />
               <Body><p>product detail cant be loaded</p></Body>
          </>
     }
     return (
          <>
               <OwnNav />
               <Body>
                    <h1 className="text-3xl sm:text-4xl font-extrabold">Product detail:</h1>
                    { !productDetail ? (<p>Loading product...</p>) : 
                    (<div>
                         <h1 className="text-3xl sm:text-4xl font-extrabold"><span className="text-red-600">Name:</span> {productDetail.name}</h1>
                         <h1 className="text-3xl sm:text-4xl font-extrabold"><span className="text-red-600">Price:</span> {productDetail.price}</h1>
                         <h1 className="text-3xl sm:text-4xl font-extrabold"><span className="text-red-600">Description:</span> {productDetail.description}</h1>
                         <button onClick={goBack} className="text-3xl sm:text-4xl font-extrabold">↩️</button>
                    </div>) }
               </Body>
          </>
        );
}