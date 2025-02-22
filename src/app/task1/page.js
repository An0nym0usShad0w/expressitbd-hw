'use client'
import { useState } from "react"
import axios from 'axios'

import OwnNav from '../../components/nav'
import Body from '../../components/body'

export default function Task1(){
     const [loading, setLoading] = useState(false)
     const [message, setMessage] = useState('')
     const checkDomain = 'uniquedomain.expressitbd.com';
     
     const postStore = async () =>{
          const postStoreData = {
               "name" : "Store Name",
               "currency" : "BDT",
               "country" : "Bangladesh",
               "domain" : "uniquedomain",
               "category" : "any",
               "email" : "any@email.com"
          }

          const createStoreUrl = 'https://interview-task-green.vercel.app/task/stores/create';
          try{
               await axios.post(createStoreUrl, postStoreData)
               setMessage(`domain ${checkDomain} not available, store created successfully`)
               setLoading(false)
          }catch(e){
               setMessage(`error when trying to create store, also ${checkDomain} not available`)
               setLoading(false)
          }
     }

     const checkAvailibility = async () => {
          try{
               setLoading(true)

               const available = await axios.get(`https://interview-task-green.vercel.app/task/domains/check/${checkDomain}`)

               if (available.data.data.taken){
                    postStore()
               }else{
                    setMessage(`domain ${checkDomain} available, store not created!`)
                    setLoading(false)
               }
          }catch(e){
               setMessage('error when checking availibility: ', e)
               setLoading(false)
          }
     }

     return (
          <>   
               <head><title>Rafi - Domain Check Availibility</title></head>
               <OwnNav/>
               <Body>
                    <h1 className="text-3xl sm:text-5xl font-extrabold">Rafi Task1</h1>
                    <button onClick={checkAvailibility} className="p-2 bg-blue-700 font-extrabold rounded-lg">{loading? 'Checking Availibility...' : 'Check Domain Availibility'}</button>
                    <p className="break-words max-w-72 italic">{message}</p>
               </Body>
          </>
     )
}