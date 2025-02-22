export default function Body({children}){
     return(
          <div className="body-place flex items-center justify-center">
               <div className="flex items-center justify-center sm:h-[70vh] w-[85vw] p-2 mt-20">
               <div className='items-center justify-center'>
                    {children}
               </div>
               </div>
          </div>
     )
  }