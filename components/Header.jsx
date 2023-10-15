import Link from 'next/link'
import React from 'react'
import DarkModeToggleButton from './DarkModeToggleButton'
import { jetbrainsMono } from '@/app/fonts'

export default function Header() {
  return (
    <header>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/" className="flex font-bold items-center text-black mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <h1 style={jetbrainsMono.style} className="ml-3 text-xl font-medium dark:text-white">
            JunHyeokShin
          </h1>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/">
            <p className="mr-5 text-gray-600 dark:text-gray-400 hover:font-bold">홈</p>
          </Link>
          <Link href="/projects">
            <p className="mr-5 text-gray-600 dark:text-gray-400 hover:font-bold">프로젝트</p>
          </Link>
          {/* <Link href="/contact">
            <p className="mr-5 text-gray-600 dark:text-gray-400 hover:font-bold">연락하기</p>
          </Link> */}
          <DarkModeToggleButton className="mr-5" />
        </nav>
      </div>
    </header>
  )
}
