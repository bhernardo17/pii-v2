import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGlobe, FaInstagram, FaLinkedin, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const ProjectsSection = styled.section`
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const LogoWrapper = styled.div`
  width: 200px;
  height: 100px;
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
  font-size: 1.5rem;
  color: var(--text-primary);
  margin-bottom: 1rem;
  text-align: center;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const SocialLink = styled.a`
  color: var(--primary);
  font-size: 1.5rem;
  transition: color 0.3s ease, transform 0.3s ease;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: var(--primary-dark);
    transform: scale(1.1);
  }
`;

const Projects = () => {
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

  const projectsData = [
    {
      title: "Altrum Medical",
      logo: "/assets/logo_projeto/Altrum.png",
      links: {
        instagram: "https://www.instagram.com/altrummedical/",
        linkedin: "https://www.linkedin.com/company/altrum-medical/"
      }
    },
    {
      title: "Control Robotics",
      logo: "/assets/logo_projeto/ControlRobotic.jpeg",
      links: {
        website: "https://www.controlrpa.com.br/",
        linkedin: "https://www.linkedin.com/company/control-rpa/",
        instagram: "https://www.instagram.com/controlrpa/"
      }
    },
    {
      title: "Let's Hike",
      logo: "/assets/logo_projeto/lets-hike-logo.png",
      links: {
        website: "https://www.letshike.com.br/",
        instagram: "https://www.instagram.com/letshike.app/",
        linkedin: "https://www.linkedin.com/company/let´s-hike-app/"
      }
    },
    {
      title: "Plataforma PAM",
      logo: "/assets/logo_projeto/PAM.png",
      links: {
        website: "https://plataformapam.com.br/",
        instagram: "https://www.instagram.com/plataformapam/",
        facebook: "https://www.facebook.com/people/Plataforma-PAM/61557389050144/",
        linkedin: "https://www.linkedin.com/company/plataforma-pam/",
        whatsapp: "https://api.whatsapp.com/send?phone=5548999149255"
      }
    },
    {
      title: "RT Medical",
      logo: "/assets/logo_projeto/RT_Medical.png",
      links: {
        website: "https://rtmedical.com.br/",
        instagram: "https://www.instagram.com/rtmsystems/",
        linkedin: "https://br.linkedin.com/company/rtmedical/"
      }
    },
    {
      title: "SANAPP",
      logo: "/assets/logo_projeto/Sanapp.png",
      links: {
        website: "https://geosanapp.com.br/",
        instagram: "https://www.instagram.com/sanapp/",
        linkedin: "https://www.linkedin.com/company/sanapp-gestão-inteligente-de-ativos-de-saneamento/"
      }
    }
  ];

  return (
    <ProjectsSection id="projetos">
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
          
          <ProjectsGrid>
            {projectsData.map((project, index) => {
              console.log(`Projeto: ${project.title}, Links:`, project.links);
              return (
                <ProjectCard
                  key={index}
                  variants={cardVariants}
                >
                  <LogoWrapper>
                    <img src={project.logo} alt={`Logo ${project.title}`} />
                  </LogoWrapper>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <SocialLinks>
                    {project.links.website && (
                      <SocialLink 
                        href={project.links.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="Website"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.links.website, '_blank');
                        }}
                      >
                        <FaGlobe />
                      </SocialLink>
                    )}
                    {project.links.instagram && (
                      <SocialLink 
                        href={project.links.instagram} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.links.instagram, '_blank');
                        }}
                      >
                        <FaInstagram />
                      </SocialLink>
                    )}
                    {project.links.linkedin && (
                      <SocialLink 
                        href={project.links.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.links.linkedin, '_blank');
                        }}
                      >
                        <FaLinkedin />
                      </SocialLink>
                    )}
                    {project.links.facebook && (
                      <SocialLink 
                        href={project.links.facebook} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.links.facebook, '_blank');
                        }}
                      >
                        <FaFacebook />
                      </SocialLink>
                    )}
                    {project.links.whatsapp && (
                      <SocialLink 
                        href={project.links.whatsapp} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="WhatsApp"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.links.whatsapp, '_blank');
                        }}
                      >
                        <FaWhatsapp />
                      </SocialLink>
                    )}
                  </SocialLinks>
                </ProjectCard>
              );
            })}
          </ProjectsGrid>
        </motion.div>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;