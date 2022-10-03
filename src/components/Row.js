import React,{useEffect,useState} from 'react';
import axios from 'axios';
// import {FaHeart, FaRegHeart} from 'react-icons/fa';
import Movie from './Movie';




export default function Row({title,fetchURL}) {

    const[movies,setmovies]=useState([])
    // const[Like,setLike]=useState(false)

    useEffect(()=>{
        axios.get(fetchURL).then((response)=>{
            setmovies(response.data.results)
        });
    },[fetchURL])
    console.log(movies)






  return (
    <>
    <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
    <div className="relative flex items-center">
        <div id={'slider'} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
            {movies.map((item,id)=>(
                <Movie item={item}/> 
            ))}
        </div>
    </div>
      
    </>
  )  
}
 