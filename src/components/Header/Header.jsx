import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

const HeaderContainer = styled.header`
  background-color: white;
  padding: 1rem 2rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--text-primary);

  @media (max-width: 768px) {
    display: block;
  }
`;

const LogoButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  height: 50px;
  outline: none;
  
  img {
    height: 100%;
    width: auto;
  }

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  &:focus {
    outline: none;
  }

  transition: transform 0.2s ease;
`;

const MenuItems = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: white;
    padding: 1rem;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    align-items: center;
  }
`;

const MenuItem = styled.a`
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: var(--primary);
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleExternalLink = () => {
    window.open('https://redeinovacao.floripa.br/'); // Substitua pela URL desejada
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderContainer>
      <Nav>
        <LogoContainer>
          <LogoButton 
            onClick={scrollToTop}
            as={motion.button}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src="/assets/inovacao.png" alt="Prefeitura Municipal de Florianópolis" />
          </LogoButton>

          <LogoButton 
            onClick={handleExternalLink}
            as={motion.button}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src="/assets/logoRDF.png" alt="Outra Logo" style={{ height: '100px', width: 'auto', marginTop: '-32px' }} />
          </LogoButton>
        </LogoContainer>

        <MenuButton onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MenuButton>

        <MenuItems $isOpen={isOpen}>
          <MenuItem href="#sobre">Sobre</MenuItem>
          <MenuItem href="#beneficios">Benefícios</MenuItem>
          <MenuItem href="#participacao">Como Participar</MenuItem>
          <MenuItem href="#processo">Processo</MenuItem>
          <MenuItem href="#projetos">Projetos</MenuItem> {/* Adicionar esta linha */}
          <MenuItem href="#estatisticas">Estatísticas</MenuItem>
          <MenuItem href="#contato">Contato</MenuItem>
      </MenuItems>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;