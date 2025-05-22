import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBuilding, FaGlobe } from 'react-icons/fa';

const CredentialsSection = styled.section`
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

const APIGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const APICard = styled(motion.div)`
  background-color: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  min-height: 200px;
`;

const APITitle = styled.h3`
  font-size: 1.5rem;
  color: var(--primary);
  display: flex;
  align-items: center;
  gap: 10px;
  text-align: left;
  line-height: 1.4;
  margin: 0;
  padding: 0;
  width: 100%;

  svg {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    color: var(--primary);
  }
`;

const APIDescription = styled.p`
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 12px 0 0 0;
  padding: 0;
  text-align: left;
  width: 100%;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
  hyphens: auto;
  max-width: 100%;
  white-space: normal;
`;

const ActionButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: var(--primary);
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  width: 100%;

  svg {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }

  &:hover {
    background-color: var(--primary-dark);
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
  }
`;

const Credentials = () => {
  const apisData = [
    {
      title: "API Inova+Saúde",
      link: "https://www.inovasaudesc.com.br/",
      description: "O API Inova+Saúde é gerenciado pela Associação Catarinense de Medicina (ACM). Contato: https://www.inovasaudesc.com.br/contato"
    },
    {
      title: "API ACATE",
      link: "https://sc.acate.com.br/api",
      description: "O API ACATE é gerenciado pela Associação Catarinense de Tecnologia (ACATE). Contato: +55 (48) 2107-2700, ramal 2770 ou api.acate@acate.com.br"
    },
    {
      title: "API de Inovação e Economia Criativa",
      link: "https://api.cdltech.com.br/",
      description: "O API de Inovação e Economia Criativa é gerenciado pela Câmara de Dirigentes Lojistas de Florianópolis (CDL) Contato: +55 (48) 9915917 ou api@cdlflorianopolis.org.br ou https://www.instagram.com/cdlinovacaoetecnologia/"
    },
    {
      title: "API Câmara Brasil-Portugal",
      link: "https://brasilportugalsc.org.br/",
      description: "O API Câmara Brasil-Portugal é gerenciado pela Câmara de Comércio Brasil-Portugal de Florianópolis. Contato: contato@brasilportugalsc.org.br ou +55 (48) 98809-4477"
    },
    {
      title: "API Inovar ACIF",
      link: "https://api.acif.org.br/",
      description: "O API Inovar ACIF é gerenciado pela Associação Comercial e Industrial de Florianópolis (ACIF). Contato:  +55 (48) 999116852 ou analista.programas@acif.org.br​. ​"
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
    <CredentialsSection id="apis-credenciados">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <Title variants={itemVariants}>
            Conheça os APIs Credenciados
          </Title>
          
          <APIGrid variants={containerVariants}>
            {apisData.map((api, index) => (
              <APICard key={index} variants={itemVariants}>
                <div>
                  <APITitle>
                    <FaBuilding />
                    {api.title}
                  </APITitle>
                  <APIDescription>
                    {api.description}
                  </APIDescription>
                </div>
                <ActionButton
                  href={api.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGlobe />
                  Acessar
                </ActionButton>
              </APICard>
            ))}
          </APIGrid>
        </motion.div>
      </Container>
    </CredentialsSection>
  );
};

export default Credentials;