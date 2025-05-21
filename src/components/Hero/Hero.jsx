import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  padding: 80px 0;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 60px 0;
    min-height: 100svh;
  }
`;

const Slide = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
              url(${props => props.bgImage}) no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
  will-change: opacity;

  @media (max-width: 768px) {
    background-attachment: scroll;
    background-position: center;
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
  color: white;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
    justify-content: center;
    min-height: calc(100vh - 120px);
  }
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    padding: 0 0.5rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  margin-bottom: 3rem;
  max-width: 800px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    padding: 0 0.5rem;
  }
`;

const CTAButton = styled(motion.a)`
  display: inline-block;
  padding: 1rem 2rem;
  background-color: var(--primary);
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: 600;
  transition: background-color 0.3s ease;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    margin-bottom: 2rem;
    font-size: 0.9rem;
  }
  
  &:hover {
    background-color: #0052a3;
  }
`;

const LogoButton = styled(motion.button)`
  background: none;
  border: none;
  padding: 10px;
  cursor: pointer;
  opacity: 0.9;
  transition: opacity 0.3s ease;
  position: relative;
  z-index: 3;
  
  &:hover {
    opacity: 1;
  }
  
  img {
    height: 80px;
    width: auto;
    filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.3));
    
    @media (max-width: 768px) {
      height: 50px;
    }
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 2rem;
  margin: 0 auto;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 10;
  
  @media (max-width: 768px) {
    bottom: 1.5rem;
  }
  
  &::before {
    content: '';
    width: 20px;
    height: 20px;
    border-right: 3px solid white;
    border-bottom: 3px solid white;
    transform: rotate(45deg);
    filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.3));

    @media (max-width: 768px) {
      width: 15px;
      height: 15px;
      border-width: 2px;
    }
  }
`;

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    '/assets/foto1.png',
    '/assets/foto2.jpg',
    '/assets/foto3.jpg',
    '/assets/foto4.jpg',
    '/assets/foto5.jpg',
    '/assets/foto6.jpg',
    '/assets/foto7.png',
    '/assets/foto8.jpg',
    '/assets/foto9.jpg',
    '/assets/foto10.png'
  ];

  useEffect(() => {
    slides.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('sobre');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExternalLink = () => {
    window.open('https://www.pmf.sc.gov.br/'); 
  };

  return (
    <HeroSection>
      <AnimatePresence mode="crossfade">
        <Slide
          key={currentSlide}
          bgImage={slides[currentSlide]}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            transition: {
              duration: 2,
              ease: [0.4, 0, 0.2, 1]
            }
          }}
          exit={{ 
            opacity: 0,
            transition: {
              duration: 2,
              ease: [0.4, 0, 0.2, 1]
            }
          }}
        />
      </AnimatePresence>
      
      <HeroContent>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Programa de Incentivo à Inovação (PII)
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Impulsionando a inovação em Florianópolis com incentivos fiscais e apoio dos Arranjos Promotores de Inovação (APIs)
        </Subtitle>
        <CTAButton
          href="#sobre"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Saiba Mais
        </CTAButton>
        
        <LogoButton
          onClick={handleExternalLink}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src="/assets/logobranco.png" alt="Prefeitura Municipal de Florianópolis" />
        </LogoButton>
      </HeroContent>

      <ScrollIndicator
        onClick={scrollToNextSection}
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          y: [0, 10, 0]
        }}
        transition={{ 
          opacity: { duration: 0.3 },
          y: { duration: 1.5, repeat: Infinity }
        }}
      />
    </HeroSection>
  );
};

export default Hero;