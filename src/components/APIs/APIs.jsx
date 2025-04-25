import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaPhone, FaEnvelope, FaInstagram } from 'react-icons/fa';

const APIsSection = styled.section`
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

const Description = styled(motion.p)`
  max-width: 800px;
  margin: 0 auto 4rem;
  text-align: center;
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.6;
`;

const APIGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const APICard = styled(motion.div)`
  background: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.02);
  }
`;

const APITitle = styled.h3`
  font-size: 1.3rem;
  color: var(--primary);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const APIDescription = styled.p`
  font-size: 1rem;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  flex-grow: 1;
`;

const ContactInfo = styled.div`
  margin-top: auto;
`;

const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-primary);
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  
  &:hover {
    color: var(--primary);
  }
  
  svg {
    color: var(--primary);
  }
`;

const Button = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background-color: var(--primary);
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: 500;
  margin-top: 1rem;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #0052a3;
  }
`;

const APIs = () => {
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
      y: 20
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

  const apisData = [
    {
      title: "API Inova+Saúde",
      description: "Gerenciado pela Associação Catarinense de Medicina (ACM)",
      website: "https://www.inovasaudesc.com.br/",
      contact: "https://www.inovasaudesc.com.br/contato"
    },
    {
      title: "API ACATE",
      description: "Gerenciado pela Associação Catarinense de Tecnologia (ACATE)",
      website: "https://sc.acate.com.br/api",
      phone: "+55 (48) 2107-2700",
      email: "api.acate@acate.com.br"
    },
    {
      title: "API de Inovação e Economia Criativa",
      description: "Gerenciado pela Câmara de Dirigentes Lojistas de Florianópolis (CDL)",
      website: "https://api.cdltech.com.br/",
      phone: "+55 (48) 9915917",
      email: "api@cdlflorianopolis.org.br",
      instagram: "https://www.instagram.com/cdlinovacaoetecnologia/"
    },
    {
      title: "API Inovar ACIF",
      description: "Gerenciado pela Associação Comercial e Industrial de Florianópolis (ACIF)",
      website: "https://api.acif.org.br/",
      phone: "+55 (48) 999116852",
      email: "analista.programas@acif.org.br"
    }
  ];

  return (
    <APIsSection id="apis">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <Title variants={itemVariants}>
            APIs Credenciadas
          </Title>
          <Description variants={itemVariants}>
          A submissão das propostas deve ser realizada por meio de um API devidamente 
            credenciado pelo município. Caso ainda não possua vínculo com um API, 
            selecione a entidade mais adequada para fornecer suporte ao desenvolvimento 
            do seu projeto e formalize sua vinculação.
          </Description>

          <APIGrid>
            {apisData.map((api, index) => (
              <APICard key={index} variants={itemVariants}>
                <APITitle>
                  {api.title}
                </APITitle>
                <APIDescription>
                  {api.description}
                </APIDescription>
                <ContactInfo>
                  {api.phone && (
                    <ContactItem href={`tel:${api.phone}`}>
                      <FaPhone /> {api.phone}
                    </ContactItem>
                  )}
                  {api.email && (
                    <ContactItem href={`mailto:${api.email}`}>
                      <FaEnvelope /> {api.email}
                    </ContactItem>
                  )}
                  {api.instagram && (
                    <ContactItem href={api.instagram} target="_blank" rel="noopener noreferrer">
                      <FaInstagram /> Instagram
                    </ContactItem>
                  )}
                  <Button 
                    href={api.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Visitar Site <FaExternalLinkAlt />
                  </Button>
                </ContactInfo>
              </APICard>
            ))}
          </APIGrid>
        </motion.div>
      </Container>
    </APIsSection>
  );
};

export default APIs;