import Link from 'next/link'
import React from 'react'
import { BsFacebook, BsInstagram, BsGithub } from 'react-icons/bs'

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-zinc-900">
      <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
        <Link href="/">
          <h1>JunHyeokShin's Portfolio</h1>
        </Link>
        <div className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start text-gray-600 dark:text-gray-400 items-center text-xl">
          <h3 className="text-sm mr-2">junhyeok001010@gmail.com</h3>
          <Link href="https://github.com/JunHyeokShin" target="_blank" className="mr-2">
            <BsGithub />
          </Link>
          <Link href="https://www.facebook.com/profile.php?id=100008221114175&locale=ko_KR" target="_blank" className="mr-2">
            <BsFacebook />
          </Link>
          <Link href="https://www.instagram.com/junhyeok_shin/" target="_blank" className="mr-2">
            <BsInstagram />
          </Link>
        </div>
      </div>
    </footer>
  )
}
