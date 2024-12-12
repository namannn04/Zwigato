import React, { useState } from 'react'
import Header from '../components/Header'
import ExploreMenu from '../components/ExploreMenu'

function Home() {

  const[category,setCategory] = useState("ALL");

  return (
    <div>
        <Header/>
        <ExploreMenu category={category} setCategory={setCategory}/>
    </div>
  )
}

export default Home