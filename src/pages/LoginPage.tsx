import React, { useRef, useState } from 'react'
import Button from '../components/Button/Button'
import Text from '../components/Text/Text'
import { UserCredentials, login } from '../services/postsAPI'

import { useQuery, useMutation } from '@tanstack/react-query'

const LoginPage = () => {
  const { data } = useMutation({
    mutationFn: (variables: UserCredentials) => login,
  })

  const [login, setLogin] = useState(false)

  const emailRef = useRef<HTMLInputElement>(null)
  const fullNameRef = useRef<HTMLInputElement>(null)
  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const handleLogin = () => {
    const fullName = fullNameRef?.current?.value
    const email = emailRef?.current?.value
    const username = usernameRef?.current?.value
    const password = passwordRef?.current?.value
  }

  return (
    <div className='flex items-center h-[100dvh] justify-center'>
      <main className='flex '>
        {/* RIGHT SECTIOn */}
        {/* <section className='flex-1'>IMAGE HERE</section> */}

        {/* LEFT SECTON */}
        <section>
          <article className='border rounded-lg border-white/10 p-3 flex-1 flex flex-col items-center bg-slate-500/10'>
            <header className='py-10 '>
              <span
                className='py-1
             px-3 bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-500 rounded-lg mr-1 !font-extrabold'
              >
                X
              </span>
              <span className='font-thin font-mono'>plork</span>
            </header>
            <form className='max-w-sm flex flex-col gap-3 '>
              {login ? (
                <>
                  <div>
                    <label htmlFor='username'></label>
                    <input
                      ref={usernameRef}
                      type='text'
                      placeholder='Username or Email'
                      id='username'
                      className='placeholder:text-[10px] placeholder:px-3 text-[10px] p-2 bg-gray-300 text-black outline-none w-80 rounded-sm focus:bg-white'
                    />
                  </div>
                  <div>
                    <label htmlFor='password'></label>
                    <input
                      ref={passwordRef}
                      type='password'
                      placeholder='Password'
                      id='password'
                      className='placeholder:text-[10px] placeholder:px-3 text-[10px] p-2 bg-gray-300 text-black outline-none w-80 rounded-sm focus:bg-white'
                    />
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <label htmlFor='email'></label>
                    <input
                      ref={emailRef}
                      type='text'
                      placeholder='Email'
                      id='email'
                      className='placeholder:text-[10px] placeholder:px-3 text-[10px] p-2 bg-gray-300 text-black outline-none w-80 rounded-sm focus:bg-white'
                    />
                  </div>
                  <div>
                    <label htmlFor='fullName'></label>
                    <input
                      ref={fullNameRef}
                      type='text'
                      placeholder='Full Name'
                      id='fullName'
                      className='placeholder:text-[10px] placeholder:px-3 text-[10px] p-2 bg-gray-300 text-black outline-none w-80 rounded-sm focus:bg-white'
                    />
                  </div>
                  <div>
                    <label htmlFor='username'></label>
                    <input
                      ref={usernameRef}
                      type='text'
                      placeholder='Username'
                      id='username'
                      className='placeholder:text-[10px] placeholder:px-3 text-[10px] p-2 bg-gray-300 text-black outline-none w-80 rounded-sm focus:bg-white'
                    />
                  </div>
                  <div>
                    <label htmlFor='password'></label>
                    <input
                      ref={passwordRef}
                      type='password'
                      placeholder='Password'
                      id='password'
                      className='placeholder:text-[10px] placeholder:px-3 text-[10px] p-2 bg-gray-300 text-black outline-none w-80 rounded-sm focus:bg-white'
                    />
                  </div>
                </>
              )}
              <Button size='medium' onClick={handleLogin}>
                {!login ? 'Sign up' : 'Login'}
              </Button>
            </form>
          </article>

          <article className='border border-white/10 rounded-md p-3 bg-slate-500/10 mt-3 flex items-center justify-center'>
            <Text size='tiny' className='text-gray-300'>
              Don't have an account yet?{' '}
              <span
                className='text-blue-300/80 cursor-pointer hover:text-blue-200 transition-all'
                onClick={() => setLogin(!login)}
              >
                {login ? 'Sign up' : 'Log in'}
              </span>
            </Text>
          </article>
        </section>
      </main>
    </div>
  )
}

export default LoginPage
