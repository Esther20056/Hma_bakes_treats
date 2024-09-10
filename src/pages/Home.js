import React from 'react'
import Treats from '../Components/Treats/Treats'
import Popular from '../Components/Popular/Popular'
import Special from '../Components/Special/Special'
import NewProducts from '../Components/NewProducts/NewProducts'
import Newsletter from '../Newsletter/Newsletter'


function Home() {
  return (
    <div className='home'>
      <Treats/>
      <Special/>
      <Popular/>
      <NewProducts/>
      <Newsletter/> 
  
      
    </div>
  )
}

export default Home