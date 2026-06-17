'use client';

import { useState } from 'react';
import {authClient} from '@/lib/auth-client';
import Link from 'next/link';

export default function SignupPage  () {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');

  const handleSignup = async () => {
    const {data, error } = await authClient.signUp.email({
      name,
      email,
      password,
      callbackURL: '/dashboard'
    })

    if(error){
      console.error(error)
      alert(error.message);
      return;
    } 

  console.log(data);
    }

    const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: 'google',
      callbackURL: '/dashboard'
    })
  }

  const handleGithubLogin = async () => {
    await authClient.signIn.social({
      provider:'github',
      callbackURL: '/dashboard'
    })
  }

    return(
        <div className='min-h-screen bg-blue-950  pt-22 pb-24'>
           <section className="mb-7">
            <h2 className="text-3xl font-bold text-blue-100 mb-12 text-center">Create a new account!</h2>
            
            <div className="max-w-xl mx-auto">
              <div className="bg-blue-900 border-3 rounded-sm border-cyan-600 p-8 text-center">
                <input type="email" className='bg-blue-900 border-2 rounded-sm border-cyan-600 p-2 w-100' placeholder="Enter your name here" onChange={(e) => setName(e.target.value)} />
                
                <div className='pt-5'>
                <input type="text" className='bg-blue-900 border-2 rounded-sm border-cyan-600 p-2 w-100' placeholder='Enter your email here' onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className='pt-5'>
                  <input type="password" className='bg-blue-900 border-2 p-2 rounded-sm border-cyan-600 w-100' placeholder='Enter your password here' onChange={(e) => setpassword(e.target.value)} />
                  </div>

                  <div className='flex flex-col gap-5 pt-5 items-center'>
                    <button className="'bg-blue-100text-blue-500   border-cyan-600 hover:bg-blue-700 border-2 rounded-sm p-2 w-100 text-white font-bold py-3 px-6 transition-colors text-xl" onClick={handleSignup}>Sign Up</button>

                     <button className="bg-blue-600  border-cyan-600 hover:bg-blue-700 border-2 rounded-sm p-2 w-100 text-white font-bold py-3 px-6 transition-colors text-xl" onClick={handleGoogleLogin}><i className="ri-google-line"></i> Connect through Google</button>
                     
                    <button className="bg-blue-600   border-cyan-600 hover:bg-blue-700 border-2 rounded-sm p-2 w-100 text-white font-bold py-3 px-6 transition-colors text-xl" onClick={handleGithubLogin}><i className="ri-github-line"></i> Connect through Github</button>
                  </div>
  
        <p className='pt-5'>
          Already have an account? {''}
          <Link href='/signup' className='text-blue-100'>Login</Link>
        </p>
              </div>
            </div>
            </section>
        </div>
      // <div>
      //   <input type="text" placeholder='Enter your name here' onChange={(e) => setName(e.target.value)} />

      //   <input type="email" placeholder="Enter your email here" onChange={(e) => setemail(e.target.value)} />

      //   <input type="password" placeholder='Enter your password here' onChange={(e) => setpassword(e.target.value)} />

      //   <button onClick={handleSignup}>Sign Up</button>

      //   <button onClick={handleGoogleLogin}>Connect through Google</button>

      //   <button onClick={handleGithubLogin}>Connect through Github</button>

      //   <p>
      //     Already have an account? {''}
      //     <Link href='/signin'>Sign In</Link>
      //   </p>
      // </div>
    )
}
