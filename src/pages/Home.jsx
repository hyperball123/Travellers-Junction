import React from 'react'
import Title from '../ui/Title'
import HomeNav from '../ui/HomeNav'
import Slogan from '../ui/Slogan'

function Home() {
  return (
  
 <main className='h-screen w-full bg-gradient-image bg-cover bg-no-repeat bg-center overflow-x-hidden'>
  <div className='flex flex-col sm:flex-row justify-between items-center sm:items-start min-h-screen p-4 max-w-[1320px] m-auto font-protest'>
    <div className="sm:flex sm:flex-col justify-between">
      <Title />
      <Slogan />
    </div>
    <div className="sm:flex sm:col-span-1 justify-end">
      <HomeNav />
    </div>
  </div>
</main>



  )
}

export default Home
