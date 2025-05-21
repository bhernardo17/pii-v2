<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { FaProjectDiagram, FaMoneyBillWave } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const StatisticsSection = styled.section`
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

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.02);
  }
`;

const IconWrapper = styled.div`
  font-size: 2.5rem;
  color: var(--primary);
  margin-bottom: 1rem;
`;

const StatNumber = styled(motion.div)`
  font-size: 3.5rem;
  font-weight: bold;
  color: var(--primary);
  line-height: 1;
`;

const StatLabel = styled.h3`
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin: 0;
`;

const StatDescription = styled.p`
  font-size: 1rem;
  color: var(--text-secondary);
  margin-top: 0.5rem;
`;

const CountUpAnimation = ({ end, duration = 2, prefix = "", suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      let startTime;
      let animationFrame;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / (duration * 1000), 1);
        
        // Easing function
        const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
        
        setCount(Math.floor(easeOutQuart * end * 100) / 100);

        if (percentage < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }
  }, [inView, end, duration]);

  return (
    <StatNumber ref={ref}>
      {prefix}{count.toLocaleString('pt-BR')}{suffix}
    </StatNumber>
  );
};

const Statistics = () => {
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

  const stats = [
    {
      icon: <FaProjectDiagram />,
      number: 25,
      suffix: "+",
      label: "Projetos",
      description: "Desde 2018, o PII aprovou mais de 25 projetos inovadores"
    },
    {
      icon: <FaMoneyBillWave />,
      number: 4.5,
      prefix: "R$ ",
      suffix: "M",
      label: "Investimento",
      description: "Mais de R$ 4,5 milhões investidos em projetos inovadores"
    }
  ];

  return (
    <StatisticsSection id="estatisticas">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <Title variants={itemVariants}>
            Impacto do Programa
          </Title>

          <StatsGrid>
            {stats.map((stat, index) => (
              <StatCard key={index} variants={itemVariants}>
                <IconWrapper>{stat.icon}</IconWrapper>
                <CountUpAnimation 
                  end={stat.number} 
                  prefix={stat.prefix || ""} 
                  suffix={stat.suffix || ""}
                />
                <StatLabel>{stat.label}</StatLabel>
                <StatDescription>{stat.description}</StatDescription>
              </StatCard>
            ))}
          </StatsGrid>
        </motion.div>
      </Container>
    </StatisticsSection>
  );
};

=======
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { FaProjectDiagram, FaMoneyBillWave } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const StatisticsSection = styled.section`
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

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.02);
  }
`;

const IconWrapper = styled.div`
  font-size: 2.5rem;
  color: var(--primary);
  margin-bottom: 1rem;
`;

const StatNumber = styled(motion.div)`
  font-size: 3.5rem;
  font-weight: bold;
  color: var(--primary);
  line-height: 1;
`;

const StatLabel = styled.h3`
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin: 0;
`;

const StatDescription = styled.p`
  font-size: 1rem;
  color: var(--text-secondary);
  margin-top: 0.5rem;
`;

const CountUpAnimation = ({ end, duration = 2, prefix = "", suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      let startTime;
      let animationFrame;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / (duration * 1000), 1);
        
        // Easing function
        const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
        
        setCount(Math.floor(easeOutQuart * end * 100) / 100);

        if (percentage < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }
  }, [inView, end, duration]);

  return (
    <StatNumber ref={ref}>
      {prefix}{count.toLocaleString('pt-BR')}{suffix}
    </StatNumber>
  );
};

const Statistics = () => {
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

  const stats = [
    {
      icon: <FaProjectDiagram />,
      number: 25,
      suffix: "+",
      label: "Projetos",
      description: "Desde 2018, o PII aprovou mais de 25 projetos inovadores"
    },
    {
      icon: <FaMoneyBillWave />,
      number: 4.5,
      prefix: "R$ ",
      suffix: "M",
      label: "Investimento",
      description: "Mais de R$ 4,5 milhões investidos em projetos inovadores"
    }
  ];

  return (
    <StatisticsSection id="estatisticas">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <Title variants={itemVariants}>
            Impacto do Programa
          </Title>

          <StatsGrid>
            {stats.map((stat, index) => (
              <StatCard key={index} variants={itemVariants}>
                <IconWrapper>{stat.icon}</IconWrapper>
                <CountUpAnimation 
                  end={stat.number} 
                  prefix={stat.prefix || ""} 
                  suffix={stat.suffix || ""}
                />
                <StatLabel>{stat.label}</StatLabel>
                <StatDescription>{stat.description}</StatDescription>
              </StatCard>
            ))}
          </StatsGrid>
        </motion.div>
      </Container>
    </StatisticsSection>
  );
};

>>>>>>> Nicodev
export default Statistics;