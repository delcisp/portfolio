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
      <li>
        <strong>Estagiária de Desenvolvimento de Sistemas - SEAD (2023)</strong>
        <ul className='list-disc pl-4'>
          <li>Desenvolvimento e manutenção de interfaces web para sistemas institucionais.</li>
          <li>Atuação com Front-end e suporte técnico aos usuários.</li>
          <li>Contato com tecnologias, sistemas operacionais e conceitos de redes de computadores.</li>
        </ul>
      </li>
      <hr className="my-4 border-gray-300" />
      <li>
        <strong>Desenvolvedora Full Stack - SEAD (2023 - 2024)</strong>
        <ul className='list-disc pl-4'>
          <li>Desenvolvimento de aplicações web completas, atuando no Front-end e Back-end.</li>
          <li>Implementação de funcionalidades e regras de negócio utilizando PHP, Laravel e JavaScript.</li>
          <li>Criação de interfaces responsivas com HTML, CSS, Bootstrap e Tailwind CSS.</li>
          <li>Desenvolvimento de novas soluções e manutenção de sistemas existentes.</li>
        </ul>
      </li>
      <hr className="my-4 border-gray-300" />
      <li>
        <strong>Desenvolvedora Full Stack / Gerente de Sistemas - AADESAM (2024 - Atual)</strong>
        <ul className='list-disc pl-4'>
          <li>Desenvolvimento, manutenção e evolução de sistemas web institucionais.</li>
          <li>Responsabilidade pelo acompanhamento e sustentação de 9 sistemas.</li>
          <li>Participação em todas as etapas do desenvolvimento, desde o levantamento de requisitos até a implementação das soluções.</li>
          <li>Planejamento, organização e acompanhamento de demandas e projetos de TI.</li>
          <li>Orientação técnica e acompanhamento das atividades de 2 estagiários de desenvolvimento.</li>
        </ul>
      </li>
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
    <p className="text-base lg:text-lg text-[var(--text-white)] ">
      Sou Analista Desenvolvedora, com experiência em desenvolvimento e manutenção de sistemas, levantamento de requisitos, análise de processos e gerenciamento de projetos de tecnologia. Atuo em todo o ciclo de desenvolvimento, desde a identificação das necessidades até a implementação e evolução das soluções, trabalhando com diferentes tecnologias e bancos de dados.

Também tenho experiência na coordenação de atividades e gerenciamento de equipe, conciliando conhecimentos técnicos com organização, comunicação e visão de negócio. Sou uma profissional proativa, autodidata e comprometida com a busca por soluções que otimizem processos e gerem resultados.
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