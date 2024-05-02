"use client"
import { Icon } from '@iconify/react/dist/iconify.js'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const DropdownComp = () => {
    const router = useRouter();
    const signOutHandler = () => {
        signOut();
    } 
    const signInHandler = () => {
        router.push("/auth/login")
    }
    const {data:session} = useSession();

  return (
    <div className="hs-dropdown relative inline-flex">
      <div
        id="hs-dropdown-with-dividers"
        className="flex items-center gap-2 cursor-pointer"
      >
        <div className="icon-wrap w-10 h-10 rounded-full bg-white flex items-center justify-center relative ">
          <Icon icon="uil:user" className="text-2xl text-black" />
          <div className="w-3 h-3 rounded-full bg-teal-500 absolute top-0 right-0"></div>
        </div>
        <span className="text-base text-white">{session?.user?.name}</span>
      </div>

      <div
        className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg p-2 mt-2 divide-y divide-gray-200 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700 hi"
        aria-labelledby="hs-dropdown-with-dividers"
      >
        <div className="py-2 first:pt-0 last:pb-0">
          <Link
            className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
            href="/user"
          >
            User Profile
          </Link>
        </div>
        <div className="py-2 first:pt-0 last:pb-0">
          <Link
            className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
            href="#"
          >
            Upgrade License
          </Link>
        </div>
        <div className="py-2 first:pt-0 last:pb-0">
         {session?
          <button
            className="flex w-fit items-center gap-x-3.5 py-2 px-6 rounded-lg text-sm  hover:bg-primaryEmphasis focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 bg-primary text-white"
             onClick={signOutHandler}
          >
            Sign Out
          </button>: 
           <button
            className="flex w-fit items-center gap-x-3.5 py-2 px-6 rounded-lg text-sm  hover:bg-primaryEmphasis focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 bg-primary text-white"
             onClick={signInHandler}
          >
            Sign In
          </button>}
        </div>
      </div>
    </div>
  );
}

export default DropdownComp
