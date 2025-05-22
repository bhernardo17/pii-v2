import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  FaUserPlus, 
  FaFileAlt, 
  FaCheckCircle, 
  FaUsers,
  FaHandshake, 
  FaMoneyBillWave,
  FaStar,
  FaChartLine
} from 'react-icons/fa';

const ProcessSection = styled.section`
  padding: 100px 0;
  background-color: var(--bg-primary);
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (max-width: 768px) {
    padding: 0 15px;
  }
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  color: var(--primary);
  text-align: center;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
    padding: 0 1rem;
  }
`;

const Timeline = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  
  &::after {
    content: '';
    position: absolute;
    width: 6px;
    background-color: var(--primary);
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
    
    @media (max-width: 768px) {
      left: 31px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  padding: 10px 40px;
  position: relative;
  width: 50%;
  left: ${props => props.position === 'left' ? '0' : '50%'};
  
  @media (max-width: 768px) {
    width: 100%;
    padding-left: 50px;
    padding-right: 15px;
    left: 0;
    margin-bottom: 30px;
  }
`;

const TimelineContent = styled(motion.div)`
  padding: 2rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  position: relative;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    padding-left: 3rem;
    margin-left: 15px;
  }
`;

const IconCircle = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  right: ${props => props.position === 'left' ? '-25px' : 'auto'};
  left: ${props => props.position === 'right' ? '-25px' : 'auto'};
  background: var(--primary);
  border-radius: 50%;
  top: 15px;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  
  @media (max-width: 768px) {
    left: -15px;
    width: 35px;
    height: 35px;
    font-size: 1rem;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const StepTitle = styled.h3`
  font-size: 1.3rem;
  color: var(--primary);
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-top: 0;
    padding-top: 0;
  }
`;

const StepDescription = styled.p`
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const EvaluationDetails = styled(motion.div)`
  margin-top: 4rem;
  padding: 2rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    margin: 3rem 1rem 0 1rem;
    padding: 1.5rem;
  }
`;

const EvaluationTitle = styled.h3`
  font-size: 1.8rem;
  color: var(--primary);
  text-align: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

const CommitteesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const Card = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const CardTitle = styled.h4`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.3rem;
  color: var(--primary);
  margin-bottom: 1rem;

  svg {
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    
    svg {
      font-size: 1.3rem;
    }
  }
`;

const CardDescription = styled.p`
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SubTitle = styled(motion.h3)`
  font-size: 1.8rem;
  color: var(--primary);
  text-align: center;
  margin: 2rem 0;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin: 1.5rem 0;
  }
`;

const CriteriaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ApiButton = styled.a`
  display: inline-block;
  background-color: #0066cc; /* Usando a cor do botão que você ajustou em HowToSubmit.jsx */
  color: rgb(255, 255, 255); /* Cor do texto do botão */
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  margin-top: 1rem;
  text-align: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgb(3, 76, 150);
    color: rgba(255, 255, 255, 0.97);
  }
`;

const Process = () => {
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

  const steps = [
    {
      icon: <FaUserPlus />,
      title: "1. Vinculação a um API",
      description: "Vincule-se a um Arranjo Promotor de Inovação (API) credenciado pelo município.",
      position: "left",
      button: { text: "APIs credenciados", href: "#" }
    },
    {
      icon: <FaFileAlt />,
      title: "2. Pré-submissão",
      description: "O API realizará uma análise preliminar e fornecerá suporte para qualificar o projeto.",
      position: "right"
    },
    {
      icon: <FaFileAlt />,
      title: "3. Submissão da Proposta",
      description: "O API submete a proposta de forma eletrônica, garantindo rastreabilidade do processo.",
      position: "left"
    },
    {
      icon: <FaUsers />,
      title: "4. Análise e Aprovação",
      description: "Avaliação em duas fases: Comissão de Seleção e Comitê Gestor.",
      position: "right"
    },
    {
      icon: <FaHandshake />,
      title: "5. Autorização",
      description: "Recebimento da Carta de Autorização e assinatura do Contrato de Parceria.",
      position: "left"
    },
    {
      icon: <FaMoneyBillWave />,
      title: "6. Captação de Recursos",
      description: "Início da captação junto aos contribuintes incentivadores.",
      position: "right"
    }
  ];

  const evaluationCriteria = [
    {
      icon: <FaStar />,
      title: "Nível de Inovação",
      description: "Avaliação do grau de inovação e originalidade"
    },
    {
      icon: <FaFileAlt />,
      title: "Clareza do Projeto",
      description: "Definição clara do objeto e finalidade"
    },
    {
      icon: <FaChartLine />,
      title: "Viabilidade",
      description: "Validação mercadológica e sustentação financeira"
    },
    {
      icon: <FaFileAlt />,
      title: "Cronograma",
      description: "Adequação do cronograma físico/financeiro"
    },
    {
      icon: <FaUsers />,
      title: "Equipe Técnica",
      description: "Qualificação da equipe para o projeto"
    },
    {
      icon: <FaChartLine />,
      title: "Impacto Municipal",
      description: "Relevância para o desenvolvimento econômico"
    },
    {
      icon: <FaHandshake />,
      title: "Retorno Social",
      description: "Benefícios para a municipalidade"
    }
  ];

  return (
    <ProcessSection id="processo">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <Title variants={itemVariants}>
            Como funciona o processo?
          </Title>

          <Timeline>
            {steps.map((step, index) => (
              <TimelineItem
                key={index}
                position={step.position}
                variants={itemVariants}
              >
                <TimelineContent position={step.position}>
                  <IconCircle position={step.position}>
                    {step.icon}
                  </IconCircle>
                  <StepTitle>{step.title}</StepTitle>
                  <StepDescription>{step.description}</StepDescription>
                  {step.button && (
                    <ApiButton href={step.button.href}>
                      {step.button.text}
                    </ApiButton>
                  )}
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>

          <EvaluationDetails variants={itemVariants}>
            <EvaluationTitle>Processo de Avaliação</EvaluationTitle>
            
            <CommitteesGrid>
              <Card variants={itemVariants}>
                <CardTitle>
                  <FaUsers />
                  Comissão de Seleção
                </CardTitle>
                <CardDescription>
                  Primeira fase de avaliação, realizada por 16 membros nomeados 
                  por Portaria. Avaliam os projetos conforme critérios estabelecidos.
                </CardDescription>
              </Card>
              <Card variants={itemVariants}>
                <CardTitle>
                  <FaCheckCircle />
                  Comitê Gestor
                </CardTitle>
                <CardDescription>
                  Segunda fase de avaliação, realizada por 6 membros: 3 Secretários 
                  Municipais e 3 representantes externos, eleitos pelo Conselho 
                  Municipal de Inovação.
                </CardDescription>
              </Card>
            </CommitteesGrid>

            <SubTitle variants={itemVariants}>
              Critérios de Avaliação (0 a 5 pontos)
            </SubTitle>

            <CriteriaGrid>
              {evaluationCriteria.map((criteria, index) => (
                <Card key={index} variants={itemVariants}>
                  <CardTitle>
                    {criteria.icon}
                    {criteria.title}
                  </CardTitle>
                  <CardDescription>
                    {criteria.description}
                  </CardDescription>
                </Card>
              ))}
            </CriteriaGrid>
          </EvaluationDetails>
        </motion.div>
      </Container>
    </ProcessSection>
  );
};

export default Process;