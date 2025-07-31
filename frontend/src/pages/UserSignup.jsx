import React from 'react' 
// eslint-disable-next-line no-unused-vars
import  { useState } from 'react' 
import { Link } from 'react-router-dom'



function UserSignup() {
  return (
    <div>
      <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
         <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" alt="" />
      <form  onSubmit = {(e)=>{
        // eslint-disable-next-line no-undef
        submitHandler(e);
      }}  action="">

      <h3 className='text-lg font-medium mb-2'>What's your name?</h3>
      <div className='flex gap-8 '>
        <input 
        required
        className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base'
        type="first name" 
        placeholder = 'first name' />
      
      <input 
        required
        className='bg-[#eeeeee] mb-7 rounded px-4 py-2 w-1/2 border  text-lg placeholder:text-base'
        type="last name" 
        placeholder = 'last name' />
      </div>
        <h3 className='text-lg font-medium mb-2'>Enter Your email</h3>
        <input 
        required
        className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
        type="email" 
        placeholder = 'email@exaple.com' />

        <h3 className='text-lg font-medium mb-2'>Enter Pssword</h3>

        <input
        className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
        required
        type="password" 
        placeholder="password" />


        <button className='bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
        >Login</button>
        
      </form>
      <p className='text-center'>Already have an account?<Link to='/login' className='text-blue-600'>Login here </Link></p>
      </div>

      <div>
          <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
            Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
      </div>
    </div>
    </div>
  )
}

export default UserSignup
