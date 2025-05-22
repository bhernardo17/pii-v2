import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const FAQSection = styled.section`
  padding: 100px 0;
  background-color: var(--bg-secondary);
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

const FAQContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FAQItem = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.02);
  }
`;

const Question = styled.button`
  width: 100%;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  color: var(--text-primary);
  font-weight: 500;
  text-align: left;

  svg {
    transition: transform 0.3s ease;
    transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0)')};
    color: var(--primary);
  }
`;

const Answer = styled(motion.div)`
  padding: 0 1.5rem 1.5rem;
  color: var(--text-secondary);
  line-height: 1.6;
`;

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState(null);

  const faqData = [
    {
      question: "Quem pode participar do PII?",
      answer: "O PII é aberto a pessoas físicas, MEIs e empresas que desenvolvam projetos inovadores. Os proponentes precisam estar vinculados a um API credenciado e ter um projeto que atenda aos critérios do programa."
    },
    {
      question: "Qual o valor máximo de incentivo fiscal?",
      answer: "O programa permite a destinação de até 20% do ISSQN ou IPTU devido ao município. No caso do ISSQN, é válido apenas para tributos do próprio prestador, não se aplicando a casos de substituição tributária ou Simples Nacional."
    },
    {
      question: "Como funciona o processo de avaliação?",
      answer: "O processo de avaliação ocorre em duas etapas: primeiro pela Comissão de Seleção, composta por 16 membros, e depois pelo Comitê Gestor, formado por 3 Secretários Municipais e 3 representantes externos."
    },
    {
      question: "Quanto tempo leva o processo de aprovação?",
      answer: "O tempo de aprovação pode variar dependendo do volume de projetos e da complexidade da proposta. Em média, o processo completo, desde a submissão até a aprovação final, leva entre 60 e 90 dias."
    },
    {
      question: "Como escolher um API para se vincular?",
      answer: "A escolha do API deve considerar a área de atuação do seu projeto. Cada API tem expertise em setores específicos: saúde (API Inova+Saúde), tecnologia (API ACATE), economia criativa (API CDL), Internacionalização (API Câmara Brasil-Portugal) e comércio/indústria (API ACIF)."
    },
    {
      question: "O que acontece após a aprovação do projeto?",
      answer: "Após a aprovação, o proponente recebe uma Carta de Autorização e assina um Contrato de Parceria. Em seguida, pode iniciar a captação de recursos junto aos contribuintes incentivadores."
    }
  ];

  return (
    <FAQSection id="faq">
      <Container>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Perguntas Frequentes
        </Title>
        
        <FAQContainer>
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FAQItem>
                <Question
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  $isOpen={openIndex === index}
                >
                  {item.question}
                  <FaChevronDown />
                </Question>
                {openIndex === index && (
                  <Answer
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.answer}
                  </Answer>
                )}
              </FAQItem>
            </motion.div>
          ))}
        </FAQContainer>
      </Container>
    </FAQSection>
  );
};

export default FAQ;