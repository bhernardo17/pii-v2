// src/components/Participation/Participation.jsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaUserTie, FaBuilding, FaFileAlt, FaCheckCircle } from 'react-icons/fa';

const ParticipationSection = styled.section`
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

const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  gap: 1px;
`;

const Tab = styled(motion.button)`
  padding: 1rem 2rem;
  font-size: 1.1rem;
  background: ${props => props.active ? 'var(--primary)' : 'transparent'};
  color: ${props => props.active ? 'white' : 'var(--text-primary)'};
  border: 2px solid var(--primary);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:first-child {
    border-radius: 5px 0 0 5px;
  }
  
  &:last-child {
    border-radius: 0 5px 5px 0;
  }
  
  &:hover {
    background: ${props => props.active ? 'var(--primary)' : 'rgba(0, 102, 204, 0.1)'};
  }
`;

const ContentGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  height: 100%;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--primary);
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    font-size: 1.8rem;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled(motion.li)`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  color: var(--text-primary);
  line-height: 1.5;
  
  svg {
    color: var(--primary);
    margin-top: 0.3rem;
    flex-shrink: 0;
  }
`;

const Participation = () => {
  const [activeTab, setActiveTab] = React.useState('proponentes');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
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
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const content = {
    proponentes: [
      {
        icon: <FaUserTie />,
        title: "Pessoas Físicas e MEIs",
        items: [
          "Microempreendedores Individuais (MEIs)",
          "Pessoas físicas com projetos inovadores",
          "Vinculação a um Arranjo Promotor de Inovação"
        ]
      },
      {
        icon: <FaBuilding />,
        title: "Empresas",
        items: [
          "Micro e pequenas empresas",
          "Estabelecidas em Florianópolis ou com intenção de se instalar",
          "Projetos com soluções inovadoras de interesse público"
        ]
      }
    ],
    incentivadores: [
      {
        icon: <FaFileAlt />,
        title: "Requisitos Fiscais",
        items: [
          "Pessoas físicas ou jurídicas com IPTU ou ISSQN em Florianópolis",
          "No caso do ISSQN, alíquota deve ser superior a 2%",
          "Estar em dia com as obrigações fiscais municipais"
        ]
      },
      {
        icon: <FaCheckCircle />,
        title: "Limites e Condições",
        items: [
          "Destinação de até 20% do ISSQN ou IPTU",
          "ISSQN: apenas para tributos do próprio prestador",
          "Vedado para substituição tributária ou Simples Nacional"
        ]
      }
    ]
  };

  return (
    <ParticipationSection id="participacao">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <Title variants={itemVariants}>
            Quem pode participar?
          </Title>

          <TabsContainer>
            <Tab
              active={activeTab === 'proponentes'}
              onClick={() => setActiveTab('proponentes')}
              variants={itemVariants}
            >
              Proponentes
            </Tab>
            <Tab
              active={activeTab === 'incentivadores'}
              onClick={() => setActiveTab('incentivadores')}
              variants={itemVariants}
            >
              Incentivadores
            </Tab>
          </TabsContainer>

          <ContentGrid
            key={activeTab}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {content[activeTab].map((item, index) => (
              <Card key={index} variants={itemVariants}>
                <CardTitle>
                  {item.icon}
                  {item.title}
                </CardTitle>
                <List>
                  {item.items.map((listItem, idx) => (
                    <ListItem key={idx} variants={itemVariants}>
                      <FaCheckCircle />
                      {listItem}
                    </ListItem>
                  ))}
                </List>
              </Card>
            ))}
          </ContentGrid>
        </motion.div>
      </Container>
    </ParticipationSection>
  );
};

export default Participation;