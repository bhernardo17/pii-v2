// src/components/About/About.jsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
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

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const TextContent = styled.div`
  order: 1;
  
  @media (max-width: 768px) {
    order: 2;
  }
`;

const ImageContent = styled.div`
  order: 2;
  
  @media (max-width: 768px) {
    order: 1;
  }
`;

const AboutImage = styled(motion.img)`
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const Paragraph = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
`;

const Highlight = styled.span`
  color: var(--primary);
  font-weight: 600;
`;

const About = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <AboutSection id="sobre">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <Title variants={itemVariants}>
            O que é o PII?
          </Title>
          
          <ContentGrid>
            <TextContent>
              <motion.div variants={itemVariants}>
                <Paragraph>
                  O <Highlight>Programa de Incentivo à Inovação (PII)</Highlight> de Florianópolis, 
                  carinhosamente conhecido como "Lei Rouanet Manezinha", é uma iniciativa voltada 
                  ao desenvolvimento de soluções inovadoras, viabilizada por meio de benefícios tributários.
                </Paragraph>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Paragraph>
                  Este mecanismo estratégico visa fomentar o empreendedorismo inovador de interesse 
                  para o município por meio da concessão de incentivos fiscais, viabilizados por um 
                  contribuinte incentivador e destinados a proponentes previamente aprovados no programa.
                </Paragraph>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Paragraph>
                  Instituído em 2018, o programa tem gerado impactos significativos tanto para os 
                  projetos beneficiados quanto para o desenvolvimento socioeconômico do município, 
                  permitindo que empresas e empreendedores inovadores recebam até <Highlight>20% do 
                  ISSQN e do IPTU</Highlight> de contribuintes incentivadores.
                </Paragraph>
              </motion.div>
            </TextContent>
            
            <ImageContent>
              <motion.div variants={itemVariants}>
                <AboutImage
                  src="/assets/inovacao.png"
                  alt="Inovação em Florianópolis"
                />
              </motion.div>
            </ImageContent>
          </ContentGrid>
        </motion.div>
      </Container>
    </AboutSection>
  );
};

export default About;