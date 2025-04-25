import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const FooterSection = styled.footer`
  background-color: var(--background-dark);
  padding: 3rem 0;
  color: var(--text-light);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Logo = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const FooterText = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  color: var(--text-light);
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: var(--primary);
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
`;

const FooterLink = styled.li`
  margin-bottom: 0.5rem;
  
  a {
    color: var(--text-secondary);
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: var(--primary);
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--text-secondary);
`;

const LogoPMF = styled.img`
  width: 300px;
  margin-top: 15px;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterSection>
      <Container>
        <FooterContent>
          <FooterColumn>
            <Logo>PII</Logo>
            <FooterText>
              Programa de Incentivo à Inovação: transformando ideias em soluções inovadoras para o futuro.
            </FooterText>
            <SocialLinks>
              <SocialIcon href="https://www.instagram.com/rededeinovacaofloripa/?igsh=ZzNlaWEza3VqNHpr#" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </SocialIcon>
              <SocialIcon href="mailto:pii.supcti.pmf@gmail.com">
                <FaEnvelope />
              </SocialIcon>
            </SocialLinks>
          </FooterColumn>

          <FooterColumn>
            <h4>Links Rápidos</h4>
            <FooterLinks>
              <FooterLink>
                <a href="#sobre">Sobre</a>
              </FooterLink>
              <FooterLink>
                <a href="#beneficios">Benefícios</a>
              </FooterLink>
              <FooterLink>
                <a href="#participacao">Participação</a>
              </FooterLink>
              <FooterLink>
                <a href="#processo">Processo</a>
              </FooterLink>
            </FooterLinks>
          </FooterColumn>

          <FooterColumn>
            <h4>Contato</h4>
            <FooterText>
              Florianópolis, SC
            </FooterText>
            <FooterText>
              pii.supcti.pmf@gmail.com
            </FooterText>
            <LogoPMF 
              src="/assets/LOGOPMF.png" 
              alt="Logo Prefeitura Municipal de Florianópolis"
            />
          </FooterColumn>
        </FooterContent>

        <Copyright>
          <p>&copy; {currentYear} PII - Programa de Incentivo à Inovação. Todos os direitos reservados.</p>
        </Copyright>
      </Container>
    </FooterSection>
  );
};

export default Footer;