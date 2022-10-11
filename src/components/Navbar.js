import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import { useState } from 'react'



export default function Navbar() {

  const { user, logOut } = UserAuth();
  const navigate=useNavigate();

  // console.log(user)

  const handleLogout = async () =>{
    try{
      await logOut();
      navigate('/Login');
    }catch (error){
      console.log(error);
    }
  };
  




  return (
    <>
      <div className='h-[90px]  flex justify-between items-center z-[100] w-full absolute'>
        

        <Link className='h-1/4 ml-5 md:h-1/3 ml-20' to="/">
          <img className='h-full w-full' src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="" />
        </Link>
        {user?.email ? (
          <div className='mx-5'>

            <Link to='/account'>
              <button className="sm:hover:underline text-white py-1 px-2 rounded-sm mx-2 md:hover:underline text-white font-bold py-2 px-4 rounded-sm mx-2">
                Account
              </button><button className=''></button>
            </Link>


            
              <button onClick={handleLogout} className="sm: bg-red-600  hover:scale-95 duration-200 font-bold py-1 px-2 border border-red-600  rounded-sm mx-1     md:bg-red-600  hover:scale-95 duration-200 text-white font-bold py-2 px-4 border border-red-600  rounded-sm mx-1">
                LogOut
              </button>
            


          </div>
        ):( 
          <div className='mx-5'>

            <Link to='/login'>
              <button className="sm:hover:underline text-white py-1 px-2 rounded-sm mx-2 md:hover:underline text-white font-bold py-2 px-4 rounded-sm mx-2">
                  Sign in
              </button><button className=''></button>
            </Link>


            <Link to="/signup">
              <button className="sm: bg-red-600  hover:scale-95 duration-200 font-bold py-1 px-2 border border-red-600  rounded-sm mx-1     md:bg-red-600  hover:scale-95 duration-200 text-white font-bold py-2 px-4 border border-red-600  rounded-sm mx-1">
                  Sign Up
              </button>
            </Link>

              
          </div>
        )}

          
      
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
