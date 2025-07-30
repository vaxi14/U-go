import React from 'react';
import { Link } from 'react-router-dom'; 

const Home = () => {
  return (
    <div>
      <div className='bg-cover bg-[url(https://plus.unsplash.com/premium_photo-1731842686156-74895c29a87b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHJhZmZpYyUyMGxpZ2h0fGVufDB8fDB8fHww)] h-screen pt-8 flex flex-col w-full justify-between bg-red-600'>
        <img className='w-16 ml-8' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" alt="" />
        <div className='bg-white py-4 px-4 pb-5'>
          <h2 className='text-3xl font-bold'>
            Get Started with U-go
          </h2>
          <Link to='/login' className='flex items-center justify-center bg-black text-white py-3 rounded mt-4'>
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
