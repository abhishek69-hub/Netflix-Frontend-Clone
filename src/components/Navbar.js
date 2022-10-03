import React from 'react'


export default function Navbar() {
  return (
    <>
      <div className='h-[90px]  flex justify-between items-center z-[100] w-full absolute'>
        <img  className='h-1/4 ml-5 md:h-1/3 ml-20 ' src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"alt="" />
          <div className='mx-5'>
              <button className="sm:hover:underline text-white py-1 px-2 rounded-sm mx-2 md:hover:underline text-white font-bold py-2 px-4 rounded-sm mx-2">
                  Sign in
              </button><button className=''></button>

              <button className="sm: bg-red-600  hover:scale-95 duration-200 font-bold py-1 px-2 border border-red-600  rounded-sm mx-1     md:bg-red-600  hover:scale-95 duration-200 text-white font-bold py-2 px-4 border border-red-600  rounded-sm mx-1">
                  Sign Up
              </button>
              
          </div>
      
     </div>
    {/* <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
      <h1 className="text-red-600 text-4xl font bold cursor-pointer">NETFLIX</h1>
      <div>
        <button className='text-white pr-4 '>Sign in</button>
        <button className="bg-red-600 px-6 py-2 rounded cursor-pointer">Sign Up</button>
      </div>
      
    </div> */}











    </>
  )

}
