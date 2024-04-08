import React from 'react'
import ProjectsCards from './ProjectsCards';


const ProjectsData = [
    {
      id: 1, 
      title: "Oka Website",
      description: "etc etc etc",
      image: "/imagens/projects/oka_project.png"
    },
    {
        id: 2, 
        title: "Oka Website",
        description: "etc etc etc",
        image: "/imagens/projects/oka_project.png",
        tag: ["All", "Web"],
      },
      {
        id: 3, 
        title: "Oka Website",
        description: "etc etc etc",
        image: "/imagens/projects/oka_project.png",
        tag: ["All", "Web"],
      },
      {
        id: 4, 
        title: "Oka Website",
        description: "etc etc etc",
        image: "/imagens/projects/oka_project.png",
        tag: ["All", "Web"],
      },
      {
        id: 5, 
        title: "Oka Website",
        description: "etc etc etc",
        image: "/imagens/projects/oka_project.png",
        tag: ["All", "Web"],
      },
]


const ProjectsSection = () => {
  return (
    <>
    <h2>Meus projetos</h2>
    <div> {ProjectsData.map((project) => <ProjectsCards key={project.id} title={project.title} description={project.description} imgUrl={project.image}/> )} </div>
    </>
  )
}

export default ProjectsSection;