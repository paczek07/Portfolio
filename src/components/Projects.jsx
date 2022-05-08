import React from 'react'
import Card from './card'

const Projects = () => {
  return (
    <section id="projects" class=" px-16 mx-auto my-32">

        <h2 class="text-4xl font-bold text-center my-10">
          Projects?
        </h2>
        <p class="my-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid optio officia perspiciatis ex tenetur maiores quos. Earum modi numquam itaque hic. Fugiat, iure ex? Quibusdam nesciunt ipsum ullam incidunt consequatur tempora nulla dolor voluptatibus ab. Veniam minima animi totam at, amet facere enim tenetur praesentium voluptates, quae placeat sint quasi!</p>
        <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3 mt-10">
        <Card projectName="Bug Tracker"/>
        <Card projectName="Habit Tracker"/>
        <Card projectName="Witcher API"/>
        <Card projectName="Phone App"/>
        </div>
    </section>

    
  )
}

export default Projects