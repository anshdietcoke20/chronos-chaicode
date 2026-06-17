

'use client';

import { useState } from 'react';
import {authClient} from '@/lib/auth-client';
import Link from 'next/link';

export default function SigninPage() {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const handleSignin = async () => {
    const {data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: '/dashboard'
    })

    if(error){
      alert(error.message);
      return;
    } 
    
    if(data){
      window.location.href = '/dashboard'
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
        <div>
            <section className="mb-7">
            <h2 className="text-3xl font-bold text-blue-100 mb-12 text-center">Login to your account </h2>
            
            <div className="max-w-xl mx-auto">
              <div className="bg-blue-900 border-3 rounded-sm border-cyan-600 p-8 text-center">
                <input type="email" className='bg-blue-900 border-2 rounded-sm border-cyan-600 p-2 w-100' placeholder="Enter your email here" onChange={(e) => setemail(e.target.value)} />

                <div className='pt-5'>
                  <input type="password" className='bg-blue-900 border-2 p-2 rounded-sm border-cyan-600 p2 w-100' placeholder='Enter your password here' onChange={(e) => setpassword(e.target.value)} />
                  </div>

                  <div className='flex flex-col gap-5 pt-5 items-center'>
                    <button className="'bg-blue-100text-blue-500   border-cyan-600 hover:bg-blue-700 border-2 rounded-sm p-2 w-100 text-white font-bold py-3 px-6 transition-colors text-xl" onClick={handleSignin}>Sign In</button>

                     <button className="bg-blue-600  border-cyan-600 hover:bg-blue-700 border-2 rounded-sm p-2 w-100 text-white font-bold py-3 px-6 transition-colors text-xl" onClick={handleGoogleLogin}><i class="ri-google-line"></i> Connect through Google</button>
                     
                    <button className="bg-blue-600   border-cyan-600 hover:bg-blue-700 border-2 rounded-sm p-2 w-100 text-white font-bold py-3 px-6 transition-colors text-xl" onClick={handleGithubLogin}><i class="ri-github-line"></i> Connect through Github</button>
                  </div>
  
        <p className='pt-5'>
          Don't have an account? {''}
          <Link href='/signup' className='text-blue-100'>Sign Up</Link>
        </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    )
}

