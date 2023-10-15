'use client'
import ProjectCard from '@/components/ProjectCard'
import React, { useEffect, useState } from 'react'

export default function page() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await fetch('/api/projects')
      const project = await res.json()
      setProjects(project)
    }
    fetchProjects()
  }, [])

  return (
    <section className="min-h-screen flex-col p-5">
      <div className="container mx-auto grid gap-6 grid-cols-project-card">
        {projects?.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
