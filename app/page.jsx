'use client'
import Animation from '@/components/Animation'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <section className="flex min-h-screen flex-col items-center justify-center">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="sm:text-3xl text-2xl mb-4 font-medium">안녕하세요. 제 이름은 신준혁입니다.</h1>
            <p className="mb-8 leading-relaxed text-gray-600 dark:text-gray-400">현재 중부대학교 정보보호학과 재학 중에 있습니다.</p>
            <div className="flex justify-center text-white dark:text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              <Link href="/projects">프로젝트 보러가기</Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Animation />
          </div>
        </div>
      </section>
    </div>
  )
}
