
"use client"
import React from 'react'
import { Icon } from '@iconify/react'
import { signIn } from 'next-auth/react'

const GoogleSignIn = () => {
    const signInHandler = () => {
        signIn('google',{callbackUrl:'/user/'})
        }
  return (
    <div className="flex justify-center cursor-pointer" >
    <div className="flex gap-2 py-4 px-8 shadow-lg self-center" onClick={signInHandler}>
      <Icon
        icon="flat-color-icons:google"
        className="text-2xl"
      />
      <span className='font-normal'>SignIn with Google</span>
    </div>
  </div>
  )
}

export default GoogleSignIn
