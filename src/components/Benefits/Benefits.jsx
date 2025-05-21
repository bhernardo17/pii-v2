<<<<<<< HEAD
// src/components/Benefits/Benefits.jsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaHandHoldingUsd, FaLightbulb, FaChartLine } from 'react-icons/fa';

const BenefitsSection = styled.section`
  padding: 100px 0;
  background-color: var(--bg-primary);
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

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const BenefitCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
  
  
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  }
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  color: var(--primary);
  margin-bottom: 1.5rem;
`;

const BenefitTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--text-primary);
  margin-bottom: 1rem;
`;

const BenefitDescription = styled.p`
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.6;
`;

const Benefits = () => {
  const benefitsData = [
    {
      icon: <FaHandHoldingUsd />,
      title: "Incentivo Fiscal",
      description: "Concessão de incentivo fiscal sem exigência de restituição aos cofres públicos, permitindo destinar até 20% do ISSQN e IPTU."
    },
    {
      icon: <FaLightbulb />,
      title: "Desenvolvimento de Inovações",
      description: "Alocação de recursos para viabilizar o desenvolvimento de iniciativas inovadoras e soluções tecnológicas."
    },
    {
      icon: <FaChartLine />,
      title: "Crescimento Econômico",
      description: "Estímulo ao crescimento econômico e à criação de novas oportunidades de emprego no município."
    }
  ];

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
    <BenefitsSection id="beneficios">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <Title variants={cardVariants}>
            Benefícios do Programa
          </Title>
          
          <BenefitsGrid>
            {benefitsData.map((benefit, index) => (
              <BenefitCard
                key={index}
                variants={cardVariants}
              >
                <IconWrapper>{benefit.icon}</IconWrapper>
                <BenefitTitle>{benefit.title}</BenefitTitle>
                <BenefitDescription>{benefit.description}</BenefitDescription>
              </BenefitCard>
            ))}
          </BenefitsGrid>
        </motion.div>
      </Container>
    </BenefitsSection>
  );
};

=======
// src/components/Benefits/Benefits.jsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaHandHoldingUsd, FaLightbulb, FaChartLine } from 'react-icons/fa';

const BenefitsSection = styled.section`
  padding: 100px 0;
  background-color: var(--bg-primary);
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

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const BenefitCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
  
  
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  }
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  color: var(--primary);
  margin-bottom: 1.5rem;
`;

const BenefitTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--text-primary);
  margin-bottom: 1rem;
`;

const BenefitDescription = styled.p`
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.6;
`;

const Benefits = () => {
  const benefitsData = [
    {
      icon: <FaHandHoldingUsd />,
      title: "Incentivo Fiscal",
      description: "Concessão de incentivo fiscal sem exigência de restituição aos cofres públicos, permitindo destinar até 20% do ISSQN e IPTU."
    },
    {
      icon: <FaLightbulb />,
      title: "Desenvolvimento de Inovações",
      description: "Alocação de recursos para viabilizar o desenvolvimento de iniciativas inovadoras e soluções tecnológicas."
    },
    {
      icon: <FaChartLine />,
      title: "Crescimento Econômico",
      description: "Estímulo ao crescimento econômico e à criação de novas oportunidades de emprego no município."
    }
  ];

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
    <BenefitsSection id="beneficios">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <Title variants={cardVariants}>
            Benefícios do Programa
          </Title>
          
          <BenefitsGrid>
            {benefitsData.map((benefit, index) => (
              <BenefitCard
                key={index}
                variants={cardVariants}
              >
                <IconWrapper>{benefit.icon}</IconWrapper>
                <BenefitTitle>{benefit.title}</BenefitTitle>
                <BenefitDescription>{benefit.description}</BenefitDescription>
              </BenefitCard>
            ))}
          </BenefitsGrid>
        </motion.div>
      </Container>
    </BenefitsSection>
  );
};

>>>>>>> Nicodev
export default Benefits;