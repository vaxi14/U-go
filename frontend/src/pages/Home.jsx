import React from 'react'

const Home = () => {
  return (
    <div>
        <div className='h-screen pt-8 flex flex-col w-full justify-between  bg-red-600  '>
            <img className='w-16 ml-8' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" alt=""  />
            <div className='bg-white py-4 px-4 pb-5'>
                <h2 className='text-3xl font-bold'>
                    Get Started with U-go
                </h2>
                <button className='w-full bg-black text-white py-3 rounded mt-4'>
                    continue
                </button>
            </div>
        </div>
      
    </div>
  )
}

export default Home
