import React from 'react'
import Title from '../ui/Title'
import HomeNav from '../ui/HomeNav'
import Slogan from '../ui/Slogan'

function Home() {
  return (
    <main className='h-screen w-full bg-gradient-image bg-cover bg-no-repeat bg-center overflow-x-hidden '>
      <div className='max-w-[1300px] m-auto flex flex-col justify-between h-screen'>

      <div className='h-screen flex flex-col sm:flex-row justify-between items-center sm:items-start p-4'>
         <Title/>
          <HomeNav />
        </div>
        
      <div className='hidden sm:block p-4'>
            <Slogan />
       </div>
    </div>
</main>
  )
}

export default Home
