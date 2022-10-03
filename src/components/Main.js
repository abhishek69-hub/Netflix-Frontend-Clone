import React, { useEffect, useState } from 'react'
import requests from '../Requests'
import axios from 'axios'

export default function Main() {
    const[movies,setmovies]=useState([])

    useEffect(()=>{
      axios.get(requests.requestPopular).then((response)=>{
        setmovies(response.data.results)
      })

    },[])
    
    const movie=movies[Math.floor(Math.random()*movies.length)]
    // console.log(movies[0])

    const truncateString = (str,num) =>{
      if (str?.length > num){
        return str.slice(0,num)+"...";
      }else{
        return str;
      }
    }

 


  return (
    <div className='w-full h-[550px] text-white  '>
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />


        <div className=' absolute left-0 float-left  w-1/2 top-[20%] p-4 md:p-8 w-screen'>
          <h1 className='text-left my-4 text-3xl md:text-5xl'>{movie?.title}</h1>
          <div className='my-3 flex items-left'>
            <button className="border  bg-gray-300 text-black border-gray-300 py-2 px-5">Play</button>
            <button className="border   text-white border-gray-300 py-2 px-5 ml-4">Watch later</button>
          </div>
          <p className='my-2 text-left text-gray-400 text-sm'>Released: {movie?.release_date}</p>
          <p className='my-2 text-left w-full md:max-w-{70%} lg:max-w-{50%} xl:max-w-{35%} text-gray-200'>{truncateString(movie?.overview,150)}</p>
        </div>

      </div>
    </div>
  )
}
