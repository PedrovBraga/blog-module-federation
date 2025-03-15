import React from 'react';

const About = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Sobre o Blog</h1>
      <p className="text-lg text-gray-700 mb-4">
        Bem-vindo ao nosso blog! Este é um espaço dedicado a compartilhar conhecimento, 
        explorar ideias e criar conexões. Nosso objetivo é trazer conteúdo relevante e 
        inspirador sobre diversos tópicos.
      </p>
      <h2 className="text-2xl font-semibold mb-3">Nossa Missão</h2>
      <p className="text-gray-700 mb-4">
        Nossa missão é fornecer um espaço onde os leitores possam aprender, crescer e 
        se envolver com tópicos de interesse. Valorizamos a curiosidade e o desejo de 
        expandir horizontes.
      </p>
      <h2 className="text-2xl font-semibold mb-3">Equipe</h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>Autor 1 - Especialista em Tecnologia</li>
        <li>Autor 2 - Entusiasta de Literatura</li>
        <li>Autor 3 - Fotógrafo e Viajante</li>
      </ul>
    </div>
  );
};

export default About;
