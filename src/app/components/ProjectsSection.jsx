"use client";
import React, {useState} from 'react';
import ProjectsCards from './ProjectsCards';
import ProjectTag from './ProjectTag';

const ProjectsData = [
    {
      id: 1, 
      title: "Oka Website",
      description: "etc etc etc",
      image: "/images/projects/oka_project.png",
      tag: ["All", "Web"],
      gitUrl: "github.com/delcisp",
      previewUrl: "github.com/delcisp"
    },
    {
        id: 2, 
        title: "Oka Website",
        description: "etc etc etc",
        image: "/images/projects/oka_project.png",
        tag: ["All", "Web"],
        gitUrl: "github.com/delcisp",
        previewUrl: "github.com/delcisp"
      },
      {
        id: 3, 
        title: "Oka Website",
        description: "etc etc etc",
        image: "/images/projects/oka_project.png",
        tag: ["All", "Web"],
        gitUrl: "github.com/delcisp",
        previewUrl: "github.com/delcisp"
      },
      {
        id: 4, 
        title: "Oka Website",
        description: "etc etc etc",
        image: "/images/projects/oka_project.png",
        tag: ["All", "Web"],
        gitUrl: "github.com/delcisp",
        previewUrl: "github.com/delcisp"
      },
      {
        id: 5, 
        title: "Oka Website",
        description: "etc etc etc",
        image: "/images/projects/oka_project.png",
        tag: ["All", "Web"],
        gitUrl: "github.com/delcisp",
        previewUrl: "github.com/delcisp"
      },
]


const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  }
  return (
    <>
    <h2>Meus projetos</h2>
    <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
      <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All" } />
      <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web" } />
      <ProjectTag onClick={handleTagChange} name="Desktop" isSelected={tag === "Desktop" } />
    </div>
    <div> {ProjectsData.map((project) => <ProjectsCards key={project.id}
     title={project.title} description={project.description} imgUrl={project.image}
     gitUrl={project.gitUrl}
     previewUrl={project.previewUrl}
     
     /> )} </div>
    </>
  )
}

export default ProjectsSection;