import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const LegislationSection = styled.section`
  padding: 100px 0;
  background-color: var(--bg-secondary);
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  color: var(--primary);
  text-align: center;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const LegislationGrid = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  margin-top: 2rem;
`;

const LegislationLink = styled(motion.a)`
  background-color: #e0e0e0;
  color: var(--text-primary);
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 400;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.6rem;
  width: 100%;
  max-width: 700px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  svg {
    font-size: 1.1em;
  }

  &:hover {
    background-color: #d5d5d5;
    transform: translateY(-2px);
  }

  &:active {
    transform: scale(0.98);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.6rem 1rem;
    max-width: 95%;
  }
`;

const Legislation = () => {
  const legislationData = [
    {
      text: "Lei Municipal de Inovação 432/2021",
      link: "https://leismunicipais.com.br/a/sc/f/florianopolis/lei-complementar/2012/44/432/lei-complementar-n-432-2012-dispoe-sobre-sistemas-mecanismos-e-incentivos-a-atividade-tecnologica-e-inovativa-visando-o-desenvolvimento-sustentavel-do-municipio-de-florianopolis"
    },
    {
      text: "Portaria 005/2022",
      link: "https://www.legisweb.com.br/legislacao/?id=429643"
    },
    {
      text: "Portaria de Nomeação de Seleção",
      link: "#"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <LegislationSection id="legislacao">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <Title variants={itemVariants}>
            Qual a nossa Legislação?
          </Title>
          
          <LegislationGrid variants={containerVariants}>
            {legislationData.map((item, index) => (
              <LegislationLink
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
              >
                <FaExclamationCircle />
                <div style={{ flex: 1, wordBreak: 'break-word' }}>
                  {item.text}
                </div>
              </LegislationLink>
            ))}
          </LegislationGrid>
        </motion.div>
      </Container>
    </LegislationSection>
  );
};

export default Legislation; 
