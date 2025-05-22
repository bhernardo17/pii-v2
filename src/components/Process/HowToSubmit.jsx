import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Ícones para indicar expansão

const HowToSubmitSection = styled.section`
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

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const SectionCard = styled(motion.div)`
  padding: 2rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const SectionTitle = styled.h3`
  font-size: 1.8rem;
  color: var(--primary);
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const StepDescription = styled.p`
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 1rem;
`;

const StyledListItem = styled.li`
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 0.5rem;
  position: relative;
  padding-left: 0.5rem;

  &::before {
    content: '•';
    color: var(--primary);
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -0.5em;
    position: absolute;
    left: 0;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ApiButton = styled.a`
  display: inline-block;
  background-color: #0066cc;
  color:rgb(255, 255, 255); /* Cor do texto do botão */
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  margin-top: 1rem;
  text-align: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color:rgb(3, 76, 150);
    color: rgba(255, 255, 255, 0.97);
  }
`;

const ImportantRules = styled(motion.div)`
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

const RuleTitle = styled.h3`
  font-size: 1.8rem;
  color: var(--primary);
  text-align: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

const RuleList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 1rem;
`;

const RuleListItem = styled.li`
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 0.5rem;
  position: relative;
  padding-left: 1rem;

  &::before {
    content: '•';
    color: var(--primary);
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
    position: absolute;
    left: 0;
  }

  strong {
    font-weight: bold;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const FinancialAttentionTitle = styled(StepDescription)`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  color: var(--primary); /* Cor para o título clicável */

  svg {
    margin-left: 0.5rem;
  }
`;

const FinancialDetailsContent = styled(motion.div)`
  margin-top: 1rem;
  border-top: 1px solid var(--border-color); /* Adiciona uma linha divisória sutil */
  padding-top: 1rem;
`;

const FinancialDetailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /* Ajuste o minmax conforme necessário */
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const FinancialDetailSection = styled.div`
  /* Estilos para cada coluna dentro do card */
`;

const FinancialDetailTitle = styled.h4`
  font-size: 1.2rem;
  color: var(--primary);
  margin-bottom: 0.8rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const FinancialList = styled.ul`
  list-style: disc; /* Bolinhas */
  padding-left: 20px; /* Espaço para as bolinhas */
`;

const FinancialListItem = styled.li`
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 0.5rem;

  strong {
    font-weight: bold;
  }
`;

const HowToSubmit = () => {
  const [showFinancialDetails, setShowFinancialDetails] = useState(false);

  const toggleFinancialDetails = () => {
    setShowFinancialDetails(!showFinancialDetails);
  };

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

  const financialContentVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto', transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, height: 0, transition: { duration: 0.3, ease: "easeOut" } },
  };

  return (
    <HowToSubmitSection id="como-submeter">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <Title variants={itemVariants}>
            Como submeter uma proposta?
          </Title>

          <ContentGrid>
            {/* Processo de Submissão */}
            <SectionCard variants={itemVariants}>
              <SectionTitle>Processo de Submissão</SectionTitle>
              <StepDescription>
                A apresentação do projeto deve ser realizada por intermédio de um Arranjo Promotor de Inovação (API) devidamente credenciado junto ao município.
              </StepDescription>
              <ApiButton href="#">APIs credenciados</ApiButton>
              <StepDescription>
              (levar para uma página com a lista dos APIs e um link para a página de cada um deles)
              </StepDescription>

            </SectionCard>

            {/* Documentação */}
            <SectionCard variants={itemVariants}>
              <SectionTitle>Documentação</SectionTitle>
              <StepDescription>
                Para submeter um projeto, a documentação inicial inclui:
              </StepDescription>
              <StyledList>
                <StyledListItem>projeto estruturado conforme o Art. 5º da Portaria SMTTDE N° 5/2022;</StyledListItem>
                <StyledListItem>comprovante de residência ou endereço fiscal em Florianópolis;</StyledListItem>
                <StyledListItem>cópia do CPF (PF) ou CNPJ atualizado (PJ) emitido pela Receita Federal;</StyledListItem>
                <StyledListItem>comprovante de filiação ou associação a um Arranjo Promotor de Inovação (API).</StyledListItem>
              </StyledList>
              <StepDescription>
                Após a aprovação do projeto, será exigida a apresentação de documentação complementar.
              </StepDescription>
            </SectionCard>
          </ContentGrid>

          {/* Regras e Critérios Importantes */}
          <SectionCard variants={itemVariants}>
            <RuleTitle>Regras e Critérios Importantes</RuleTitle>
            <RuleList>
              <RuleListItem>Cada proponente pode ter <strong>apenas um projeto ativo</strong> no programa (Cap. II, Art. 3º, § 1º).</RuleListItem>
              <RuleListItem>O projeto deve apresentar inovação e impacto positivo para o município, com retorno em aspectos como geração de empregos, impacto social, ambiental ou fortalecimento da imagem da cidade. (Cap. II, Art. 4º, II).</RuleListItem>
              <RuleListItem>A prestação de contas deve ser feita semestralmente e ao final da execução do projeto (Cap. VII, Art. 30).</RuleListItem>
            </RuleList>

            <FinancialAttentionTitle onClick={toggleFinancialDetails}>
              ► Atenção à proposta do cronograma físico/financeiro:
              {showFinancialDetails ? <FaChevronUp /> : <FaChevronDown />}
            </FinancialAttentionTitle>

            <AnimatePresence>
              {showFinancialDetails && (
                <FinancialDetailsContent
                  key="financialDetails"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={financialContentVariants}
                >
                  {/* Conteúdo financeiro dentro de um único card estilizado como grid */}
                  <SectionCard>
                    <FinancialDetailsGrid>
                      {/* Proibições */}
                      <FinancialDetailSection>
                        <FinancialDetailTitle>Proibições</FinancialDetailTitle>
                        <FinancialList>
                          <FinancialListItem>Proibição de juros, multas ou encargos financeiros → Capítulo II, Art. 4º, § 2º, III</FinancialListItem>
                          <FinancialListItem>Proibição de festas, coquetéis e recepções, salvo exceções → Capítulo II, Art. 4º, § 2º, IV</FinancialListItem>
                          <FinancialListItem>Proibição de aluguel de imóveis, contas de água, energia, telefone e combustível, salvo se diretamente ligados ao projeto → Capítulo II, Art. 4º, § 2º, V</FinancialListItem>
                          <FinancialListItem>Proibição de serviços bancários, assistência jurídica e contábil, salvo se essenciais → Capítulo II, Art. 4º, § 2º, VI</FinancialListItem>
                          <FinancialListItem>Proibição de despesas com itens genéricos ou sem descrição detalhada → Capítulo II, Art. 4º, § 2º, VII</FinancialListItem>
                        </FinancialList>
                      </FinancialDetailSection>

                      {/* Limites de despesas específicas */}
                      <FinancialDetailSection>
                        <FinancialDetailTitle>Limites de despesas específicas:</FinancialDetailTitle>
                        <FinancialList>
                          <FinancialListItem>Remuneração de funcionários: até <strong>50% do valor do projeto</strong> → Capítulo II, Art. 4º, § 2º, II</FinancialListItem>
                          <FinancialListItem>Marketing e publicidade: no máximo <strong>30% do valor do projeto</strong> → Capítulo II, Art. 4º, § 2º, IX</FinancialListItem>
                          <FinancialListItem>Honorários para projetistas, aceleradoras e centros de inovação: até <strong>5% do valor captado</strong> → Capítulo II, Art. 4º, § 2º, VIII</FinancialListItem>
                        </FinancialList>
                      </FinancialDetailSection>

                      {/* Prazo de execução do projeto */}
                      <FinancialDetailSection>
                        <FinancialDetailTitle>Prazo de execução do projeto:</FinancialDetailTitle>
                        <FinancialList>
                          <FinancialListItem>Máximo de <strong>2 anos</strong>, sem prorrogação além desse período → Capítulo II, Art. 4º, § 2º, X</FinancialListItem>
                        </FinancialList>
                      </FinancialDetailSection>
                    </FinancialDetailsGrid>
                  </SectionCard>
                </FinancialDetailsContent>
              )}
            </AnimatePresence>

          </SectionCard>
        </motion.div>
      </Container>
    </HowToSubmitSection>
  );
};

export default HowToSubmit; 