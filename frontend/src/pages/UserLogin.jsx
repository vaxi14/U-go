import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function UserLogin() {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [userData, setuserData] = useState({})
  const submitHandler = (e)=>{
    e.preventDefault();
    setuserData({
      email: email,
      password: password
    })
    console.log(userData);
    setemail('');
    setpassword('');
  }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
         <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" alt="" />
      <form  onSubmit = {(e)=>{
        submitHandler(e);
      }}  action="">
        <h3 className='text-lg font-medium mb-2'>What's your email</h3>
        <input 
        required 
        value={email}
        onChange={(e)=>{setemail(e.target.value)}}
        className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
        type="email" 
        placeholder = 'email@exaple.com' />

        <h3 className='text-lg font-medium mb-2'>Enter Pssword</h3>

        <input
        className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
        required
         value={password}
        onChange={(e)=>{setpassword(e.target.value)}}
        type="password" 
        placeholder="password" />


        <button className='bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
        >Login</button>
        
      </form>
      <p className='text-center'>New here?<Link to='/signup' className='text-blue-600'>Create new Account</Link></p>
      </div>

      <div>
        <Link to="/captain-login" className='bg-[#8EC5FF] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'>Sign in as Captain</Link>
      </div>
    </div>
  )
}

export default UserLogin
