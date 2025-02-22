import Link from 'next/link'

export default function OwnNav(){
     return (<>
          <div className="nav-bar sm:flex justify-around p-2">
               <div className="sm:w-[40%] h-16 rounded-sm text-5xl md:text-6xl font-extrabold text-center">Rafi Ahmed</div>
               <div className="inside  sm:flex sm:w-[45%]">
                    <div className="h-16 sm:w-[25%] rounded-sm text-6xl text-center"><Link href="/" className="p-1 m-2">🏠</Link></div>
                    <div className="h-16 sm:w-[45%] rounded-sm text-5xl md:text-4xl text-center"><Link href="/task1" className="p-1 m-2 ">Task1</Link></div>
                    <div className="h-16 sm:w-[45%] rounded-sm text-5xl md:text-4xl text-center"><Link href="/task2" className="p-1 m-2">Task2</Link></div>
               </div>
          </div>      
     </>)
}