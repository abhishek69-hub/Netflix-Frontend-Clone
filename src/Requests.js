const key='14ac11057fd16036af9524fe79cc6a65'

const requests ={
    requestPopular:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrending:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestComedy:`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=comedy&page=1`,
    requestUpcoming:`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`
}

export default requests

// https://assets-global.website-files.com/5ab51e98ef3b980e8d0a4e37/604a418de4663bf59767f987_Cliente-Netflix.svg


    // < div className = "w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2" >
    //                 <img className='w-full h-auto block'
    //                 src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} 
    //                 alt={item?.title} 
    //                 />
    //                 <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
    //                     <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>
    //                         {item?.title}
    //                     </p>
    //                     <p>
    //                         {Like?<FaHeart className='absolute top-4 left-4 text-gray-300'/>:<FaRegHeart className='absolute top-4 left-4 text-gray-300'/>}
    //                     </p>
    //                 </div>
    //             </ >