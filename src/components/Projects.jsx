import React from 'react'
import Card from './card'

const Projects = () => {
  return (
    <section id="projects" class=" px-16 mx-auto my-32">

        <h2 class="text-4xl font-bold text-center mb-20 dark:text-white">
          Projects
        </h2>
        <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3 mt-10">
        <Card projectName="Bug Tracker"/>
        <Card projectName="Habit Tracker"/>
        <Card projectName="Witcher API"/>
        </div>
    </section>

    
  )
}

export default Projects