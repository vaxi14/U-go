import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    const newUser = {
      username: {
        firstName: firstName,
        lastName: lastName
      },
      email: email,
      password: password
    };

    setUserData(newUser);
    console.log(newUser);

    // Reset fields
    setEmail('');
    setPassword('');
    setFirstName('');
    setLastName('');
  };

  return (
    <div>
      <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
          <img
            className='w-16 mb-10'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png'
            alt='Uber Logo'
          />
          <form onSubmit={submitHandler}>
            <h3 className='text-lg font-medium mb-2'>What's your name?</h3>
            <div className='flex gap-8'>
              <input
                required
                className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base'
                type='text'
                placeholder='First name'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />

              <input
                required
                className='bg-[#eeeeee] mb-7 rounded px-4 py-2 w-1/2 border text-lg placeholder:text-base'
                type='text'
                placeholder='Last name'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <h3 className='text-lg font-medium mb-2'>Enter your email</h3>
            <input
              required
              className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
              type='email'
              placeholder='email@example.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
            <input
              className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
              required
              type='password'
              placeholder='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              className='bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
              type='submit'
            >
              Sign Up
            </button>
          </form>
          <p className='text-center'>
            Already have an account?
            <Link to='/login' className='text-blue-600'>
              Login here
            </Link>
          </p>
        </div>

        <div>
          <p className='text-[10px] leading-tight'>
            This site is protected by reCAPTCHA and the{' '}
            <span className='underline'>Google Privacy Policy</span> and{' '}
            <span className='underline'>Terms of Service apply</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserSignup;
