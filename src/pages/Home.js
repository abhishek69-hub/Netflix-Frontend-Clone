import React from 'react'
import Main from '../components/Main'
import requests from '../Requests'
import Row from '../components/Row'

export default function Home() {
  return (
    <div>
      <Main/>
      <Row title="Upcoming" fetchURL={requests.requestUpcoming}/>     
      <Row title="Popular" fetchURL={requests.requestPopular}/>    
      <Row title="Trending" fetchURL={requests.requestTrending}/>    
      <Row title="TopRated" fetchURL={requests.requestTopRated}/>    
      {/* <Row title="Horror" fetchURL={requests.requestHorror}/>      */}
    </div>
  )
}
