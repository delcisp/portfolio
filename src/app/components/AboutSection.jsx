"use client";
import React, {useTransition, useState} from 'react';
import Image from 'next/image';
import TabButton from './TabButton';


const TAB_DATA = [
  {
    title: "Stacks",
    id: "stacks", 
    content: (
      <ul className='list-disc pl-2'>

        <li>Javascript</li>
        <li>React.js</li>
        <li>Next.js</li>
        <li>Node.js</li>
        <li>Wordpress</li>
        <li>Bootstrap</li>
        <li>Tailwind</li>
        <li>PHP</li>
        <li>Laravel</li>
        <li>Python</li>
        <li>MySQL</li>
        <li>Postgree</li>
        <li>Firebase</li>
        
      </ul>
    )
  },
  {
    title: "educacao",
    id: "educacao", 
    content: (
      <ul className='list-disc pl-2'>
        <li>Análise e Desenvolvimento de Sistemas - FAMETRO (fev/2022 - julho/2024) </li>
        <li>MBA em Gestão de Tecnologia da Informação - WYDEN (mar/2025 - mar/2026)</li>
      </ul>
    )
  },
  {
    title: "Experiencias",
    id: "experiencias", 
    content: (
      <ul className='list-disc pl-2'>
        <li>Estagiária de Desenvolvimento de Sistemas e atendimento ao usuário </li>
        <li>Analista Desenvolvedora</li>
      </ul>
    )
  }
]


const AboutSection = () => {

  const [tab, setTab] = useState("stacks");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = id => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
   <section className="text-[var(--ice-white)]">
    <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
    <Image src="/images/about-image.jpg" alt='sobre mim'  width={500} height={500}  /> 
    <div>
    <h2 className="text-4xl font-bold text-[var(--text-white)] mb-4">Sobre mim</h2>
    <p className="text-base lg:text-lg text-[var(--secondary-gray)] ">
      Sou Analista Desenvolvedora, com experiência em desenvolvimento e manutenção de sistemas, levantamento de requisitos, análise de processos e gerenciamento de projetos de tecnologia. Atuo em todo o ciclo de desenvolvimento, desde a identificação das necessidades até a implementação e evolução das soluções, trabalhando com diferentes tecnologias e bancos de dados.

Também tenho experiência na coordenação de atividades e acompanhamento de equipe, conciliando conhecimentos técnicos com organização, comunicação e visão de negócio. Sou uma profissional proativa, autodidata e comprometida com a busca por soluções que otimizem processos e gerem resultados.
     </p>
    <div className="flex flex-row mt-8">
      <TabButton  selectTab={() => handleTabChange("stacks")} active={tab === "stacks"}> Stacks </TabButton>
      <TabButton  selectTab={() => handleTabChange("educacao")} active={tab === "educacao"}> Educação </TabButton>
      <TabButton  selectTab={() => handleTabChange("experiencias")} active={tab === "experiencias"}> Experiências </TabButton>
      </div>
      <div className='mt-8 '>{TAB_DATA.find((t) => t.id === tab).content}</div>
    </div>
    </div>
   </section>
  )
}

export default AboutSection;