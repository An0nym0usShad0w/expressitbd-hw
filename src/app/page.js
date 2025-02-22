//plan
//home page
//2 buttons
'use client'
import OwnNav from '../components/nav'
import Body from '../components/body'

export default function Home(){
  return (
  <>
      <head><title>Rafi Interview Task ExpressItBd</title></head>
      <OwnNav />
      <Body>
        <div className="ml-[10vw] text-3xl sm:text-5xl font-extrabold">Welcome to my Interview Task for ExpressItBd</div>
        <div className="ml-[10vw] text-1xl sm:text-3xl font-extrabold">Click on the <span className="text-red-600">buttons</span> above</div>
      </Body>
  </>)
}