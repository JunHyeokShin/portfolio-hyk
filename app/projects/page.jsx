import ProjectCard from '@/components/ProjectCard'
import React from 'react'

async function fetchProjects() {
  const response = await fetch('http://localhost:3000/api/projects')
  const projects = response.json()
  return projects
}

export default async function page() {
  const projects = await fetchProjects()

  return (
    <section className=" min-h-screen flex-col p-5">
      <div className="container mx-auto grid gap-6 grid-cols-project-card">
        {projects?.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
