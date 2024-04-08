"use client";
import React, {useTransition, useState} from 'react';
import Image from 'next/image';
import TabButton from './TabButton';


const TAB_DATA = [
  {
    title: "Habilidades",
    id: "habilidades", 
    content: (
      <ul className='list-disc pl-2'>
        <li>HTML</li>
        <li>CSS</li>
        <li>HTML</li>
        <li>Javascript</li>
        <li>Wordpress</li>
        <li>Bootstrap</li>
        <li>Tailwind</li>
        <li>PHP</li>
        <li>Laravel</li>
        <li>Python</li>
        <li>Java</li>
        <li>Spring Boot</li>
        <li>Postman</li>
      </ul>
    )
  },
  {
    title: "educacao",
    id: "educacao", 
    content: (
      <ul className='list-disc pl-2'>
        <li>Técnologo em Análise e Desenvolvimento de Sistemas - FAMETRO </li>
        <li>Curso completo de Desenvolvimento Web FullstackS </li>
        <li>Curso de Java do básico ao avançado</li>
        <li>Curso básico de Python</li>
        <li>Desenvolvimento de APIs</li>
      </ul>
    )
  },
  {
    title: "Experiencias",
    id: "experiencias", 
    content: (
      <ul className='list-disc pl-2'>
        <li>Estagiária de Desenvolvimento de Sistemas e atendimento ao usuário </li>
        <li>Desenvolvedora Junior Fullstack</li>
      </ul>
    )
  }
]


const AboutSection = () => {

  const [tab, setTab] = useState("habilidades");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = id => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
   <section className="text-white ">
    <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
    <Image src="/images/about-image.jpg" alt='sobre mim'  width={500} height={500}  /> 
    <div>
    <h2 className="text-4xl font-bold text-white mb-4">Sobre mim</h2>
    <p className="text-base lg:text-lg ">Olá! Me chamo Delciane Pinheiro e tenho 23 anos, me descrevo como uma pessoa 
    animada, proativa, comunicativa e principalmente determinada a cumprir meus objetivos pessoais e profissionais. 
    Sou desenvolvedora de sistemas Web e também desktop, atuando com as tecnologias HTML, CSS, Javascript, Bootstrap,
    Tailwind, PHP, Laravel, Python, Java e Spring Boot. Utilizo banco de dados como mysql, Firebase e tenho noções de 
    Postgree. Estou no último período da graduação de Análise e Desenvolvimento de Sistemas onde venho aprendendo sobre
    metodologias ágeis, gerência de projetos, análise de requisitos e estou pronta para demonstrar
    o aprendizado que obtive. 
     </p>
    <div className="flex flex-row mt-8">
      <TabButton  selectTab={() => handleTabChange("habilidades")} active={tab === "habilidades"}> Habilidades </TabButton>
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