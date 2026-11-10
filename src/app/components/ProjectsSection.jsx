"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Controle de entrada e saída -  Reconhecimento Facial",
    description: "Projeto de controle de entrada e saída de pessoas utilizando reconhecimento facial. O sistema permite que os usuários registrem suas entradas e saídas de forma rápida e segura, utilizando a tecnologia de reconhecimento facial para autenticação. Feito com Python.",
    image: "/images/projects/6.png",
    tag: ["Todos", "Desktop"],
    gitUrl: "https://github.com/delcisp/backend_ponto",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "DiariaFácil",
    description: "Projeto de contrato de serviços domésticos, onde o usuário pode contratar diaristas para realizar serviços em sua residência. O sistema permite que os usuários encontrem profissionais qualificados, agendem serviços e realizem pagamentos de forma segura. Feito com PHP e Laravel.",
    image: "/images/diariaFacil.png",
    tag: ["Todos", "Web"],
    gitUrl: "https://github.com/delcisp/diariaFacil",
    previewUrl: "/",
  },
  {
    id: 3, 
    title: "Oka Studio",
    description: "Site institucional para Oka Studio, um estúdio de design e desenvolvimento web. O site apresenta informações sobre os serviços oferecidos, portfólio de projetos anteriores e uma seção de contato para potenciais clientes. Feito com Lovable.",
    image: "/images/projects/new_oka_project.png",
    tag: ["Todos", "Vibe Coding"],
    gitUrl: "https://github.com/delcisp/oka-project",
    previewUrl: "github.com/delcisp"
  },
  {
    id: 4,
    title: "Studio Daiana Pinheiro",
    description: "Project 4 description",
    image: "/images/projects/4.png",
    tag: ["Todos", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Api de Delivery",
    description: "Authentication and CRUD operations",
    image: "/images/projects/5.png",
    tag: ["Todos", "Desktop"],
    gitUrl: "https://github.com/delcisp/apidedelivery",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Crud com React e Laravel",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["Todos", "Web"],
    gitUrl: "https://github.com/delcisp/crud-react-laravel",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Delmodoro",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["Todos", "Web"],
    gitUrl: "https://github.com/delcisp/chronos-pomo",
    previewUrl: "/",
  },
  
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Todos");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-[var(--ice-white)] mt-4 mb-8 md:mb-12">
        Meus projetos
      </h2>
      <div className="text-[var(--ice-white)] flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Todos"
          isSelected={tag === "Todos"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Desktop"
          isSelected={tag === "Desktop"}
        />
        <ProjectTag 
        onClick={handleTagChange} 
        name="Vibe Coding"
        isSelected={tag === "Vibe Coding"}
        />

      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;