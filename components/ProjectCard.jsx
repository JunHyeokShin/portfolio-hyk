import Image from 'next/image'
import React from 'react'
import { jetbrainsMono } from '@/app/fonts'
import Link from 'next/link'

export default function ProjectCard({ project }) {
  return (
    <div
      style={jetbrainsMono.style}
      className="bg-gray-200 dark:bg-zinc-800 flex flex-col rounded-xl cursor-pointer shadow-xl hover:shadow-2xl hover:font-bold"
    >
      <div className="p-4 rounded-b-lg">
        <Link href={`/projects/${project.id}`}>
          <h1 className="text-xl mb-1 font-bold">{project.name}</h1>
        </Link>
        <p className="text-sm mb-1 text-gray-600 dark:text-gray-400">
          {project.description}
        </p>
        <div className="flex flex-wrap mb-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="my-1 mr-1 px-2 border-solid border-2 border-indigo-500 rounded-2xl text-xs text-gray-600 dark:text-gray-400"
            >
              {tag}
            </span>
          ))}
        </div>
        <div>
          {project.source_code && (
            <Link
              href={`${project.source_code}`}
              target="_blank"
              className="mr-5 hover:underline hover:underline-offset-auto text-sm text-indigo-600 dark:text-indigo-400"
            >
              Source Code
            </Link>
          )}
          {project.demo && (
            <Link
              href={`${project.demo}`}
              target="_blank"
              className="hover:underline hover:underline-offset-auto text-sm text-indigo-600 dark:text-indigo-400"
            >
              View Demo
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
