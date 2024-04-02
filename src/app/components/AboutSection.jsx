"use client";
import React, {useTransition, useState} from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const AboutSection = () => {

  const [tab, setTab] = useState("Skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = id => {
    startTransition(() => {

    });
  }

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
    </div>
    </div>
   </section>
  )
}

export default AboutSection;