import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
// Importar ícones se necessário, por enquanto não vou adicionar links sociais para simplificar
// import { FaGlobe, FaInstagram, FaLinkedin, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { FaGlobe, FaInstagram, FaLinkedin, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const ProponentsSection = styled.section`
  padding: 5rem 0;
  background-color: var(--background);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Title = styled(motion.h2)`
  text-align: center;
  font-size: 2.5rem;
  color: var(--primary);
  margin-bottom: 3rem;
`;

const FilterContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  padding: 1rem;
  background-color: var(--background-light);
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const FilterButton = styled.button`
  background-color: ${props => props.active ? 'var(--primary)' : 'white'};
  color: ${props => props.active ? 'white' : 'var(--text-primary)'};
  border: 2px solid var(--primary);
  border-radius: 25px;
  padding: 0.8rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 120px;

  &:hover {
    background-color: ${props => props.active ? 'var(--primary-dark)' : 'var(--primary-light)'};
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const CategorySection = styled(motion.div)`
  margin-bottom: 4rem;
`;

const CategoryTitle = styled.h3`
  font-size: 2rem;
  color: var(--primary);
  margin-bottom: 2rem;
  padding-bottom: 0.5rem;
  border-bottom: 3px solid var(--primary-light);
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
  }
`;

const LogoWrapper = styled.div`
  width: 180px;
  height: 90px;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.3rem;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
`;

const CategoryLabel = styled.span`
  font-size: 0.9rem;
  color: var(--text-secondary);
  background-color: var(--primary-light);
  padding: 0.25rem 0.8rem;
  border-radius: 15px;
`;

const SocialIconsContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const SocialIconLink = styled.a`
  color: var(--text-secondary);
  font-size: 1.4rem;
  transition: color 0.3s ease;

  &:hover {
    color: var(--primary);
  }
`;

const Proponents = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const companiesData = [
    // Projetos Incentivados (Proponentes)
    { id: 1, title: "Altrum Medical", logo: "/assets/logo_projeto/Altrum.png", category: "Saúde", website: '', instagram: 'https://www.instagram.com/altrummedical', linkedin: 'https://www.linkedin.com/company/altrum-medical/', facebook: '', whatsapp: '' },
    { id: 2, title: "Robótica de Controle", logo: "/assets/logo_projeto/ControlRobotic.jpeg", category: "TI", website: 'https://www.controlrpa.com.br/', instagram: 'https://www.instagram.com/controlrpa/', linkedin: 'https://www.linkedin.com/company/control-rpa', facebook: '', whatsapp: '' },
    { id: 3, title: "Vamos caminhar", logo: "/assets/logo_projeto/lets-hike-logo.png", category: "Educação", website: 'https://www.letshike.com.br/', instagram: 'https://www.instagram.com/letshike.app', linkedin: 'https://www.linkedin.com/company/let´s-hike-app/about/', facebook: '', whatsapp: '' },
    { id: 4, title: "Plataforma PAM", logo: "/assets/logo_projeto/PAM.png", category: "Saúde", website: 'https://plataformapam.com.br', instagram: 'https://www.instagram.com/plataformapam', linkedin: 'https://www.linkedin.com/company/plataforma-pam', facebook: 'https://www.facebook.com/people/Plataforma-PAM/61557389', whatsapp: 'https://api.whatsapp.com/send?phone=5548999149255' },
    { id: 5, title: "RT Médico", logo: "/assets/logo_projeto/RT_Medical.png", category: "Saúde", website: 'https://rtmedical.com.br/', instagram: 'https://www.instagram.com/rtmsystems/', linkedin: 'https://br.linkedin.com/company/rtmedical', facebook: '', whatsapp: '' },
    { id: 6, title: "SANAPP", logo: "/assets/logo_projeto/Sanapp.png", category: "TI", website: 'https://geosanapp.com.br/', instagram: 'https://www.instagram.com/', linkedin: 'https://www.linkedin.com/company/sanapp-gestão-inteligente-de-ativos-de-saneamento/', facebook: '', whatsapp: '' },
  ];

  const filters = [
    { id: 'all', label: 'Todos' },
    { id: 'saude', label: 'Saúde' },
    { id: 'educacao', label: 'Educação' },
    { id: 'ti', label: 'TI' },
  ];

  // Função para normalizar texto (remover acentos e converter para minúsculas)
  const normalizeText = (text) => {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  };

  // Filtrar empresas baseado no filtro ativo
  const filteredCompanies = activeFilter === 'all'
    ? companiesData
    : companiesData.filter(company => 
        normalizeText(company.category) === normalizeText(activeFilter)
      );

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <ProponentsSection id="projetos">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <Title variants={cardVariants}>
            Projetos Incentivados
          </Title>

          <FilterContainer variants={cardVariants}>
            {filters.map(filter => (
              <FilterButton
                key={filter.id}
                active={activeFilter === filter.id}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </FilterButton>
            ))}
          </FilterContainer>
          
          <ProjectsGrid>
            <AnimatePresence mode="wait">
              {filteredCompanies.map((company) => (
                <ProjectCard
                  key={company.id}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  layout
                >
                  <LogoWrapper>
                    <img src={company.logo} alt={`Logo ${company.title}`} />
                  </LogoWrapper>
                  <ProjectTitle>{company.title}</ProjectTitle>
                  <CategoryLabel>{company.category}</CategoryLabel>
                  <SocialIconsContainer>
                    {company.website && (
                      <SocialIconLink href={company.website} target="_blank" rel="noopener noreferrer">
                        <FaGlobe />
                      </SocialIconLink>
                    )}
                    {company.instagram && (
                      <SocialIconLink href={company.instagram} target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                      </SocialIconLink>
                    )}
                    {company.linkedin && (
                      <SocialIconLink href={company.linkedin} target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                      </SocialIconLink>
                    )}
                    {company.facebook && (
                      <SocialIconLink href={company.facebook} target="_blank" rel="noopener noreferrer">
                        <FaFacebook />
                      </SocialIconLink>
                    )}
                    {company.whatsapp && (
                      <SocialIconLink href={company.whatsapp} target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp />
                      </SocialIconLink>
                    )}
                  </SocialIconsContainer>
                </ProjectCard>
              ))}
            </AnimatePresence>
          </ProjectsGrid>
        </motion.div>
      </Container>
    </ProponentsSection>
  );
};

export default Proponents; 